// ============================================================
// Styles: Register.styles.js
// Descrição: Estilos separados do RegisterScreen
// Boas práticas: CSS sempre separado da lógica (View)
// ============================================================

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // Container principal
  container: {
    flex: 1,
    backgroundColor: '#0f0a1a',
  },

  // Header
  header: {
    backgroundColor: '#4a1d6e',
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  backButton: {
    marginBottom: 14,
  },
  backText: {
    color: '#d4b8f0',
    fontSize: 14,
    fontWeight: '600',
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 4,
    letterSpacing: -0.5,
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#d4b8f0',
  },

  // Conteúdo do formulário
  content: {
    flex: 1,
    padding: 20,
  },

  // Campo do formulário
  fieldContainer: {
    marginBottom: 16,
  },
  fieldLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#b89fd4',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  input: {
    backgroundColor: '#1a0f2e',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#3d1f6e',
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    color: '#f1e6ff',
  },
  inputFocused: {
    borderColor: '#8b45c5',
  },
  inputError: {
    borderColor: '#ef4444',
  },
  errorText: {
    fontSize: 12,
    color: '#ef4444',
    marginTop: 6,
    marginLeft: 4,
  },

  // Selector (curso e ano)
  selectorContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  selectorOption: {
    backgroundColor: '#1a0f2e',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#3d1f6e',
  },
  selectorOptionActive: {
    backgroundColor: '#6b2fa0',
    borderColor: '#8b45c5',
  },
  selectorOptionText: {
    fontSize: 13,
    color: '#7a5fa0',
    fontWeight: '600',
  },
  selectorOptionTextActive: {
    color: '#ffffff',
  },

  // Erro geral
  generalError: {
    backgroundColor: '#ef444415',
    borderRadius: 12,
    padding: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ef444433',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  generalErrorText: {
    flex: 1,
    fontSize: 13,
    color: '#ef4444',
    lineHeight: 19,
  },

  // Botão submeter
  submitButton: {
    backgroundColor: '#6b2fa0',
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 32,
  },
  submitButtonDisabled: {
    opacity: 0.6,
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
  },

  // Ecrã de sucesso
  successContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  successEmoji: {
    fontSize: 64,
    marginBottom: 20,
  },
  successTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#f1e6ff',
    marginBottom: 10,
    textAlign: 'center',
  },
  successText: {
    fontSize: 15,
    color: '#7a5fa0',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 30,
  },
  successButton: {
    backgroundColor: '#6b2fa0',
    borderRadius: 14,
    paddingHorizontal: 32,
    paddingVertical: 14,
    marginBottom: 12,
    width: '100%',
    alignItems: 'center',
  },
  successButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#ffffff',
  },
  successButtonSecondary: {
    backgroundColor: '#1a0f2e',
    borderRadius: 14,
    paddingHorizontal: 32,
    paddingVertical: 14,
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#3d1f6e',
  },
  successButtonSecondaryText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#b89fd4',
  },
});