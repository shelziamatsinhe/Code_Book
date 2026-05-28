// src/viewmodels/LoginViewModel.js
import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {loginUser, getStudentByNumero} from '../services/FirebaseService';

const SESSION_KEY = '@codebook_session';

// ─────────────────────────────────────────
// Hook de Login com Firebase
// ─────────────────────────────────────────
export const useLoginViewModel = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const login = async (numero, password, navigation) => {
    setError('');

    if (!numero || numero.length !== 10) {
      setError('O numero de estudante deve ter 10 digitos.');
      return;
    }
    if (!password || password.length < 6) {
      setError('A password deve ter pelo menos 6 caracteres.');
      return;
    }

    setLoading(true);
    try {
      const email = `${numero}@ujac.ac.mz`;
      const result = await loginUser(email, password);

      if (!result.success) {
        setError(result.error);
        return;
      }

      const {idToken, localId} = result.user;

      // Buscar perfil completo do Firestore (nome, curso, ano)
      let nome = '';
      let curso = 'Engenharia Informatica';
      let ano = '';

      const profileResult = await getStudentByNumero(numero, idToken);
      if (profileResult.success && profileResult.student) {
        nome = profileResult.student.nome || '';
        curso = profileResult.student.curso || curso;
        ano = profileResult.student.ano || '';
      }

      const session = {
        numero,
        nome,
        email,
        curso,
        ano,
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

  return {login, loading, error, setError};
};

// ─────────────────────────────────────────
// Hook de Sessao Global (ProfileScreen)
// ─────────────────────────────────────────
export const useSessionViewModel = () => {
  const [student, setStudent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadSession();
  }, []);

  const loadSession = async () => {
    try {
      const raw = await AsyncStorage.getItem(SESSION_KEY);
      if (raw) {
        const s = JSON.parse(raw);
        setStudent({
          name:   s.nome   || s.name   || 'Estudante',
          number: s.numero || s.number || '',
          email:  s.email  || '',
          course: s.curso  || s.course || 'Engenharia Informatica',
          year:   s.ano    || s.year   || '',
        });
      } else {
        setStudent(null);
      }
    } catch {
      setStudent(null);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem(SESSION_KEY);
      setStudent(null);
    } catch {}
  };

  const getSession = async () => {
    try {
      const raw = await AsyncStorage.getItem(SESSION_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  };

  const clearSession = logout;

  const updateSession = async updates => {
    try {
      const current = await getSession();
      if (!current) return false;
      const updated = {...current, ...updates};
      await AsyncStorage.setItem(SESSION_KEY, JSON.stringify(updated));
      await loadSession();
      return true;
    } catch {
      return false;
    }
  };

  return {student, isLoading, logout, getSession, clearSession, updateSession};
};