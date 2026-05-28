# 📖 CodeBook

> Aplicação mobile de guias académicos para estudantes da UJAC

**Universidade de Ciências e Tecnologias Joaquim Alberto Chissano**  
Curso: Engenharia Informática  
Cadeira: Prática Técnico Profissional I — Desenvolvimento de Soluções Web e Mobile  
Docente: Msc. Armando Correia Jr.

---

## Descrição

O CodeBook é uma aplicação mobile desenvolvida em **React Native (JavaScript)** que serve como guia de cadeiras para estudantes do curso de Engenharia Informática da UJAC. A aplicação orienta os estudantes na realização de tarefas específicas de cada cadeira, apresenta guias práticos com scripts executáveis e exercícios, e permite gerir um perfil de estudante com autenticação real, sistema de favoritos e pesquisa.

---

## Funcionalidades Implementadas

- Autenticação real com Firebase Auth (email institucional UJAC)
- Registo de estudantes com dados guardados no Firestore
- Sessão persistente com AsyncStorage
- Listagem de cadeiras com informação do docente
- Guias práticos passo a passo com scripts e exercícios
- Sistema de favoritos com atualização em tempo real
- Pesquisa de cadeiras por nome, código ou docente
- Formulário de cadastro com validação completa
- Lista de estudantes consumida de API REST (JSONPlaceholder)
- Perfil do estudante com dados da sessão real
- Design responsivo com scroll em todos os ecrãs
- Acessibilidade completa com suporte a leitor de ecrã
- Mensagens de erro em português

---

## Tecnologia

| Item | Detalhe |
|------|---------|
| Framework | React Native 0.72.7 |
| Linguagem | JavaScript |
| Arquitetura | MVVM |
| Navegação | React Navigation 6 |
| Autenticação | Firebase Auth REST API |
| Base de dados | Cloud Firestore REST API |
| Armazenamento local | AsyncStorage |
| Estado global | React Context API |
| API mock | JSONPlaceholder |

---

## Arquitetura MVVM

```
Code_Book/
├── index.js                          ← Ponto de entrada
├── android/                          ← Configuração Android
└── src/
    ├── assets/
    │   └── reader.png                ← Imagem WelcomeScreen
    ├── context/
    │   └── FavoritesContext.js       ← Estado global dos favoritos
    ├── models/
    │   ├── Course.js                 ← Cadeiras e guias (MOCK_COURSES + MOCK_GUIDES)
    │   └── Student.js                ← Estrutura, validação e funções de estudante
    ├── services/
    │   ├── FirebaseService.js        ← Firebase Auth + Firestore via REST API
    │   └── StudentService.js        ← CRUD JSONPlaceholder
    ├── viewmodels/
    │   ├── HomeViewModel.js
    │   ├── SearchViewModel.js
    │   ├── LoginViewModel.js         ← Login + sessão global
    │   ├── RegisterViewModel.js      ← Registo com Firebase
    │   ├── FavoritesViewModel.js
    │   └── ProfileViewModel.js
    ├── screens/
    │   ├── WelcomeScreen.jsx
    │   ├── LoginScreen.jsx           ← Login com número + password
    │   ├── Login.styles.js
    │   ├── HomeScreen.jsx
    │   ├── HomeScreen.styles.js
    │   ├── CourseDetailScreen.jsx    ← Guias com scripts e favoritos
    │   ├── CourseDetail.styles.js
    │   ├── SearchScreen.jsx          ← Pesquisa por texto
    │   ├── Search.styles.js
    │   ├── FavoritesScreen.jsx
    │   ├── Favorites.styles.js
    │   ├── ProfileScreen.jsx         ← Perfil com dados reais da sessão
    │   ├── Profile.styles.js
    │   ├── RegisterScreen.jsx
    │   ├── Register.styles.js
    │   ├── StudentListScreen.jsx
    │   └── StudentList.styles.js
    └── routes/
        └── AppNavigator.jsx          ← Stack + Tab Bar + FavoritesProvider
```

---

## Ecrãs da Aplicação

| Ecrã | Descrição |
|------|-----------|
| WelcomeScreen | Ecrã de boas-vindas com navegação para login |
| LoginScreen | Login com número de estudante e password |
| RegisterScreen | Registo com criação de conta Firebase |
| HomeScreen | Lista de cadeiras com cards informativos |
| CourseDetailScreen | Guias práticos com scripts, exercícios e favoritos |
| SearchScreen | Pesquisa por nome, código ou docente |
| FavoritesScreen | Guias guardados com atualização automática |
| ProfileScreen | Perfil real do estudante com dados da sessão |
| StudentListScreen | Lista de estudantes da API JSONPlaceholder |

