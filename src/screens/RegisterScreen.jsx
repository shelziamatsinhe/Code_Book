// src/screens/RegisterScreen.jsx
import React, {useState} from 'react';
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
} from 'react-native';

import {useRegisterViewModel} from '../viewmodels/RegisterViewModel';
import {UJAC_COURSES, ACADEMIC_YEARS} from '../models/Student';
import {styles} from './Register.styles';

const FormField = ({label, value, onChangeText, placeholder, keyboardType = 'default', secureTextEntry = false, accessibilityLabel, rightElement}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <View style={{position: 'relative'}}>
        <TextInput
          style={[styles.input, isFocused && styles.inputFocused, rightElement && {paddingRight: 50}]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#3d1f6e"
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          accessibilityLabel={accessibilityLabel}
        />
        {rightElement && (
          <View style={{position: 'absolute', right: 14, top: 0, bottom: 0, justifyContent: 'center'}}>
            {rightElement}
          </View>
        )}
      </View>
    </View>
  );
};

const SelectorField = ({label, options, value, onSelect}) => (
  <View style={styles.fieldContainer}>
    <Text style={styles.fieldLabel}>{label}</Text>
    <View style={styles.selectorContainer}>
      {options.map(option => (
        <TouchableOpacity
          key={option}
          style={[styles.selectorOption, value === option && styles.selectorOptionActive]}
          onPress={() => onSelect(option)}
          activeOpacity={0.8}
          accessibilityRole="button"
          accessibilityState={{selected: value === option}}>
          <Text style={[styles.selectorOptionText, value === option && styles.selectorOptionTextActive]}>
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

const RegisterScreen = ({navigation}) => {
  const {register, loading, error, setError} = useRegisterViewModel();
  const [numero, setNumero] = useState('');
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');
  const [ano, setAno] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleRegister = () => {
    setError('');
    // passa ano explicitamente
    register({numero, nome, curso, ano, password, confirmPassword}, navigation);
  };

  const ToggleBtn = ({show, onPress}) => (
    <TouchableOpacity onPress={onPress}>
      <Text style={{fontSize: 18}}>{show ? '🙈' : '👁️'}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">

          {/* Header dentro do scroll */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()} accessibilityRole="button">
              <Text style={styles.backText}>← Voltar</Text>
            </TouchableOpacity>
            <Text style={styles.headerTitle} accessibilityRole="header">Cadastro</Text>
            <Text style={styles.headerSubtitle}>Regista-te como estudante da UJAC</Text>
          </View>

          <View style={{padding: 20}}>
            {error ? (
              <View style={styles.generalError}>
                <Text style={styles.generalErrorText}>❌ {error}</Text>
              </View>
            ) : null}

            <FormField label="Nome Completo" value={nome} onChangeText={setNome} placeholder="Ex: Shelzia Matsinhe" accessibilityLabel="Campo nome completo" />

            <FormField label="Numero de Estudante" value={numero} onChangeText={setNumero} placeholder="Ex: 2025080007" keyboardType="numeric" accessibilityLabel="Campo numero" />

            {numero.length === 10 && (
              <View style={styles.fieldContainer}>
                <Text style={styles.fieldLabel}>Email Institucional</Text>
                <View style={[styles.input, {justifyContent: 'center'}]}>
                  <Text style={{color: '#8b45c5', fontSize: 14, fontWeight: '600'}}>{numero}@ujac.ac.mz</Text>
                </View>
                <Text style={{fontSize: 11, color: '#7a5fa0', marginTop: 4}}>Gerado automaticamente</Text>
              </View>
            )}

            <SelectorField label="Curso" options={UJAC_COURSES} value={curso} onSelect={setCurso} />
            <SelectorField label="Ano" options={ACADEMIC_YEARS} value={ano} onSelect={setAno} />

            <FormField
              label="Password"
              value={password}
              onChangeText={setPassword}
              placeholder="Minimo 6 caracteres"
              secureTextEntry={!showPassword}
              accessibilityLabel="Campo password"
              rightElement={<ToggleBtn show={showPassword} onPress={() => setShowPassword(!showPassword)} />}
            />

            <FormField
              label="Confirmar Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Repete a password"
              secureTextEntry={!showConfirm}
              accessibilityLabel="Confirmar password"
              rightElement={<ToggleBtn show={showConfirm} onPress={() => setShowConfirm(!showConfirm)} />}
            />

            <TouchableOpacity
              style={[styles.submitButton, loading && styles.submitButtonDisabled]}
              onPress={handleRegister}
              disabled={loading}
              activeOpacity={0.85}
              accessibilityRole="button">
              {loading ? <ActivityIndicator color="#ffffff" /> : <Text style={styles.submitButtonText}>Criar Conta</Text>}
            </TouchableOpacity>

            <TouchableOpacity style={{alignItems: 'center', marginBottom: 32}} onPress={() => navigation.goBack()} accessibilityRole="button">
              <Text style={{color: '#7a5fa0', fontSize: 14}}>Ja tens conta? Entrar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;