// ============================================================
// Screen: SearchScreen.jsx
// Camada: View (MVVM)
// Descrição: Ecrã de pesquisa de cadeiras por nome,
//            código ou docente — com acessibilidade completa
// ============================================================

import React, { useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';

// Importa ViewModel e estilos separados
import { useSearchViewModel } from '../viewmodels/SearchViewModel';
import { styles } from './Search.styles';

// ============================================================
// Componente: CourseCard
// Descrição: Card de cada resultado de pesquisa
// ============================================================
const CourseCard = ({ item, onPress }) => (
  <TouchableOpacity
    style={styles.card}
    activeOpacity={0.85}
    onPress={onPress}
    // Acessibilidade
    accessibilityLabel={`Cadeira ${item.name}, código ${item.code}, docente ${item.teacher}`}
    accessibilityHint={`Abre os guias práticos da cadeira ${item.name}`}
    accessibilityRole="button">

    <View style={styles.cardHeader}>
      {/* Código */}
      <Text
        style={styles.courseCode}
        accessibilityLabel={`Código: ${item.code}`}>
        {item.code}
      </Text>
      {/* Créditos */}
      <Text
        style={styles.credits}
        accessibilityLabel={`${item.credits} créditos`}>
        {item.credits} Creditos
      </Text>
    </View>

    {/* Nome */}
    <Text style={styles.courseName}>{item.name}</Text>

    {/* Docente */}
    <View style={styles.teacherRow}>
      <Text style={styles.teacherLabel}>Docente: </Text>
      <Text style={styles.teacherName}>{item.teacher}</Text>
    </View>

    <View style={styles.footer}>
      <Text style={styles.semesterText}>{item.semester}º Semestre</Text>
      <Text
        style={styles.arrow}
        accessibilityElementsHidden={true}
        importantForAccessibility="no">
        →
      </Text>
    </View>
  </TouchableOpacity>
);

// ============================================================
// Screen principal: SearchScreen
// ============================================================
const SearchScreen = ({ navigation }) => {
  // Hook do ViewModel com lógica de pesquisa
  const { query, results, hasSearched, search, clearSearch } = useSearchViewModel();

  // Referência ao input para focar automaticamente
  const inputRef = useRef(null);

  // Adapta ao tamanho do ecrã e rotação
  const { width } = useWindowDimensions();

  return (
    <SafeAreaView
      style={styles.container}
      accessibilityLabel="Ecrã de pesquisa de cadeiras">

      {/* Header com barra de pesquisa */}
      <View style={styles.header}>
        <Text
          style={styles.headerTitle}
          accessibilityRole="header">
          Pesquisa
        </Text>
        <Text style={styles.headerSubtitle}>
          Pesquisa por nome, código ou docente
        </Text>

        {/* Barra de pesquisa */}
        <View style={styles.searchContainer}>
          <Text
            style={styles.searchIcon}
            accessibilityElementsHidden={true}>
            🔍
          </Text>
          <TextInput
            ref={inputRef}
            style={styles.searchInput}
            placeholder="Ex: PWM, Git, Carsolino..."
            placeholderTextColor="#7a5fa0"
            value={query}
            onChangeText={search}
            autoCorrect={false}
            returnKeyType="search"
            // Acessibilidade
            accessibilityLabel="Campo de pesquisa de cadeiras"
            accessibilityHint="Escreve o nome da cadeira, código ou docente"
          />

          {/* Botão limpar pesquisa */}
          {query.length > 0 && (
            <TouchableOpacity
              style={styles.clearButton}
              onPress={clearSearch}
              accessibilityLabel="Limpar pesquisa"
              accessibilityRole="button">
              <Text style={styles.clearButtonText}>✕</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Contador de resultados */}
      {hasSearched && (
        <Text
          style={styles.resultsCount}
          accessibilityLabel={`${results.length} resultados encontrados para ${query}`}>
          {results.length} resultado{results.length !== 1 ? 's' : ''} para "{query}"
        </Text>
      )}

      {/* Lista de resultados */}
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CourseCard
            item={item}
            onPress={() => navigation.navigate('CourseDetail', { course: item })}
          />
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        accessibilityLabel="Lista de resultados da pesquisa"

        // Estado inicial — antes de pesquisar
        ListEmptyComponent={
          !hasSearched ? (
            <View
              style={styles.initialContainer}
              accessibilityLabel="Escreve para pesquisar cadeiras">
              <Text style={styles.initialEmoji}>🔍</Text>
              <Text style={styles.initialText}>Pesquisa uma cadeira</Text>
              <Text style={styles.initialSubText}>
                Podes pesquisar pelo nome da cadeira,{'\n'}
                código ou nome do docente
              </Text>
            </View>
          ) : (
            // Nenhum resultado encontrado
            <View
              style={styles.emptyContainer}
              accessibilityLabel={`Nenhum resultado encontrado para ${query}`}>
              <Text style={styles.emptyEmoji}>😕</Text>
              <Text style={styles.emptyText}>Nenhum resultado encontrado</Text>
              <Text style={styles.emptySubText}>
                Tenta pesquisar por outro termo
              </Text>
            </View>
          )
        }
      />
    </SafeAreaView>
  );
};

export default SearchScreen;