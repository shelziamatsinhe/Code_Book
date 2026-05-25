# 📖 Code Book

> Aplicação mobile de guias académicos para estudantes da UJAC

**Universidade de Ciências e Tecnologias Joaquim Alberto Chissano**
Curso: Engenharia Informática
Cadeira: Prática Técnico Profissional I — Desenvolvimento de Soluções Web e Mobile

---

## Descrição

O Code Book é uma aplicação mobile multiplataforma desenvolvida em **React Native (JavaScript)** que serve como guia de cadeiras para estudantes do curso de Engenharia Informática da UJAC. A aplicação orienta os estudantes na realização de tarefas específicas de cada cadeira, apresenta guias práticos com scripts executáveis e exercícios, e permite gerir um perfil de estudante com sistema de favoritos e pesquisa.

---

## Funcionalidades

- Listagem de cadeiras do curso com informação do docente
- Guias práticos passo a passo com scripts e exercícios
- Sistema de favoritos para guardar guias
- Pesquisa de cadeiras por nome, código ou docente
- Formulário de cadastro de estudantes com validação
- Lista de estudantes consumida de uma API REST
- Perfil do estudante com estatísticas de uso
- Design responsivo adaptado a qualquer tamanho de ecrã
- Acessibilidade completa com suporte a leitor de ecrã

---

## Tecnologia

| Item | Detalhe |
|------|---------|
| Framework | React Native 0.72.7 |
| Linguagem | JavaScript |
| Arquitetura | MVVM |
| Navegação | React Navigation 6 |
| Armazenamento local | AsyncStorage |
| API | JSONPlaceholder (fase atual) |

---

## Arquitetura MVVM

```
src/
├── assets/                     ← Recursos estáticos (imagens)
├── models/                     ← Camada Model (dados e validação)
│   ├── Course.js               ← Estrutura de cadeiras e guias
│   └── Student.js              ← Estrutura e validação de estudantes
├── services/                   ← Serviços de acesso à API
│   └── StudentService.js       ← CRUD completo de estudantes
├── viewmodels/                 ← Camada ViewModel (lógica)
│   ├── HomeViewModel.js
│   ├── SearchViewModel.js
│   ├── FavoritesViewModel.js
│   ├── RegisterViewModel.js
│   └── ProfileViewModel.js
├── screens/                    ← Camada View (interface)
│   ├── WelcomeScreen.jsx
│   ├── HomeScreen.jsx
│   ├── HomeScreen.styles.js
│   ├── CourseDetailScreen.jsx
│   ├── CourseDetail.styles.js
│   ├── SearchScreen.jsx
│   ├── Search.styles.js
│   ├── FavoritesScreen.jsx
│   ├── Favorites.styles.js
│   ├── ProfileScreen.jsx
│   ├── Profile.styles.js
│   ├── RegisterScreen.jsx
│   ├── Register.styles.js
│   ├── StudentListScreen.jsx
│   └── StudentList.styles.js
├── routes/                     ← Navegação
│   └── AppNavigator.jsx
└── index.js                    ← Ponto de entrada da pasta src
```

---

## Ecrãs da Aplicação

| Ecrã | Descrição |
|------|-----------|
| WelcomeScreen | Ecrã de boas-vindas com navegação para o início |
| HomeScreen | Lista de cadeiras com cards informativos |
| CourseDetailScreen | Guias práticos com scripts e exercícios |
| SearchScreen | Pesquisa por nome, código ou docente |
| FavoritesScreen | Guias guardados como favoritos |
| ProfileScreen | Perfil do estudante com estatísticas |
| RegisterScreen | Formulário de cadastro de estudante |
| StudentListScreen | Lista de estudantes consumida da API |

---

## Como Executar

### Pré-requisitos

- Node.js 18+
- React Native CLI
- Android Studio com SDK configurado
- Dispositivo Android ou emulador

### Instalação

```bash
# Clonar o repositório
git clone git clone https://github.com/shelziamatsinhe/Code_Book.git
cd code-book

# Instalar dependências
npm install --legacy-peer-deps
```

### Executar

```bash
# Terminal 1 — iniciar o Metro
npx react-native start

# Terminal 2 — instalar no dispositivo
adb reverse tcp:8081 tcp:8081
npx react-native run-android
```

---

## Dependências Principais

| Pacote | Versão | Uso |
|--------|--------|-----|
| `react-native` | 0.72.7 | Framework mobile |
| `@react-navigation/native` | 6.1.9 | Navegação |
| `@react-navigation/native-stack` | 6.9.17 | Stack de navegação |
| `@react-navigation/bottom-tabs` | 6.x | Tab Bar |
| `react-native-screens` | 3.29.0 | Otimização de ecrãs |
| `react-native-safe-area-context` | 4.8.2 | Áreas seguras |
| `@react-native-async-storage/async-storage` | latest | Favoritos persistentes |

---

## Estrutura Git

```
main
└── develop
    ├── feature/setup-architecture   ✅ Fase 1
    ├── feature/ui-ux                ✅ Fase 2
    ├── feature/api-integration      ✅ Fase 3
    ├── feature/authentication       🔜 Fase 4
    └── feature/ci-cd                🔜 Fase 5
```

### Convenção de Commits

```
feat:     nova funcionalidade
fix:      correção de erro
docs:     atualização de documentação
style:    formatação sem alteração de lógica
refactor: refatoração de código
test:     adição de testes
chore:    tarefas de manutenção
```

---

## Roadmap

### ✅ Fase 1 — Arquitetura Base
- Projeto React Native criado
- Arquitetura MVVM implementada
- WelcomeScreen e HomeScreen
- Navegação configurada

### ✅ Fase 2 — UI/UX e Design Responsivo
- Design com paleta de cores UJAC
- Tab Bar com quatro separadores
- SearchScreen, FavoritesScreen, ProfileScreen
- Acessibilidade completa
- Design responsivo com useWindowDimensions

### ✅ Fase 3 — Integração com APIs
- CRUD completo via API JSONPlaceholder
- Formulário de cadastro com validação
- Geração automática de email institucional
- Lista de estudantes consumida da API
- Tratamento de erros e estados de carregamento

### 🔜 Fase 4 — Firebase
- Autenticação com email institucional UJAC
- Base de dados Firestore
- Analytics de utilização

### 🔜 Fase 5 — Funcionalidades Avançadas
- Reconhecimento de voz
- Notificações push
- Modo offline com cache local

---

## Equipa

| Nome | Contribuição |
|------|-------------|
| Shelzia Jessiana Lima Matsinhe | Desenvolvimento |
| Paulino Tomé | Desenvolvimento |
| Emerson Gove | Desenvolvimento |
| Raul Poeira Júnior | Desenvolvimento |
| Adylan Cumbane | Desenvolvimento |

**Docente:** Msc. Armando Correia Jr.

---

## Documentação da API

Consulta o ficheiro [README_API.md](./README_API.md) para a documentação completa da API REST.
