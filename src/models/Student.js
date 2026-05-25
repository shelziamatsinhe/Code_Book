// ============================================================
// Model: Student.js
// Camada: Model (MVVM)
// Descrição: Define a estrutura de dados de um estudante
//            e funções de validação do formulário
// Formato número UJAC: 2025080007 (10 dígitos)
// Formato email UJAC: 2025080007@ujac.ac.mz
// ============================================================

/**
 * Estrutura de um estudante
 * @typedef {Object} Student
 * @property {string} id - Identificador único
 * @property {string} name - Nome completo
 * @property {string} number - Número de estudante (ex: 2025080007)
 * @property {string} course - Curso
 * @property {string} year - Ano académico
 * @property {string} email - Email institucional gerado automaticamente
 */

// Cursos disponíveis na UJAC
export const UJAC_COURSES = [
  'Engenharia Informática',
  'Inteligência Artificial',
];

// Anos académicos disponíveis
export const ACADEMIC_YEARS = [
  '1º Ano',
  '2º Ano',
  '3º Ano',
  '4º Ano',
  '5º Ano',
];

// Gera o email institucional a partir do número
// Ex: 2025080007 → 2025080007@ujac.ac.mz
export const generateEmail = (number) => {
  if (!number || number.trim().length === 0) return '';
  return `${number.trim()}@ujac.ac.mz`;
};

// Validações do formulário
export const validateStudent = (form) => {
  const errors = {};

  // Valida nome
  if (!form.name.trim()) {
    errors.name = 'O nome é obrigatório';
  } else if (form.name.trim().length < 3) {
    errors.name = 'O nome deve ter pelo menos 3 caracteres';
  }

  // Valida número de estudante
  // Formato UJAC: 10 dígitos — ex: 2025080007
  if (!form.number.trim()) {
    errors.number = 'O número de estudante é obrigatório';
  } else if (!/^\d{10}$/.test(form.number.trim())) {
    errors.number = 'O número deve ter exactamente 10 dígitos (ex: 2025080007)';
  }

  // Valida curso
  if (!form.course) {
    errors.course = 'Selecciona o teu curso';
  }

  // Valida ano
  if (!form.year) {
    errors.year = 'Selecciona o teu ano';
  }

  return errors;
};