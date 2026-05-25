// ============================================================
// Screen: RegisterScreen.jsx
// Camada: View (MVVM)
// Descrição: Formulário de cadastro de estudantes da UJAC
//            com validação em tempo real e feedback visual
// Acessibilidade: accessibilityLabel e accessibilityRole
//                 em todos os elementos interativos
// ============================================================

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  useWindowDimensions,
} from 'react-native';

// Importa ViewModel, Model e estilos separados
import { useRegisterViewModel } from '../viewmodels/RegisterViewModel';
import { UJAC_COURSES, ACADEMIC_YEARS } from '../models/Student';
import { styles } from './Register.styles';

// ============================================================
// Componente: FormField
// Descrição: Campo de texto reutilizável com label e erro
// ============================================================
const FormField = ({
  label,
  value,
  onChangeText,
  placeholder,
  error,
  keyboardType = 'default',
  accessibilityLabel,
  accessibilityHint,
}) => {
  // Controla o foco do campo
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.fieldContainer}>
      {/* Label do campo */}
      <Text style={styles.fieldLabel}>{label}</Text>

      {/* Input */}
      <TextInput
        style={[
          styles.input,
          isFocused && styles.inputFocused,
          error && styles.inputError,
        ]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#3d1f6e"
        keyboardType={keyboardType}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        // Acessibilidade
        accessibilityLabel={accessibilityLabel}
        accessibilityHint={accessibilityHint}
      />

      {/* Mensagem de erro */}
      {error && (
        <Text
          style={styles.errorText}
          accessibilityLabel={`Erro: ${error}`}
          accessibilityRole="alert">
          ⚠️ {error}
        </Text>
      )}
    </View>
  );
};

// ============================================================
// Componente: SelectorField
// Descrição: Seletor de opções (curso e ano)
// ============================================================
const SelectorField = ({ label, options, value, onSelect, error }) => (
  <View style={styles.fieldContainer}>
    <Text style={styles.fieldLabel}>{label}</Text>
    <View style={styles.selectorContainer}>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={[
            styles.selectorOption,
            value === option && styles.selectorOptionActive,
          ]}
          onPress={() => onSelect(option)}
          activeOpacity={0.8}
          // Acessibilidade
          accessibilityLabel={option}
          accessibilityHint={`Selecciona ${option}`}
          accessibilityRole="button"
          accessibilityState={{ selected: value === option }}>
          <Text
            style={[
              styles.selectorOptionText,
              value === option && styles.selectorOptionTextActive,
            ]}>
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    {error && (
      <Text
        style={styles.errorText}
        accessibilityRole="alert">
        ⚠️ {error}
      </Text>
    )}
  </View>
);

// ============================================================
// Componente: SuccessScreen
// Descrição: Ecrã de sucesso após cadastro
// ============================================================
const SuccessScreen = ({ onRegisterAnother, onGoHome }) => (
  <View
    style={styles.successContainer}
    accessibilityLabel="Cadastro realizado com sucesso">
    <Text style={styles.successEmoji}>🎉</Text>
    <Text
      style={styles.successTitle}
      accessibilityRole="header">
      Cadastro Realizado!
    </Text>
    <Text style={styles.successText}>
      O teu registo foi submetido com sucesso.{'\n'}
      Bem-vindo ao CodeBook, estudante da UJAC!
    </Text>

    {/* Botão registar outro */}
    <TouchableOpacity
      style={styles.successButton}
      onPress={onRegisterAnother}
      activeOpacity={0.85}
      accessibilityLabel="Registar outro estudante"
      accessibilityRole="button">
      <Text style={styles.successButtonText}>Registar outro estudante</Text>
    </TouchableOpacity>

    {/* Botão ir para início */}
    <TouchableOpacity
      style={styles.successButtonSecondary}
      onPress={onGoHome}
      activeOpacity={0.85}
      accessibilityLabel="Ir para o início"
      accessibilityRole="button">
      <Text style={styles.successButtonSecondaryText}>Ir para o início</Text>
    </TouchableOpacity>
  </View>
);

