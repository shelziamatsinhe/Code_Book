import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0a1a',
  },

  // Header compacto dentro do scroll
  topSection: {
    backgroundColor: '#4a1d6e',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 28,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    alignItems: 'center',
  },

  appName: {
    fontSize: 22,
    fontWeight: '900',
    color: '#ffffff',
    letterSpacing: -0.5,
    marginBottom: 4,
  },
  appSubtitle: {
    fontSize: 12,
    color: '#d4b8f0',
    textAlign: 'center',
    lineHeight: 17,
  },

  // Conteudo dentro do scroll
  content: {
    padding: 20,
    flexGrow: 1,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#f1e6ff',
    marginBottom: 4,
    marginTop: 8,
  },
  welcomeSubText: {
    fontSize: 13,
    color: '#7a5fa0',
    marginBottom: 24,
    lineHeight: 19,
  },

  // Campos
  fieldContainer: {marginBottom: 14},
  fieldLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#b89fd4',
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  input: {
    backgroundColor: '#1a0f2e',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#3d1f6e',
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    color: '#f1e6ff',
  },
  inputFocused: {borderColor: '#8b45c5'},
  inputError: {borderColor: '#ef4444'},
  errorText: {fontSize: 11, color: '#ef4444', marginTop: 4, marginLeft: 4},

  // Email preview
  emailPreview: {
    backgroundColor: '#1a0f2e',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#3d1f6e',
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  emailPreviewText: {fontSize: 13, color: '#8b45c5', fontWeight: '600'},
  emailPreviewHint: {fontSize: 10, color: '#7a5fa0', marginTop: 3},

  // Erro geral
  generalError: {
    backgroundColor: '#ef444415',
    borderRadius: 10,
    padding: 12,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#ef444433',
  },
  generalErrorText: {fontSize: 13, color: '#ef4444', textAlign: 'center'},

  // Botao entrar
  loginButton: {
    backgroundColor: '#6b2fa0',
    borderRadius: 14,
    padding: 14,
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 16,
  },
  loginButtonDisabled: {opacity: 0.6},
  loginButtonText: {fontSize: 15, fontWeight: '700', color: '#ffffff'},

  // Separador
  separator: {
    flexDirection: 'row', alignItems: 'center',
    marginVertical: 12, gap: 10,
  },
  separatorLine: {flex: 1, height: 1, backgroundColor: '#3d1f6e'},
  separatorText: {fontSize: 12, color: '#7a5fa0', fontWeight: '600'},

  // Botao registar
  registerButton: {
    backgroundColor: '#1a0f2e',
    borderRadius: 14,
    padding: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#6b2fa0',
  },
  registerButtonText: {fontSize: 14, fontWeight: '600', color: '#8b45c5'},

  // Rodape
  footer: {alignItems: 'center', paddingBottom: 20, paddingTop: 8},
  footerText: {fontSize: 11, color: '#3d1f6e', fontWeight: '600'},
});