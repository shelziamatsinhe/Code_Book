// ============================================================
// Screen: FavoritesScreen.jsx
// Camada: View (MVVM)
// Descrição: Lista os guias marcados como favoritos
//            com opção de remover e abrir o guia
// Acessibilidade: accessibilityLabel e accessibilityRole
//                 em todos os elementos interativos
// ============================================================

import React from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  useWindowDimensions,
} from 'react-native';

// Importa ViewModel e estilos separados
import { useFavoritesViewModel } from '../viewmodels/FavoritesViewModel';
import { styles } from './Favorites.styles';

// ============================================================
// Componente: FavoriteCard
// Descrição: Card de cada guia favorito
// ============================================================
const FavoriteCard = ({ item, onRemove, onOpen }) => (
  <View
    style={styles.card}
    accessibilityLabel={`Guia favorito: ${item.guide.title}, cadeira ${item.course.name}`}>

    <View style={styles.cardTop}>
      <View style={styles.cardInfo}>

        {/* Badge da cadeira */}
        <View style={styles.courseBadge}>
          <Text
            style={styles.courseCode}
            accessibilityLabel={`Código: ${item.course.code}`}>
            {item.course.code}
          </Text>
          <Text
            style={styles.courseName}
            numberOfLines={1}>
            {item.course.name}
          </Text>
        </View>

        {/* Título do guia */}
        <Text
          style={styles.guideTitle}
          accessibilityRole="text">
          {item.guide.title}
        </Text>

        {/* Docente */}
        <View style={styles.teacherRow}>
          <Text style={styles.teacherLabel}>Docente: </Text>
          <Text style={styles.teacherName}>{item.guide.teacher}</Text>
        </View>
      </View>

      {/* Botão remover favorito */}
      <TouchableOpacity
        style={styles.removeButton}
        onPress={onRemove}
        activeOpacity={0.8}
        accessibilityLabel={`Remover ${item.guide.title} dos favoritos`}
        accessibilityHint="Remove este guia da lista de favoritos"
        accessibilityRole="button">
        <Text style={styles.removeButtonText}>🗑️</Text>
      </TouchableOpacity>
    </View>

    {/* Footer com número de passos e botão abrir */}
    <View style={styles.cardFooter}>
      <Text
        style={styles.stepsCount}
        accessibilityLabel={`${item.guide.steps.length} passos neste guia`}>
        📋 {item.guide.steps.length} passos
      </Text>

      {/* Botão abrir guia */}
      <TouchableOpacity
        style={styles.openButton}
        onPress={onOpen}
        activeOpacity={0.85}
        accessibilityLabel={`Abrir guia ${item.guide.title}`}
        accessibilityHint="Abre os detalhes deste guia"
        accessibilityRole="button">
        <Text style={styles.openButtonText}>Ver guia →</Text>
      </TouchableOpacity>
    </View>
  </View>
);

// ============================================================
// Screen principal: FavoritesScreen
// ============================================================
const FavoritesScreen = ({ navigation }) => {
  // Hook do ViewModel com lógica de favoritos
  const { favorites, isLoading, toggleFavorite } = useFavoritesViewModel();

  // Adapta ao tamanho do ecrã e rotação
  const { width } = useWindowDimensions();

  // Ecrã de carregamento
  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator
          size="large"
          color="#8b45c5"
          style={{ marginTop: 60 }}
          accessibilityLabel="A carregar favoritos"
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={styles.container}
      accessibilityLabel="Ecrã de guias favoritos">

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text
            style={styles.headerTitle}
            accessibilityRole="header">
            Favoritos
          </Text>
          {/* Contador de favoritos */}
          {favorites.length > 0 && (
            <Text
              style={styles.headerCount}
              accessibilityLabel={`${favorites.length} guias favoritos`}>
              {favorites.length} {favorites.length === 1 ? 'guia' : 'guias'}
            </Text>
          )}
        </View>
        <Text style={styles.headerSubtitle}>
          Os teus guias guardados
        </Text>
      </View>

      {/* Lista de favoritos */}
      <FlatList
        data={favorites}
        keyExtractor={(item) => `${item.course.code}-${item.guide.id}`}
        renderItem={({ item }) => (
          <FavoriteCard
            item={item}
            onRemove={() => toggleFavorite(item.guide, item.course)}
            onOpen={() => navigation.navigate('CourseDetail', { course: item.course })}
          />
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        accessibilityLabel="Lista de guias favoritos"

        // Estado vazio
        ListEmptyComponent={
          <View
            style={styles.emptyContainer}
            accessibilityLabel="Ainda não tens guias favoritos">
            <Text style={styles.emptyEmoji}>⭐</Text>
            <Text style={styles.emptyTitle}>Nenhum favorito ainda</Text>
            <Text style={styles.emptyText}>
              Abre um guia e toca na estrela para o guardar aqui.
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default FavoritesScreen;