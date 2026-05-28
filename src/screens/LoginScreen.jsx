// src/screens/LoginScreen.jsx
import React, {useState} from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  SafeAreaView, ScrollView, ActivityIndicator,
  KeyboardAvoidingView, Platform,
} from 'react-native';
import {useLoginViewModel} from '../viewmodels/LoginViewModel';
import {styles} from './Login.styles';

const LoginScreen = ({navigation}) => {
  const {login, loading, error, setError} = useLoginViewModel();
  const [numero, setNumero] = useState('');
  const [password, setPassword] = useState('');
  const [focusedField, setFocusedField] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    setError('');
    login(numero, password, navigation);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>

          {/* Header compacto dentro do scroll */}
          <View style={styles.topSection}>
            <Text style={styles.appName}>CodeBook</Text>
            <Text style={styles.appSubtitle}>
              Universidade de Ciencias e Tecnologias{'\n'}Joaquim Alberto Chissano
            </Text>
          </View>

          {/* Formulario */}
          <View style={styles.content}>
            <Text style={styles.welcomeText}>Bem-vindo!</Text>
            <Text style={styles.welcomeSubText}>
              Introduz os teus dados para aceder a app.
            </Text>

            {/* Erro geral */}
            {error ? (
              <View style={styles.generalError}>
                <Text style={styles.generalErrorText}>{error}</Text>
              </View>
            ) : null}

            {/* Numero */}
            <View style={styles.fieldContainer}>
              <Text style={styles.fieldLabel}>Numero de Estudante</Text>
              <TextInput
                style={[styles.input, focusedField === 'numero' && styles.inputFocused]}
                value={numero}
                onChangeText={setNumero}
                placeholder="Ex: 2025080007"
                placeholderTextColor="#3d1f6e"
                keyboardType="numeric"
                maxLength={10}
                onFocus={() => setFocusedField('numero')}
                onBlur={() => setFocusedField(null)}
                accessibilityLabel="Numero de estudante"
              />
            </View>

            {/* Email gerado */}
            {numero.length === 10 && (
              <View style={styles.fieldContainer}>
                <Text style={styles.fieldLabel}>Email Institucional</Text>
                <View style={styles.emailPreview}>
                  <Text style={styles.emailPreviewText}>{numero}@ujac.ac.mz</Text>
                  <Text style={styles.emailPreviewHint}>Gerado automaticamente</Text>
                </View>
              </View>
            )}

            {/* Password */}
            <View style={styles.fieldContainer}>
              <Text style={styles.fieldLabel}>Password</Text>
              <View style={{position: 'relative'}}>
                <TextInput
                  style={[
                    styles.input,
                    focusedField === 'password' && styles.inputFocused,
                    {paddingRight: 50},
                  ]}
                  value={password}
                  onChangeText={setPassword}
                  placeholder="A tua password"
                  placeholderTextColor="#3d1f6e"
                  secureTextEntry={!showPassword}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                  accessibilityLabel="Password"
                />
                <TouchableOpacity
                  style={{position: 'absolute', right: 14, top: 0, bottom: 0, justifyContent: 'center'}}
                  onPress={() => setShowPassword(!showPassword)}>
                  <Text style={{fontSize: 16}}>{showPassword ? '🙈' : '👁️'}</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Botao entrar */}
            <TouchableOpacity
              style={[styles.loginButton, loading && styles.loginButtonDisabled]}
              onPress={handleLogin}
              disabled={loading}
              activeOpacity={0.85}
              accessibilityRole="button">
              {loading
                ? <ActivityIndicator color="#ffffff" />
                : <Text style={styles.loginButtonText}>Entrar</Text>
              }
            </TouchableOpacity>

            {/* Separador */}
            <View style={styles.separator}>
              <View style={styles.separatorLine} />
              <Text style={styles.separatorText}>ou</Text>
              <View style={styles.separatorLine} />
            </View>

            {/* Botao registar */}
            <TouchableOpacity
              style={styles.registerButton}
              onPress={() => navigation.navigate('Register')}
              activeOpacity={0.85}
              accessibilityRole="button">
              <Text style={styles.registerButtonText}>
                Ainda nao tens conta? Registar
              </Text>
            </TouchableOpacity>
          </View>

          {/* Rodape */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>UJAC • Engenharia Informatica • 2026</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;