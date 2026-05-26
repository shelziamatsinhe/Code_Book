// ============================================================
// Screen: WelcomeScreen.jsx
// Camada: View (MVVM)
// Descrição: Ecrã de boas-vindas
// ============================================================

import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  useWindowDimensions,
} from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  const { width, height } = useWindowDimensions();

  return (
    <SafeAreaView
      style={styles.container}
      accessibilityLabel="Ecrã de boas-vindas do CodeBook">

      {/* Topo com título */}
      <View style={styles.topSection}>
        <Text
          style={styles.title}
          accessibilityRole="header"
          accessibilityLabel="CodeBook, aplicação de guias da UJAC">
          Code Book
        </Text>
      </View>

      {/* Secção central com imagem e descrição */}
      <View style={styles.middleSection}>
        <Image
          source={require('../assets/reader.png')}
          style={{ width: width * 0.65, height: height * 0.35 }}
          resizeMode="contain"
          accessibilityLabel="Ilustração de um estudante a ler livros coloridos"
          accessibilityRole="image"
        />
        <Text
          style={styles.description}
          accessibilityLabel="Aprenda disciplinas de forma simples, organizada e prática">
          Aprenda disciplinas de forma simples,{'\n'}organizada e prática.
        </Text>
      </View>

      {/* Botão para avançar */}
      <View style={styles.bottomSection}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
          activeOpacity={0.85}
          accessibilityLabel="Seguinte"
          accessibilityHint="Avança para o login"
          accessibilityRole="button">
          <Text style={styles.buttonText}>Seguinte</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5c2d91',
  },
  topSection: {
    flex: 0.15,
    backgroundColor: '#4a1d6e',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: '900',
    color: '#ffffff',
    letterSpacing: 1,
  },
  middleSection: {
    flex: 0.70,
    backgroundColor: '#6b35b0',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
    textAlign: 'left',
    alignSelf: 'flex-start',
    lineHeight: 24,
  },
  bottomSection: {
    flex: 0.15,
    backgroundColor: '#6b35b0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#2d2d2d',
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 25,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default WelcomeScreen;