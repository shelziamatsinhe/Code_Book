# 📡 Documentação da API — Code Book UJAC

> API REST para gestão de estudantes integrada na aplicação mobile Code Book

---

## Visão Geral

A aplicação Code Book consome uma API REST para realizar operações CRUD sobre estudantes. Na fase atual do projeto, é utilizada a API pública **JSONPlaceholder** como servidor de demonstração. Na fase seguinte será substituída por uma API própria desenvolvida com Node.js, Express e SQLite.

| Item | Detalhe |
|------|---------|
| Base URL (atual) | `https://jsonplaceholder.typicode.com` |
| Recurso | `/users` |
| Formato | JSON |
| Autenticação | Não requerida (fase atual) |

---

## Formato do Estudante

### Campos

| Campo | Tipo | Obrigatório | Formato | Exemplo |
|-------|------|-------------|---------|---------|
| `name` | string | Sim | Nome completo | `Shelzia Matsinhe` |
| `number` | string | Sim | 10 dígitos numéricos | `2025080007` |
| `course` | string | Sim | Nome do curso | `Engenharia Informática` |
| `year` | string | Sim | Ano académico | `2º Ano` |
| `email` | string | Gerado | `{numero}@ujac.ac.mz` | `2025080007@ujac.ac.mz` |

### Regras de Validação

- `name` — obrigatório, mínimo 3 caracteres
- `number` — obrigatório, exatamente 10 dígitos numéricos (formato UJAC: `2025080007`)
- `course` — obrigatório, selecionado da lista disponível
- `year` — obrigatório, selecionado da lista disponível
- `email` — gerado automaticamente a partir do número: `{number}@ujac.ac.mz`

---

## Endpoints

### GET /users — Listar todos os estudantes

Devolve a lista completa de estudantes registados.

**Pedido:**
```http
GET https://jsonplaceholder.typicode.com/users
Content-Type: application/json
```

**Resposta (200 OK):**
```json
[
  {
    "id": 1,
    "name": "Shelzia Matsinhe",
    "number": "2025080007",
    "course": "Engenharia Informática",
    "year": "2º Ano",
    "email": "2025080007@ujac.ac.mz"
  },
  {
    "id": 2,
    "name": "Paulino Tomé",
    "number": "2025080002",
    "course": "Engenharia Informática",
    "year": "2º Ano",
    "email": "2025080002@ujac.ac.mz"
  }
]
```

---

### GET /users/:id — Buscar estudante por ID

Devolve os dados de um estudante específico.

**Pedido:**
```http
GET https://jsonplaceholder.typicode.com/users/1
Content-Type: application/json
```

**Resposta (200 OK):**
```json
{
  "id": 1,
  "name": "Shelzia Matsinhe",
  "number": "2025080007",
  "course": "Engenharia Informática",
  "year": "2º Ano",
  "email": "2025080007@ujac.ac.mz"
}
```

**Resposta (404 Not Found):**
```json
{}
```

---

### POST /users — Registar novo estudante

Cria um novo estudante na base de dados.

**Pedido:**
```http
POST https://jsonplaceholder.typicode.com/users
Content-Type: application/json
```

**Corpo:**
```json
{
  "name": "Emerson Gove",
  "number": "2025080003",
  "course": "Engenharia Informática",
  "year": "2º Ano",
  "email": "2025080003@ujac.ac.mz"
}
```

**Resposta (201 Created):**
```json
{
  "id": 11,
  "name": "Emerson Gove",
  "number": "2025080003",
  "course": "Engenharia Informática",
  "year": "2º Ano",
  "email": "2025080003@ujac.ac.mz"
}
```

---

### PUT /users/:id — Atualizar estudante

Substitui todos os dados de um estudante existente.

**Pedido:**
```http
PUT https://jsonplaceholder.typicode.com/users/1
Content-Type: application/json
```

**Corpo:**
```json
{
  "name": "Shelzia Jessiana Matsinhe",
  "number": "2025080007"
  "course": "Engenharia Informática",
  "year": "3º Ano",
  "email": "2025080007@ujac.ac.mz"
}
```

**Resposta (200 OK):**
```json
{
  "id": 1,
  "name": "Shelzia Jessiana Matsinhe",
  "number": "2025080007",
  "course": "Engenharia Informática",
  "year": "3º Ano",
  "email": "2025080007@ujac.ac.mz"
}
```

---

### DELETE /users/:id — Remover estudante

Remove um estudante da base de dados.

**Pedido:**
```http
DELETE https://jsonplaceholder.typicode.com/users/1
Content-Type: application/json
```

**Resposta (200 OK):**
```json
{}
```

---

## Códigos de Estado HTTP

| Código | Significado | Quando ocorre |
|--------|-------------|---------------|
| `200 OK` | Sucesso | GET, PUT, DELETE bem-sucedidos |
| `201 Created` | Criado | POST bem-sucedido |
| `400 Bad Request` | Pedido inválido | Dados em falta ou formato incorreto |
| `401 Unauthorized` | Não autenticado | Token inválido ou em falta (Fase 4) |
| `404 Not Found` | Não encontrado | ID inexistente |
| `500 Internal Server Error` | Erro do servidor | Falha interna da API |

---

## Como está integrada no Code Book

### Ficheiros envolvidos

```
src/
├── models/
│   └── Student.js              ← estrutura, validação e geração de email
├── services/
│   └── StudentService.js       ← GET, POST, PUT, DELETE
├── viewmodels/
│   └── RegisterViewModel.js    ← lógica, estado e chamada ao serviço
└── screens/
    ├── RegisterScreen.jsx      ← formulário de cadastro (POST)
    └── StudentListScreen.jsx   ← lista de estudantes (GET)
```

### Fluxo de uma operação POST

```
RegisterScreen.jsx
    ↓ utilizador preenche o formulário e toca em "Registar"
RegisterViewModel.js
    ↓ valida os campos e chama o serviço
StudentService.js
    ↓ serializa os dados em JSON e envia POST /users
JSONPlaceholder API
    ↓ devolve 201 Created com os dados do estudante
RegisterViewModel.js
    ↓ atualiza o estado de sucesso
RegisterScreen.jsx
    ↓ apresenta o ecrã de confirmação ao utilizador
```

### Exemplo de código — POST no StudentService

```javascript
registerStudent: async (studentData) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
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
    throw new Error(`Erro HTTP ${response.status}`);
  }

  return await response.json();
}
```

