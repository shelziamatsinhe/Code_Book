# 📖 CodeBook

## 🎯 Descrição do Projeto

O CodeBook é uma aplicação mobile multiplataforma desenvolvida em **React Native (JavaScript)** que serve como guia de cadeiras para estudantes do curso de Engenharia Informática da UJAC. A aplicação orienta os estudantes na realização de tarefas específicas de cada cadeira, como por exemplo submeter trabalhos no GitHub, inicializar servidor node.js.

---

## 🏗️ Arquitetura — MVVM

O projeto segue o padrão **MVVM (Model — View — ViewModel)**, que promove a separação de responsabilidades e facilita a manutenção do código.

```
CodeBook/
├── index.js                        ← Ponto de entrada da app
├── src/
│   ├── index.js                    ← Registo do componente principal
│   ├── assets/
│   │   └── reader.png              ← Imagem da WelcomeScreen
│   ├── models/                     ← Camada Model (Dados)
│   │   └── Course.js
│   ├── viewmodels/                 ← Camada ViewModel (Lógica)
│   │   └── HomeViewModel.js
│   ├── screens/                    ← Camada View (Interface)
│   │   ├── WelcomeScreen.jsx
│   │   ├── HomeScreen.jsx
│   │   └── HomeScreen.styles.js
│   ├── routes/                     ← Navegação
│   │   └── AppNavigator.jsx
│   ├── components/                 ← (Fase 2)
│   ├── services/                   ← (Fase 3)
│   └── utils/                      ← (Futuro)
├── .gitignore
├── app.json
├── babel.config.js
├── package.json
└── README.md
```

### Responsabilidades por camada

| Camada | Ficheiro | Responsabilidade |
|--------|----------|------------------|
| **Model** | `Course.js` | Define a estrutura e dados mock das cadeiras |
| **ViewModel** | `HomeViewModel.js` | Fornece os dados tratados à View |
| **View** | `WelcomeScreen.jsx`, `HomeScreen.jsx` | Interface apresentada ao utilizador |

---

## 📱 Ecrãs Implementados

### WelcomeScreen
Primeiro ecrã da aplicação. Apresenta o nome da app, uma imagem ilustrativa e um botão para avançar.

### HomeScreen
Lista todas as cadeiras disponíveis em cards organizados.

---

## 🎨 Design e UX/UI

### Design Responsivo
A interface adapta-se a diferentes tamanhos de ecrã usando `Dimensions`:

### Paleta de Cores UJAC
```javascript
backgroundColor: '#4a1d6e', // Roxo escuro UJAC — header
backgroundColor: '#6b35b0', // Roxo médio — corpo
backgroundColor: '#8b45c5', // Roxo claro — badges
color: '#f5a623',           // Dourado — destaques
color: '#ffffff',           // Branco — textos principais
```
---

## 📦 Dependências

| Pacote | Versão | Uso |
|--------|--------|-----|
| `react-native` | 0.72.7 | Framework mobile |
| `@react-navigation/native` | 6.1.9 | Navegação |
| `@react-navigation/native-stack` | 6.9.17 | Stack de navegação |
| `react-native-screens` | 3.29.0 | Otimização de ecrãs |
| `react-native-safe-area-context` | 4.8.2 | Áreas seguras |

---

## 🌿 Estrutura Git

```
main
└── develop
    └── feature/setup-architecture  ✅ Fase 1 
    └── feature/ui-ux ✅ Fase 2
```

## 🚀 Como Executar

```
# Instalar dependências
npm install --legacy-peer-deps

# Terminal 1 — iniciar Metro
npx react-native start

# Terminal 2 — instalar no dispositivo
adb reverse tcp:8081 tcp:8081
npx react-native run-android
```

---

## ✅ Fase 1 — Concluída

- [x] Projeto React Native criado
- [x] Linguagem: JavaScript
- [x] Arquitetura MVVM implementada
- [x] Model `Course.js` com dados mock
- [x] `HomeViewModel.js` com lógica de dados
- [x] `WelcomeScreen.jsx` com imagem e navegação
- [x] `HomeScreen.jsx` conectada ao ViewModel
- [x] Estilos separados em `HomeScreen.styles.js`
- [x] Navegação configurada com React Navigation
- [x] Design responsivo com `Dimensions`
- [x] Paleta de cores UJAC aplicada
- [x] `.gitignore` configurado
- [x] README inicial