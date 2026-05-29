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
- Pipeline CI/CD com GitHub Actions
- Testes automatizados com Jest
- APK de Release gerado automaticamente

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
| CI/CD | GitHub Actions |
| Testes | Jest |

---

## Arquitetura MVVM

```
Code_Book/
├── .github/
│   └── workflows/
│       ├── ci.yml                    ← Pipeline CI (testes automáticos)
│       └── cd.yml                    ← Pipeline CD (geração de APK)
├── __tests__/
│   └── App.test.js                   ← Testes Jest
├── index.js                          ← Ponto de entrada
├── android/                          ← Configuração Android
└── src/
    ├── assets/
    │   └── reader.png
    ├── context/
    │   └── FavoritesContext.js       ← Estado global dos favoritos
    ├── models/
    │   ├── Course.js                 ← Cadeiras e guias
    │   └── Student.js                ← Estrutura e validação
    ├── services/
    │   ├── FirebaseService.js        ← Firebase Auth + Firestore REST API
    │   └── StudentService.js         ← CRUD JSONPlaceholder
    ├── viewmodels/
    │   ├── HomeViewModel.js
    │   ├── SearchViewModel.js
    │   ├── LoginViewModel.js
    │   ├── RegisterViewModel.js
    │   ├── FavoritesViewModel.js
    │   └── ProfileViewModel.js
    ├── screens/
    │   ├── WelcomeScreen.jsx
    │   ├── LoginScreen.jsx
    │   ├── RegisterScreen.jsx
    │   ├── HomeScreen.jsx
    │   ├── CourseDetailScreen.jsx
    │   ├── SearchScreen.jsx
    │   ├── FavoritesScreen.jsx
    │   ├── ProfileScreen.jsx
    │   └── StudentListScreen.jsx
    └── routes/
        └── AppNavigator.jsx
```

---

## CI/CD — GitHub Actions

### Pipeline CI (Integração Contínua)
- **Ficheiro:** `.github/workflows/ci.yml`
- **Acionado em:** push para `develop`
- **O que faz:** instala dependências e corre os testes Jest automaticamente
- **Duração:** ~26 segundos

### Pipeline CD (Entrega Contínua)
- **Ficheiro:** `.github/workflows/cd.yml`
- **Acionado em:** push para `main`
- **O que faz:** compila o projeto e gera o APK automaticamente
- **Duração:** ~4 minutos
- **APK disponível em:** GitHub → Actions → CD - Gerar APK → Artifacts

### Testes Automatizados
- **Ficheiro:** `__tests__/App.test.js`
- **Framework:** Jest
- **Total de testes:** 14 testes em 3 grupos
  - Student Model (5 testes)
  - Course Model (5 testes)
  - Search Logic (4 testes)

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

### Instalação
```bash
git clone https://github.com/shelziamatsinhe/Code_Book.git
cd Code_Book
npm install --legacy-peer-deps
```

### Executar em modo de desenvolvimento
```bash
# Terminal 1
npx react-native start --reset-cache

# Terminal 2
adb reverse tcp:8081 tcp:8081
npx react-native run-android
```

### Gerar APK de Release
```bash
# Gerar bundle
npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

# Compilar APK
cd android
.\gradlew assembleRelease

# APK gerado em:
# android/app/build/outputs/apk/release/app-release.apk
```

---

## Estrutura Git

```
main          ← producao (CD — gera APK automaticamente)
└── develop   ← integracao (CI — testes automaticos)
    ├── feature/setup-architecture   ✅ Fase 1
    ├── feature/ui-ux                ✅ Fase 2
    ├── feature/api-integration      ✅ Fase 3
    ├── feature/authentication       ✅ Fase 4
    └── feature/ci-cd                ✅ Fase 5
```

### Convenção de Commits
```
feat:     nova funcionalidade
fix:      correcao de erro
docs:     atualizacao de documentacao
style:    formatacao sem alteracao de logica
refactor: refatoracao de codigo
test:     adicao de testes
chore:    tarefas de manutencao
```

---

## Fases do Projeto

### ✅ Fase 1 — Arquitetura Base
- Projeto React Native com arquitetura MVVM
- WelcomeScreen e HomeScreen
- Navegação Stack + Tab Bar

### ✅ Fase 2 — UI/UX e Design Responsivo
- Design com paleta de cores UJAC (roxo/dourado)
- Tab Bar com ícones SVG personalizados
- Todos os ecrãs com scroll completo
- Acessibilidade completa

### ✅ Fase 3 — Integração com API REST
- CRUD completo via JSONPlaceholder
- Formulário de cadastro com validação
- Geração automática de email institucional
- Tratamento de erros em português

### ✅ Fase 4 — Autenticação Firebase
- Firebase Auth via REST API
- Registo e login com email institucional UJAC
- Perfil guardado no Firestore
- Sessão persistente com AsyncStorage
- Favoritos com contexto global

### ✅ Fase 5 — CI/CD
- Pipeline CI com testes Jest automáticos
- Pipeline CD com geração de APK automática
- APK de Release funcional

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