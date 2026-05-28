// src/models/Student.js

// Cursos disponiveis na UJAC
export const UJAC_COURSES = [
  'Engenharia Informatica',
  'Inteligencia Artificial',
];

// Anos academicos
export const ACADEMIC_YEARS = [
  '1° Ano',
  '2° Ano',
  '3° Ano',
  '4° Ano',
  '5° Ano',
];

// Gera email institucional a partir do numero
export const generateEmail = (numero) => {
  return `${numero}@ujac.ac.mz`;
};

// Valida dados do estudante
// Retorna { valid: true } ou { valid: false, error: 'mensagem' }
export const validateStudent = ({ numero, nome, password }) => {
  if (!numero || numero.length !== 10) {
    return { valid: false, error: 'O numero de estudante deve ter 10 digitos.' };
  }
  if (!nome || nome.trim().length < 3) {
    return { valid: false, error: 'O nome deve ter pelo menos 3 caracteres.' };
  }
  if (!password || password.length < 6) {
    return { valid: false, error: 'A password deve ter pelo menos 6 caracteres.' };
  }
  return { valid: true };
};

// Estrutura base de um estudante
export const createStudent = ({ numero, nome, curso, ano }) => ({
  numero,
  nome,
  email: generateEmail(numero),
  curso: curso || 'Engenharia Informatica',
  ano: ano || '',
  criadoEm: new Date().toLocaleString('pt-MZ', { timeZone: 'Africa/Maputo' }),
});