---

## Firebase — Configuração

A aplicação usa o Firebase via **REST API** (sem biblioteca nativa), compatível com React Native 0.72.

| Serviço | Uso |
|---------|-----|
| Firebase Auth | Registo e login com email institucional |
| Cloud Firestore | Armazenamento de perfis de estudantes |

**Formato do email institucional:** `{numero}@ujac.ac.mz`  
Exemplo: `2025080007@ujac.ac.mz`

---

## Cadeiras Disponíveis

| Código | Cadeira | Docente |
|--------|---------|---------|
| PWM | Programação Web e Mobile | Msc. Carsolino Sambo |
| PTP-I | Prática Técnico Profissional I | Msc. Armando Correia Jr. |
| EDA | Estruturas de Dados e Algoritmos | Msc. Cidalia |
| LP-II | Linguagem de Programação II: Java | Ruben Manhica |

---

## Como Executar

### Pré-requisitos

- Node.js 18+
- React Native CLI
- Android Studio com SDK configurado
- Dispositivo Android ou emulador
- Conta Firebase com projeto criado

### Instalação

```bash
# Clonar o repositório
git clone https://github.com/shelziamatsinhe/Code_Book.git
cd Code_Book

# Instalar dependências
npm install --legacy-peer-deps
```

### Executar

```bash
# Terminal 1 — iniciar o Metro
npx react-native start --reset-cache

# Terminal 2 — instalar no dispositivo
adb reverse tcp:8081 tcp:8081
npx react-native run-android
```

### Problemas Conhecidos

| Problema | Solução |
|----------|---------|
| Porta 8081 ocupada | `netstat -ano \| findstr :8081` depois `taskkill /PID X /F` |
| `local.properties` em falta | Adicionar `sdk.dir=C:\Users\...\AppData\Local\Android\Sdk` |
| INSTALL_FAILED_USER_RESTRICTED | Ativar "Instalar via USB" nas opções do programador |
| Network request failed | A app precisa de internet para autenticação Firebase |

---

## Dependências Principais

| Pacote | Versão | Uso |
|--------|--------|-----|
| `react-native` | 0.72.7 | Framework mobile |
| `@react-navigation/native` | 6.1.9 | Navegação |
| `@react-navigation/native-stack` | 6.9.17 | Stack de navegação |
| `@react-navigation/bottom-tabs` | 6.6.1 | Tab Bar |
| `react-native-screens` | 3.29.0 | Otimização de ecrãs |
| `react-native-safe-area-context` | 4.8.2 | Áreas seguras |
| `@react-native-async-storage/async-storage` | 1.21.0 | Sessão e favoritos |

---

## Estrutura Git

```
main
└── develop
    ├── feature/setup-architecture   ✅ Fase 1 — Arquitetura base
    ├── feature/ui-ux                ✅ Fase 2 — Interface e design
    ├── feature/api-integration      ✅ Fase 3 — API JSONPlaceholder
    └── feature/authentication       ✅ Fase 4 — Firebase Auth + Firestore
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

## Fases do Projeto

### ✅ Fase 1 — Arquitetura Base
- Projeto React Native criado com arquitetura MVVM
- WelcomeScreen e HomeScreen implementados
- Navegação Stack + Tab Bar configurada

### ✅ Fase 2 — UI/UX e Design Responsivo
- Design com paleta de cores UJAC (roxo/dourado)
- Tab Bar com ícones SVG personalizados
- Todos os ecrãs com scroll completo
- Acessibilidade com accessibilityLabel e accessibilityRole
- Headers compactos dentro do scroll

### ✅ Fase 3 — Integração com API REST
- CRUD completo via JSONPlaceholder
- Formulário de cadastro com validação em tempo real
- Geração automática de email institucional
- Lista de estudantes consumida da API
- Tratamento de erros e estados de carregamento

### ✅ Fase 4 — Autenticação Firebase
- Firebase Auth via REST API (sem biblioteca nativa)
- Registo com conta Firebase + perfil guardado no Firestore
- Login com número de estudante e password
- Sessão persistente com AsyncStorage
- Contexto global de favoritos com atualização automática
- Todas as mensagens de erro em português

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

Consulta o ficheiro [README_API.md](./README_API.md) para a documentação completa da API REST e Firebase.