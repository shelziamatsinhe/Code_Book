// ============================================================
// Screen: WelcomeScreen.jsx
// Camada: View (MVVM)
// Descrição: Ecrã de boas-vindas com acessibilidade completa
// Acessibilidade: accessibilityLabel, accessibilityRole,
//                 accessibilityHint em todos os elementos
// ============================================================

import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  useWindowDimensions, // Responsivo — atualiza com rotação
} from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Dimensões dinâmicas — adapta ao ecrã e rotação
  const { width, height } = useWindowDimensions();

  return (
    <SafeAreaView
      style={styles.container}
      // Acessibilidade: descreve o ecrã para leitores de ecrã
      accessibilityLabel="Ecrã de boas-vindas do CodeBook">

      {/* Topo com título */}
      <View style={styles.topSection}>
        <Text
          style={styles.title}
          // Acessibilidade: título principal da app
          accessibilityRole="header"
          accessibilityLabel="CodeBook, aplicação de guias da UJAC">
          Code Book
        </Text>
      </View>

      {/* Secção central com imagem e descrição */}
      <View style={styles.middleSection}>
        <Image
          source={require('../assets/reader.png')}
          style={{
            width: width * 0.65,
            height: height * 0.35,
          }}
          resizeMode="contain"
          // Acessibilidade: descrição da imagem para utilizadores com deficiência visual
          accessibilityLabel="Ilustração de um estudante a ler livros coloridos"
          accessibilityRole="image"
        />
        <Text
          style={styles.description}
          // Acessibilidade: descrição do propósito da app
          accessibilityLabel="Aprenda disciplinas de forma simples, organizada e prática">
          Aprenda disciplinas de forma simples,{'\n'}organizada e prática.
        </Text>
      </View>

      {/* Botão para avançar */}
      <View style={styles.bottomSection}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Main')}
          activeOpacity={0.85}
          // Acessibilidade: descreve o botão e o resultado da ação
          accessibilityLabel="Seguinte"
          accessibilityHint="Avança para a lista de cadeiras do curso"
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