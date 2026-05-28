// src/viewmodels/RegisterViewModel.js
import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {registerUser, saveStudent} from '../services/FirebaseService';

const SESSION_KEY = '@codebook_session';

export const useRegisterViewModel = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const register = async (formData, navigation) => {
    setError('');
    const {numero, nome, curso, ano, password, confirmPassword} = formData;

    if (!numero || numero.length !== 10) {
      setError('O numero de estudante deve ter 10 digitos.');
      return;
    }
    if (!nome || nome.trim().length < 3) {
      setError('Insere o teu nome completo.');
      return;
    }
    if (!password || password.length < 6) {
      setError('A password deve ter pelo menos 6 caracteres.');
      return;
    }
    if (password !== confirmPassword) {
      setError('As passwords nao coincidem.');
      return;
    }

    setLoading(true);
    try {
      const email = `${numero}@ujac.ac.mz`;

      const authResult = await registerUser(email, password);
      if (!authResult.success) {
        setError(authResult.error);
        return;
      }

      const {idToken, localId} = authResult.user;

      const studentData = {
        numero,
        nome: nome.trim(),
        email,
        curso: curso || 'Engenharia Informatica',
        ano: ano || '',
        localId,
        criadoEm: new Date().toLocaleString('pt-MZ', {timeZone: 'Africa/Maputo'}),
      };

      const saveResult = await saveStudent(studentData, idToken);
      if (!saveResult.success) {
        console.warn('Aviso Firestore:', saveResult.error);
      }

      // Sessao completa com ano
      const session = {
        numero,
        nome: nome.trim(),
        email,
        curso: curso || 'Engenharia Informatica',
        ano: ano || '',
        idToken,
        localId,
      };
      await AsyncStorage.setItem(SESSION_KEY, JSON.stringify(session));

      navigation.replace('Main');
    } catch (err) {
      setError('Erro inesperado. Tenta novamente.');
    } finally {
      setLoading(false);
    }
  };

  return {register, loading, error, setError};
};