// ============================================================
// Testes: App.test.js
// Ficheiro: __tests__/App.test.js
// Descricao: Testes Jest para o CodeBook
//            Testa os ViewModels e Models sem precisar
//            de um dispositivo fisico
// ============================================================

// --- O que e um teste? ---
// Um teste verifica automaticamente se o codigo funciona.
// Em vez de tu testares manualmente, o Jest faz isso por ti.
// Formato: describe() agrupa testes, it() e cada teste individual.

// Importa funcoes do modelo de estudante
import { validateStudent, generateEmail } from '../src/models/Student';

// Importa os dados de cadeiras
import { MOCK_COURSES, MOCK_GUIDES } from '../src/models/Course';

// ============================================================
// GRUPO 1: Testes do Modelo de Estudante
// ============================================================
describe('Student Model', () => {

  // Teste 1: Verificar que o email e gerado corretamente
  it('deve gerar email institucional correto', () => {
    // Arrange (prepara os dados)
    const numero = '2025080007';

    // Act (executa a funcao)
    const email = generateEmail(numero);

    // Assert (verifica o resultado)
    expect(email).toBe('2025080007@ujac.ac.mz');
  });

  // Teste 2: Numero valido (10 digitos)
  it('deve aceitar numero de estudante valido', () => {
    const resultado = validateStudent({
      numero: '2025080007',
      nome: 'Shelzia Matsinhe',
      password: '123456',
    });
    expect(resultado.valid).toBe(true);
  });

  // Teste 3: Numero invalido (menos de 10 digitos)
  it('deve rejeitar numero com menos de 10 digitos', () => {
    const resultado = validateStudent({
      numero: '12345',
      nome: 'Shelzia Matsinhe',
      password: '123456',
    });
    expect(resultado.valid).toBe(false);
    expect(resultado.error).toContain('10');
  });

  // Teste 4: Nome obrigatorio
  it('deve rejeitar nome vazio', () => {
    const resultado = validateStudent({
      numero: '2025080007',
      nome: '',
      password: '123456',
    });
    expect(resultado.valid).toBe(false);
  });

  // Teste 5: Password fraca
  it('deve rejeitar password com menos de 6 caracteres', () => {
    const resultado = validateStudent({
      numero: '2025080007',
      nome: 'Shelzia Matsinhe',
      password: '123',
    });
    expect(resultado.valid).toBe(false);
  });
});

// ============================================================
// GRUPO 2: Testes dos Dados de Cadeiras
// ============================================================
describe('Course Model', () => {

  // Teste 6: Existem 4 cadeiras
  it('deve ter 4 cadeiras disponíveis', () => {
    expect(MOCK_COURSES.length).toBe(4);
  });

  // Teste 7: Cada cadeira tem os campos obrigatorios
  it('cada cadeira deve ter id, name, code, teacher', () => {
    MOCK_COURSES.forEach(course => {
      expect(course.id).toBeDefined();
      expect(course.name).toBeDefined();
      expect(course.code).toBeDefined();
      expect(course.teacher).toBeDefined();
    });
  });

  // Teste 8: Codigos das cadeiras estao corretos
  it('deve ter as cadeiras PWM, EDA, PTP-I e LP-II', () => {
    const codes = MOCK_COURSES.map(c => c.code);
    expect(codes).toContain('PWM');
    expect(codes).toContain('EDA');
    expect(codes).toContain('PTP-I');
    expect(codes).toContain('LP-II');
  });

  // Teste 9: Existem guias para cada cadeira
  it('deve ter guias para todas as cadeiras', () => {
    const codes = ['PWM', 'EDA', 'PTP-I', 'LP-II'];
    codes.forEach(code => {
      expect(MOCK_GUIDES[code]).toBeDefined();
      expect(MOCK_GUIDES[code].length).toBeGreaterThan(0);
    });
  });

  // Teste 10: Cada guia tem passos
  it('cada guia deve ter pelo menos 1 passo', () => {
    Object.values(MOCK_GUIDES).forEach(guides => {
      guides.forEach(guide => {
        expect(guide.steps.length).toBeGreaterThan(0);
      });
    });
  });
});

// ============================================================
// GRUPO 3: Testes de Logica de Pesquisa
// ============================================================
describe('Search Logic', () => {

  const search = (query) => {
    const q = query.toLowerCase();
    return MOCK_COURSES.filter(course =>
      course.name.toLowerCase().includes(q) ||
      course.code.toLowerCase().includes(q) ||
      course.teacher.toLowerCase().includes(q)
    );
  };

  // Teste 11: Pesquisa por codigo
  it('deve encontrar cadeira pelo codigo PWM', () => {
    const results = search('PWM');
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].code).toBe('PWM');
  });

  // Teste 12: Pesquisa por docente
  it('deve encontrar cadeiras pelo nome do docente', () => {
    const results = search('Armando');
    expect(results.length).toBeGreaterThan(0);
  });

  // Teste 13: Pesquisa sem resultados
  it('deve retornar lista vazia para pesquisa sem resultados', () => {
    const results = search('xyzabc123');
    expect(results.length).toBe(0);
  });

  // Teste 14: Pesquisa insensivel a maiusculas
  it('deve pesquisar independente de maiusculas', () => {
    const results1 = search('pwm');
    const results2 = search('PWM');
    expect(results1.length).toBe(results2.length);
  });
});