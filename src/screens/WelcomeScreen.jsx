import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Topo roxo com título */}
      <View style={styles.topSection}>
        <Text style={styles.title}>Code Book</Text>
      </View>

      {/* Secção central com imagem e texto */}
      <View style={styles.middleSection}>
        <Image
          source={require('../assets/reader.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.description}>
          Aprenda disciplinas de forma simples,{'\n'}organizada e prática.
        </Text>
      </View>

      {/* Botão Seguinte */}
      <View style={styles.bottomSection}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
          activeOpacity={0.85}>
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
    flex: 0.7,
    backgroundColor: '#6b35b0',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    marginTop: 10,
    marginHorizontal: 0,
  },
  image: {
    width: width * 0.65,
    height: height * 0.35,
    marginBottom: 30,
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