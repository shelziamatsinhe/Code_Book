// ============================================================
// Screen: LoginScreen.jsx
// Camada: View (MVVM)
// Descrição: Ecrã de login com número e nome do estudante
//            Guarda sessão localmente com AsyncStorage
// ============================================================

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  useWindowDimensions,
} from 'react-native';
import { useLoginViewModel } from '../viewmodels/LoginViewModel';
import { styles } from './Login.styles';

const LoginScreen = ({ navigation }) => {
  const { form, errors, isLoading, updateField, login } = useLoginViewModel();
  const [focusedField, setFocusedField] = useState(null);
  const { width } = useWindowDimensions();

  const handleLogin = async () => {
    const success = await login();
    if (success) {
      navigation.replace('Main');
    }
  };

  return (
    <SafeAreaView
      style={styles.container}
      accessibilityLabel="Ecrã de login do CodeBook">

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

        {/* Topo com logo */}
        <View style={styles.topSection}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>CB</Text>
          </View>
          <Text
            style={styles.appName}
            accessibilityRole="header">
            CodeBook
          </Text>
          <Text style={styles.appSubtitle}>
            Universidade de Ciências e Tecnologias{'\n'}Joaquim Alberto Chissano
          </Text>
        </View>

        <ScrollView
           contentContainerStyle={styles.content}
  keyboardShouldPersistTaps="handled"
  showsVerticalScrollIndicator={false}>

          <Text style={styles.welcomeText}>Bem-vindo!</Text>
          <Text style={styles.welcomeSubText}>
            Introduz os teus dados para aceder à app.
          </Text>

          {/* Erro geral */}
          {errors.general && (
            <View style={styles.generalError}>
              <Text style={styles.generalErrorText}>{errors.general}</Text>
            </View>
          )}

          {/* Campo Nome */}
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Nome Completo</Text>
            <TextInput
              style={[
                styles.input,
                focusedField === 'name' && styles.inputFocused,
                errors.name && styles.inputError,
              ]}
              value={form.name}
              onChangeText={(v) => updateField('name', v)}
              placeholder="Ex: Shelzia Matsinhe"
              placeholderTextColor="#3d1f6e"
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              accessibilityLabel="Campo nome completo"
              accessibilityHint="Escreve o teu nome completo"
            />
            {errors.name && (
              <Text style={styles.errorText} accessibilityRole="alert">
                ⚠️ {errors.name}
              </Text>
            )}
          </View>

          {/* Campo Número */}
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Número de Estudante</Text>
            <TextInput
              style={[
                styles.input,
                focusedField === 'number' && styles.inputFocused,
                errors.number && styles.inputError,
              ]}
              value={form.number}
              onChangeText={(v) => updateField('number', v)}
              placeholder="Ex: 2025080007"
              placeholderTextColor="#3d1f6e"
              keyboardType="numeric"
              maxLength={10}
              onFocus={() => setFocusedField('number')}
              onBlur={() => setFocusedField(null)}
              accessibilityLabel="Campo número de estudante"
              accessibilityHint="Escreve o teu número de estudante com 10 dígitos"
            />
            {errors.number && (
              <Text style={styles.errorText} accessibilityRole="alert">
                ⚠️ {errors.number}
              </Text>
            )}
          </View>

          {/* Email gerado automaticamente */}
          {form.number.length === 10 && (
            <View style={styles.fieldContainer}>
              <Text style={styles.fieldLabel}>Email Institucional</Text>
              <View style={styles.emailPreview}>
                <Text style={styles.emailPreviewText}>
                  {form.number}@ujac.ac.mz
                </Text>
                <Text style={styles.emailPreviewHint}>
                  Gerado automaticamente a partir do teu número
                </Text>
              </View>
            </View>
          )}

          {/* Botão login */}
          <TouchableOpacity
            style={[styles.loginButton, isLoading && styles.loginButtonDisabled]}
            onPress={handleLogin}
            disabled={isLoading}
            activeOpacity={0.85}
            accessibilityLabel="Entrar no CodeBook"
            accessibilityRole="button">
            {isLoading ? (
              <ActivityIndicator color="#ffffff" />
            ) : (
              <Text style={styles.loginButtonText}>Entrar</Text>
            )}
          </TouchableOpacity>
        </ScrollView>

        {/* Rodapé */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>UJAC • Engenharia Informática • 2026</Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;