// ============================================================
// Screen principal: RegisterScreen
// ============================================================
const RegisterScreen = ({ navigation }) => {
  // Hook do ViewModel com lógica do formulário
  const {
    form,
    errors,
    isLoading,
    isSuccess,
    updateField,
    submitForm,
    resetForm,
  } = useRegisterViewModel();

  // Adapta ao tamanho do ecrã e rotação
  const { width } = useWindowDimensions();

  return (
    <SafeAreaView
      style={styles.container}
      accessibilityLabel="Ecrã de cadastro de estudante">

      {/* Evita que o teclado tape os campos */}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
            accessibilityLabel="Voltar"
            accessibilityHint="Regressa ao ecrã anterior"
            accessibilityRole="button">
            <Text style={styles.backText}>← Voltar</Text>
          </TouchableOpacity>
          <Text
            style={styles.headerTitle}
            accessibilityRole="header">
            Cadastro
          </Text>
          <Text style={styles.headerSubtitle}>
            Regista-te como estudante da UJAC
          </Text>
        </View>

        {/* Ecrã de sucesso ou formulário */}
        {isSuccess ? (
          <SuccessScreen
            onRegisterAnother={resetForm}
            onGoHome={() => navigation.navigate('Main')}
          />
        ) : (
          <ScrollView
            style={styles.content}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled">

            {/* Erro geral */}
            {errors.general && (
              <View style={styles.generalError}>
                <Text>❌</Text>
                <Text
                  style={styles.generalErrorText}
                  accessibilityRole="alert">
                  {errors.general}
                </Text>
              </View>
            )}

            {/* Campo Nome */}
            <FormField
              label="Nome Completo"
              value={form.name}
              onChangeText={(v) => updateField('name', v)}
              placeholder="Ex: João Silva"
              error={errors.name}
              accessibilityLabel="Campo nome completo"
              accessibilityHint="Escreve o teu nome completo"
            />

            {/* Campo Número */}
            <FormField
              label="Número de Estudante"
              value={form.number}
              onChangeText={(v) => updateField('number', v)}
              placeholder="Ex: 2023001"
              error={errors.number}
              keyboardType="numeric"
              accessibilityLabel="Campo número de estudante"
              accessibilityHint="Escreve o teu número de estudante"
            />

            {/* Email gerado automaticamente */}
{form.number.length === 10 && (
  <View style={styles.fieldContainer}>
    <Text style={styles.fieldLabel}>Email Institucional</Text>
    <View style={[styles.input, { justifyContent: 'center' }]}>
      <Text style={{ color: '#8b45c5', fontSize: 14, fontWeight: '600' }}>
        {generateEmail(form.number)}
      </Text>
    </View>
    <Text style={{ fontSize: 11, color: '#7a5fa0', marginTop: 4, marginLeft: 4 }}>
      Gerado automaticamente a partir do teu número
    </Text>
  </View>
)}

            {/* Selector Curso */}
            <SelectorField
              label="Curso"
              options={UJAC_COURSES}
              value={form.course}
              onSelect={(v) => updateField('course', v)}
              error={errors.course}
            />

            {/* Selector Ano */}
            <SelectorField
              label="Ano"
              options={ACADEMIC_YEARS}
              value={form.year}
              onSelect={(v) => updateField('year', v)}
              error={errors.year}
            />

            {/* Botão submeter */}
            <TouchableOpacity
              style={[
                styles.submitButton,
                isLoading && styles.submitButtonDisabled,
              ]}
              onPress={submitForm}
              disabled={isLoading}
              activeOpacity={0.85}
              accessibilityLabel="Submeter formulário de cadastro"
              accessibilityHint="Regista o teu perfil de estudante"
              accessibilityRole="button">
              {isLoading ? (
                <ActivityIndicator color="#ffffff" />
              ) : (
                <Text style={styles.submitButtonText}>
                  Registar Estudante
                </Text>
              )}
            </TouchableOpacity>
          </ScrollView>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;