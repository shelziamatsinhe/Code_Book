// ============================================================
// Screen: SearchScreen.jsx
// Camada: View (MVVM)
// Descricao: Pesquisa de cadeiras com reconhecimento de voz
//            A voz usa o Intent nativo do Android (sem biblioteca)
// ============================================================

import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  NativeModules,
  NativeEventEmitter,
  Platform,
  Alert,
  ActivityIndicator,
} from 'react-native';

import {useSearchViewModel} from '../viewmodels/SearchViewModel';
import {styles} from './Search.styles';

// ============================================================
// Reconhecimento de voz via Intent nativo Android
// Nao precisa de biblioteca externa
// ============================================================
let SpeechRecognizer = null;
try {
  // Tenta aceder ao modulo nativo de voz do Android
  SpeechRecognizer = NativeModules.SpeechRecognizerModule || null;
} catch (e) {
  SpeechRecognizer = null;
}

// Funcao que usa o Intent ACTION_RECOGNIZE_SPEECH do Android
const startVoiceRecognition = (onResult, onError) => {
  if (Platform.OS !== 'android') {
    onError('Voz so disponivel no Android');
    return;
  }

  try {
    // Usa o modulo de Intent nativo para abrir o reconhecimento de voz
    const {IntentAndroid} = NativeModules;
    if (IntentAndroid) {
      IntentAndroid.startActivityForResult(
        {
          action: 'android.speech.action.RECOGNIZE_SPEECH',
          extras: {
            'android.speech.extra.LANGUAGE_MODEL': 'free_form',
            'android.speech.extra.LANGUAGE': 'pt-MZ',
            'android.speech.extra.PROMPT': 'Diz o nome da cadeira...',
            'android.speech.extra.MAX_RESULTS': 1,
          },
        },
        result => {
          if (result && result['android.speech.extra.RESULTS']) {
            const text = result['android.speech.extra.RESULTS'][0];
            onResult(text);
          } else {
            onError('Nao foi possivel reconhecer a voz');
          }
        },
      );
    } else {
      onError('Reconhecimento de voz nao disponivel neste dispositivo');
    }
  } catch (e) {
    onError('Erro ao iniciar reconhecimento de voz');
  }
};

// ============================================================
// Componente: MicButton
// Descricao: Botao do microfone com estados visual
// ============================================================
const MicButton = ({isListening, onPress}) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.8}
    accessibilityRole="button"
    accessibilityLabel={isListening ? 'A ouvir...' : 'Pesquisa por voz'}
    style={{
      width: 36,
      height: 36,
      borderRadius: 18,
      backgroundColor: isListening ? '#ef4444' : '#6b2fa0',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 8,
    }}>
    <Text style={{fontSize: 16}}>
      {isListening ? '⏹' : '🎤'}
    </Text>
  </TouchableOpacity>
);

// ============================================================
// Componente: CourseCard
// ============================================================
const CourseCard = ({item, onPress}) => (
  <TouchableOpacity
    style={styles.card}
    activeOpacity={0.85}
    onPress={onPress}
    accessibilityLabel={`Cadeira ${item.name}, codigo ${item.code}, docente ${item.teacher}`}
    accessibilityRole="button">
    <View style={styles.cardHeader}>
      <Text style={styles.courseCode}>{item.code}</Text>
      <Text style={styles.year}>{item.year} Ano</Text>
    </View>
    <Text style={styles.courseName}>{item.name}</Text>
    <View style={styles.teacherRow}>
      <Text style={styles.teacherLabel}>Docente: </Text>
      <Text style={styles.teacherName}>{item.teacher}</Text>
    </View>
    <View style={styles.footer}>
      <Text style={styles.semesterText}>{item.semester}° Semestre</Text>
      <Text style={styles.arrow}>→</Text>
    </View>
  </TouchableOpacity>
);

