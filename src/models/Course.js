/**
 * Estrutura de uma cadeira
 * @typedef {Object} Course
 * @property {string} id - Identificador único
 * @property {string} name - Nome completo da cadeira
 * @property {string} code - Código da cadeira
 * @property {number} semester - Semestre
 * @property {number} year - Ano
 * @property {string} teacher - Nome do docente
 */

/**
 * Estrutura de um passo de um guia
 * @typedef {Object} Step
 * @property {string} instruction - O que o estudante deve fazer
 * @property {string} script - Código ou comando a executar
 */

/**
 * Estrutura de um guia prático
 * @typedef {Object} Guide
 * @property {string} id
 * @property {string} title - Título da aula prática
 * @property {string} teacher - Docente responsável pelo guia
 * @property {Step[]} steps - Passos do guia
 * @property {string[]} exercises - Exercícios práticos
 */

export const MOCK_COURSES = [
  {
    id: '1',
    name: 'Programação Web e Mobile',
    code: 'PWM',
    semester: 2,
    year: 2,
    teacher: 'Msc. Carsolino Sambo',
      },
  {
    id: '2',
    name: 'Estruturas de Dados e Algoritmos',
    code: 'EDA',
    semester: 2,
    year: 1,
    teacher: 'Msc. Cidalia',
  },
  {
    id: '3',
    name: 'Pratica Tecnico Profissional I: Desenvolvimento de Solucoes Web e Mobile',
    code: 'PTP-I',
    semester: 1,
    year: 2,
     teacher: 'Msc. Armando Correia Jr.',
  },
  {
    id: '4',
    name: 'Linguagem de Programação II: Java',
    code: 'LP-II',
    semester: 1,
    year: 2,
    teacher: 'Ruben Manhica',
  },
];