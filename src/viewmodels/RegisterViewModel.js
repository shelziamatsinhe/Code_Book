// ============================================================
// ViewModel: RegisterViewModel.js
// Camada: ViewModel (MVVM)
// Descrição: Lógica do formulário de cadastro — CRUD completo
// ============================================================

import { useState, useCallback } from 'react';
import { validateStudent } from '../models/Student';
import StudentService from '../services/StudentService';

const INITIAL_FORM = {
  name: '',
  number: '',
  course: '',
  year: '',
};

export const useRegisterViewModel = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Atualiza campo do formulário
  const updateField = useCallback((field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  }, [errors]);

  // CREATE — Registar novo estudante (POST)
  const submitForm = useCallback(async () => {
    const validationErrors = validateStudent(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return false;
    }

    setIsLoading(true);
    setErrors({});

    try {
      const studentData = {
        ...form,
        email: `${form.number.trim()}@ujac.ac.mz`,
      };
      await StudentService.registerStudent(studentData);
      setIsSuccess(true);
      setForm(INITIAL_FORM);
      return true;
    } catch (error) {
      setErrors({ general: 'Erro ao registar. Verifica a ligação à internet.' });
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [form]);

  // UPDATE — Atualizar estudante (PUT)
  const updateStudent = useCallback(async (id, data) => {
    setIsLoading(true);
    try {
      await StudentService.updateStudent(id, data);
      return true;
    } catch (error) {
      setErrors({ general: 'Erro ao atualizar. Tenta novamente.' });
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // DELETE — Remover estudante
  const deleteStudent = useCallback(async (id) => {
    setIsLoading(true);
    try {
      await StudentService.deleteStudent(id);
      return true;
    } catch (error) {
      setErrors({ general: 'Erro ao remover. Tenta novamente.' });
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const resetForm = useCallback(() => {
    setForm(INITIAL_FORM);
    setErrors({});
    setIsSuccess(false);
  }, []);

  return {
    form,
    errors,
    isLoading,
    isSuccess,
    updateField,
    submitForm,
    updateStudent,
    deleteStudent,
    resetForm,
  };
};