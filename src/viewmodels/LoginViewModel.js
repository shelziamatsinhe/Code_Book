// ============================================================
// ViewModel: LoginViewModel.js
// Camada: ViewModel (MVVM)
// Descrição: Lógica de login e sessão do estudante
//            Guarda os dados localmente com AsyncStorage
// ============================================================

import { useState, useCallback, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Chave de armazenamento da sessão
const SESSION_KEY = '@codebook_session';

export const useLoginViewModel = () => {
  const [form, setForm] = useState({ name: '', number: '' });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Atualiza campo do formulário
  const updateField = useCallback((field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  }, [errors]);

  // Valida o formulário
  const validate = (form) => {
    const errors = {};
    if (!form.name.trim() || form.name.trim().length < 3) {
      errors.name = 'Nome deve ter pelo menos 3 caracteres';
    }
    if (!/^\d{10}$/.test(form.number.trim())) {
      errors.number = 'Número deve ter exactamente 10 dígitos (ex: 2025080007)';
    }
    return errors;
  };

  // Faz login — guarda os dados no AsyncStorage
  const login = useCallback(async () => {
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return false;
    }

    setIsLoading(true);
    try {
      const studentData = {
        name: form.name.trim(),
        number: form.number.trim(),
        email: `${form.number.trim()}@ujac.ac.mz`,
        course: 'Engenharia Informática',
        year: '2º Ano',
        institution: 'UJAC',
      };

      // Guarda a sessão localmente
      await AsyncStorage.setItem(SESSION_KEY, JSON.stringify(studentData));
      return true;
    } catch (error) {
      setErrors({ general: 'Erro ao iniciar sessão. Tenta novamente.' });
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [form]);

  return {
    form,
    errors,
    isLoading,
    updateField,
    login,
  };
};

// ============================================================
// Hook para gerir a sessão global do estudante
// ============================================================
export const useSessionViewModel = () => {
  const [student, setStudent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Carrega a sessão ao iniciar
  useEffect(() => {
    loadSession();
  }, []);

  const loadSession = async () => {
    try {
      const stored = await AsyncStorage.getItem('@codebook_session');
      if (stored) {
        setStudent(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Erro ao carregar sessão:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Termina a sessão
  const logout = async () => {
    try {
      await AsyncStorage.removeItem('@codebook_session');
      setStudent(null);
      return true;
    } catch (error) {
      console.error('Erro ao terminar sessão:', error);
      return false;
    }
  };

  // Atualiza o estudante na sessão
  const refreshSession = async () => {
    await loadSession();
  };

  return {
    student,
    isLoading,
    logout,
    refreshSession,
  };
};