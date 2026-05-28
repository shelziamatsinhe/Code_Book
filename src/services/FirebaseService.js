// src/services/FirebaseService.js
// Firebase via REST API — compativel com React Native 0.72 sem biblioteca nativa

const FIREBASE_API_KEY = 'AIzaSyAnuTU-J3p2xwaec52qA3vlBSLfeU9DewQ';
const PROJECT_ID = 'codebook-4fc33';

const AUTH_URL = `https://identitytoolkit.googleapis.com/v1/accounts`;
const FIRESTORE_URL = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents`;

// ─────────────────────────────────────────
// AUTH — Registo
// ─────────────────────────────────────────
export const registerUser = async (email, password) => {
  try {
    const response = await fetch(
      `${AUTH_URL}:signUp?key=${FIREBASE_API_KEY}`,
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password, returnSecureToken: true}),
      },
    );
    const data = await response.json();
    if (data.error) {
      throw new Error(translateAuthError(data.error.message));
    }
    return {success: true, user: data};
  } catch (error) {
    return {success: false, error: error.message};
  }
};

// ─────────────────────────────────────────
// AUTH — Login
// ─────────────────────────────────────────
export const loginUser = async (email, password) => {
  try {
    const response = await fetch(
      `${AUTH_URL}:signInWithPassword?key=${FIREBASE_API_KEY}`,
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password, returnSecureToken: true}),
      },
    );
    const data = await response.json();
    if (data.error) {
      throw new Error(translateAuthError(data.error.message));
    }
    return {success: true, user: data};
  } catch (error) {
    return {success: false, error: error.message};
  }
};

// ─────────────────────────────────────────
// FIRESTORE — Guardar estudante
// ─────────────────────────────────────────
export const saveStudent = async (studentData, idToken) => {
  try {
    const firestoreDoc = toFirestoreDoc(studentData);
    const response = await fetch(
      `${FIRESTORE_URL}/students?documentId=${studentData.numero}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify(firestoreDoc),
      },
    );
    const data = await response.json();
    if (data.error) {
      throw new Error(data.error.message);
    }
    return {success: true, data};
  } catch (error) {
    return {success: false, error: error.message};
  }
};

// ─────────────────────────────────────────
// FIRESTORE — Buscar todos os estudantes
// ─────────────────────────────────────────
export const getStudents = async (idToken) => {
  try {
    const response = await fetch(`${FIRESTORE_URL}/students`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${idToken}`,
      },
    });
    const data = await response.json();
    if (data.error) {
      throw new Error(data.error.message);
    }
    const students = (data.documents || []).map(doc =>
      fromFirestoreDoc(doc),
    );
    return {success: true, students};
  } catch (error) {
    return {success: false, error: error.message};
  }
};

// ─────────────────────────────────────────
// FIRESTORE — Buscar estudante por numero
// ─────────────────────────────────────────
export const getStudentByNumero = async (numero, idToken) => {
  try {
    const response = await fetch(
      `${FIRESTORE_URL}/students/${numero}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${idToken}`,
        },
      },
    );
    const data = await response.json();
    if (data.error) {
      throw new Error(data.error.message);
    }
    return {success: true, student: fromFirestoreDoc(data)};
  } catch (error) {
    return {success: false, error: error.message};
  }
};

// ─────────────────────────────────────────
// FIRESTORE — Atualizar estudante
// ─────────────────────────────────────────
export const updateStudent = async (numero, studentData, idToken) => {
  try {
    const firestoreDoc = toFirestoreDoc(studentData);
    const fields = Object.keys(studentData)
      .map(k => `updateMask.fieldPaths=${k}`)
      .join('&');
    const response = await fetch(
      `${FIRESTORE_URL}/students/${numero}?${fields}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify(firestoreDoc),
      },
    );
    const data = await response.json();
    if (data.error) {
      throw new Error(data.error.message);
    }
    return {success: true, data};
  } catch (error) {
    return {success: false, error: error.message};
  }
};

// ─────────────────────────────────────────
// FIRESTORE — Eliminar estudante
// ─────────────────────────────────────────
export const deleteStudent = async (numero, idToken) => {
  try {
    const response = await fetch(
      `${FIRESTORE_URL}/students/${numero}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      },
    );
    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.error?.message || 'Erro ao eliminar');
    }
    return {success: true};
  } catch (error) {
    return {success: false, error: error.message};
  }
};

// ─────────────────────────────────────────
// HELPERS — Conversao Firestore <-> JS
// ─────────────────────────────────────────

// Converte objeto JS para formato Firestore
const toFirestoreDoc = obj => ({
  fields: Object.entries(obj).reduce((acc, [key, value]) => {
    acc[key] = {stringValue: String(value)};
    return acc;
  }, {}),
});

// Converte documento Firestore para objeto JS
const fromFirestoreDoc = doc => {
  if (!doc.fields) return {};
  return Object.entries(doc.fields).reduce((acc, [key, val]) => {
    acc[key] = val.stringValue || val.integerValue || val.booleanValue || '';
    return acc;
  }, {});
};

// Traduz erros do Firebase para portugues
const translateAuthError = errorCode => {
  const errors = {
    EMAIL_EXISTS: 'Este email ja esta registado.',
    EMAIL_NOT_FOUND: 'Email nao encontrado. Verifica o numero de estudante.',
    INVALID_PASSWORD: 'Password incorreta.',
    INVALID_EMAIL: 'Email invalido.',
    WEAK_PASSWORD: 'A password deve ter pelo menos 6 caracteres.',
    TOO_MANY_ATTEMPTS_TRY_LATER: 'Muitas tentativas. Tenta mais tarde.',
    USER_DISABLED: 'Esta conta foi desativada.',
    INVALID_LOGIN_CREDENTIALS: 'Numero ou password incorretos.',
  };
  for (const [key, msg] of Object.entries(errors)) {
    if (errorCode.includes(key)) return msg;
  }
  return 'Erro de autenticacao. Tenta novamente.';
};