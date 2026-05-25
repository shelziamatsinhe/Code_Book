// ============================================================
// Service: StudentService.js
// Camada: Model/Service (MVVM)
// Descrição: CRUD completo de estudantes
//            Consome a API pública JSONPlaceholder
// API Base: https://jsonplaceholder.typicode.com/users
// Métodos: GET, POST, PUT, DELETE
// ============================================================

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const StudentService = {

  // --------------------------------------------------------
  // READ — Listar todos os estudantes
  // Método HTTP: GET
  // Endpoint: /users
  // Resposta esperada: 200 OK — lista de estudantes em JSON
  // --------------------------------------------------------
  getStudents: async () => {
    try {
      const response = await fetch(`${BASE_URL}/users`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Erro HTTP ${response.status}: Não foi possível listar os estudantes`);
      }

      const data = await response.json();

      // Adapta os dados da API ao formato de estudante da UJAC
      return data.map((user) => ({
        id: String(user.id),
        name: user.name,
        number: `20250800${String(user.id).padStart(2, '0')}`,
        course: 'Engenharia Informática',
        year: '2º Ano',
        email: `20250800${String(user.id).padStart(2, '0')}@ujac.ac.mz`,
      }));
    } catch (error) {
      console.error('Erro GET /users:', error);
      throw error;
    }
  },

  // --------------------------------------------------------
  // READ — Buscar estudante por ID
  // Método HTTP: GET
  // Endpoint: /users/:id
  // Resposta esperada: 200 OK — dados do estudante em JSON
  // --------------------------------------------------------
  getStudentById: async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/users/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Erro HTTP ${response.status}: Estudante não encontrado`);
      }

      const data = await response.json();
      return {
        id: String(data.id),
        name: data.name,
        number: `20250800${String(data.id).padStart(2, '0')}`,
        course: 'Engenharia Informática',
        year: '2º Ano',
        email: `20250800${String(data.id).padStart(2, '0')}@ujac.ac.mz`,
      };
    } catch (error) {
      console.error(`Erro GET /users/${id}:`, error);
      throw error;
    }
  },

  // --------------------------------------------------------
  // CREATE — Registar novo estudante
  // Método HTTP: POST
  // Endpoint: /users
  // Corpo: dados do estudante em JSON
  // Resposta esperada: 201 Created — estudante criado com ID
  // --------------------------------------------------------
  registerStudent: async (studentData) => {
    try {
      const response = await fetch(`${BASE_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Serialização dos dados para JSON antes do envio
        body: JSON.stringify({
          name: studentData.name,
          number: studentData.number,
          course: studentData.course,
          year: studentData.year,
          email: `${studentData.number}@ujac.ac.mz`,
        }),
      });

      if (!response.ok) {
        throw new Error(`Erro HTTP ${response.status}: Não foi possível registar o estudante`);
      }

      // Desserialização da resposta JSON
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro POST /users:', error);
      throw error;
    }
  },

  // --------------------------------------------------------
  // UPDATE — Atualizar dados de um estudante
  // Método HTTP: PUT
  // Endpoint: /users/:id
  // Corpo: dados atualizados em JSON
  // Resposta esperada: 200 OK — dados atualizados
  // --------------------------------------------------------
  updateStudent: async (id, studentData) => {
    try {
      const response = await fetch(`${BASE_URL}/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: studentData.name,
          number: studentData.number,
          course: studentData.course,
          year: studentData.year,
          email: `${studentData.number}@ujac.ac.mz`,
        }),
      });

      if (!response.ok) {
        throw new Error(`Erro HTTP ${response.status}: Não foi possível atualizar o estudante`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Erro PUT /users/${id}:`, error);
      throw error;
    }
  },

  // --------------------------------------------------------
  // DELETE — Remover estudante
  // Método HTTP: DELETE
  // Endpoint: /users/:id
  // Resposta esperada: 200 OK — confirmação de remoção
  // --------------------------------------------------------
  deleteStudent: async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/users/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Erro HTTP ${response.status}: Não foi possível remover o estudante`);
      }

      return { success: true, message: 'Estudante removido com sucesso' };
    } catch (error) {
      console.error(`Erro DELETE /users/${id}:`, error);
      throw error;
    }
  },
};

export default StudentService;