// ============================================================
// Screen principal: SearchScreen
// ============================================================
const SearchScreen = ({navigation}) => {
  const {query, results, hasSearched, search, clearSearch} = useSearchViewModel();
  const inputRef = useRef(null);
  const [isListening, setIsListening] = useState(false);
  const [voiceError, setVoiceError] = useState('');

  // Inicia o reconhecimento de voz
  const handleVoiceSearch = () => {
    setVoiceError('');

    if (isListening) {
      setIsListening(false);
      return;
    }

    setIsListening(true);

    startVoiceRecognition(
      // Sucesso — texto reconhecido
      text => {
        setIsListening(false);
        search(text);
      },
      // Erro
      errorMsg => {
        setIsListening(false);
        setVoiceError(errorMsg);
        // Fallback — foca o input para o utilizador escrever
        setTimeout(() => inputRef.current?.focus(), 300);
      },
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={results}
        keyExtractor={item => item.id}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}

        // Header dentro da FlatList — scroll correto
        ListHeaderComponent={
          <View>
            <View style={styles.header}>
              <Text style={styles.headerTitle} accessibilityRole="header">
                Pesquisa
              </Text>
              <Text style={styles.headerSubtitle}>
                Pesquisa por nome, codigo ou docente
              </Text>

              {/* Barra de pesquisa com microfone */}
              <View style={[styles.searchContainer, {alignItems: 'center'}]}>
                <Text style={styles.searchIcon}>🔍</Text>
                <TextInput
                  ref={inputRef}
                  style={styles.searchInput}
                  placeholder="Ex: PWM, Git, Carsolino..."
                  placeholderTextColor="#7a5fa0"
                  value={query}
                  onChangeText={search}
                  autoCorrect={false}
                  returnKeyType="search"
                  accessibilityLabel="Campo de pesquisa"
                />
                {query.length > 0 && (
                  <TouchableOpacity
                    style={styles.clearButton}
                    onPress={clearSearch}
                    accessibilityRole="button"
                    accessibilityLabel="Limpar pesquisa">
                    <Text style={styles.clearButtonText}>✕</Text>
                  </TouchableOpacity>
                )}
                {/* Botao microfone */}
                <MicButton
                  isListening={isListening}
                  onPress={handleVoiceSearch}
                />
              </View>

              {/* Estado a ouvir */}
              {isListening && (
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10, gap: 8}}>
                  <ActivityIndicator size="small" color="#f5a623" />
                  <Text style={{color: '#f5a623', fontSize: 13, fontWeight: '600'}}>
                    A ouvir... fala agora
                  </Text>
                </View>
              )}

              {/* Erro de voz */}
              {voiceError ? (
                <Text style={{color: '#ef4444', fontSize: 12, marginTop: 8}}>
                  {voiceError}
                </Text>
              ) : null}
            </View>

            {/* Contador de resultados */}
            {hasSearched && (
              <Text style={styles.resultsCount}>
                {results.length} resultado{results.length !== 1 ? 's' : ''} para "{query}"
              </Text>
            )}
          </View>
        }

        renderItem={({item}) => (
          <CourseCard
            item={item}
            onPress={() => navigation.navigate('CourseDetail', {course: item})}
          />
        )}
        contentContainerStyle={styles.listContent}

        ListEmptyComponent={
          !hasSearched ? (
            <View style={styles.initialContainer}>
              <Text style={styles.initialEmoji}>🔍</Text>
              <Text style={styles.initialText}>Pesquisa uma cadeira</Text>
              <Text style={styles.initialSubText}>
                Escreve ou toca no microfone 🎤{'\n'}
                para pesquisar por voz
              </Text>
            </View>
          ) : (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyEmoji}>😕</Text>
              <Text style={styles.emptyText}>Nenhum resultado encontrado</Text>
              <Text style={styles.emptySubText}>Tenta pesquisar por outro termo</Text>
            </View>
          )
        }
      />
    </SafeAreaView>
  );
};

export default SearchScreen;