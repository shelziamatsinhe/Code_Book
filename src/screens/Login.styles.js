// ============================================================
// Styles: Login.styles.js
// Descrição: Estilos separados da LoginScreen
// ============================================================

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0a1a',
  },
  topSection: {
    backgroundColor: '#4a1d6e',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    alignItems: 'center',
  },
  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#6b2fa0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 3,
    borderColor: '#8b45c530',
  },
  logoText: {
    fontSize: 32,
    fontWeight: '900',
    color: '#ffffff',
  },
  appName: {
    fontSize: 28,
    fontWeight: '900',
    color: '#ffffff',
    letterSpacing: -0.5,
    marginBottom: 6,
  },
  appSubtitle: {
    fontSize: 13,
    color: '#d4b8f0',
    textAlign: 'center',
  },
  content: {
   padding: 24,
  justifyContent: 'center',
  flexGrow: 1,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: '800',
    color: '#f1e6ff',
    marginBottom: 6,
  },
  welcomeSubText: {
    fontSize: 14,
    color: '#7a5fa0',
    marginBottom: 32,
    lineHeight: 20,
  },
  fieldContainer: {
    marginBottom: 16,
  },
  fieldLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#b89fd4',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  input: {
    backgroundColor: '#1a0f2e',
    borderRadius: 14,
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
  emailPreview: {
    backgroundColor: '#1a0f2e',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#3d1f6e',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  emailPreviewText: {
    fontSize: 14,
    color: '#8b45c5',
    fontWeight: '600',
  },
  emailPreviewHint: {
    fontSize: 11,
    color: '#7a5fa0',
    marginTop: 4,
  },
  loginButton: {
    backgroundColor: '#6b2fa0',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 24,
  },
  loginButtonDisabled: {
    opacity: 0.6,
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 24,
  },
  footerText: {
    fontSize: 12,
    color: '#3d1f6e',
    fontWeight: '600',
  },
  generalError: {
    backgroundColor: '#ef444415',
    borderRadius: 12,
    padding: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ef444433',
  },
  generalErrorText: {
    fontSize: 13,
    color: '#ef4444',
    textAlign: 'center',
  },
});