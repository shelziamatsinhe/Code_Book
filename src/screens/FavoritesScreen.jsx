import React from 'react';
import {View, Text, FlatList, SafeAreaView, TouchableOpacity, ActivityIndicator} from 'react-native';
import {useFavoritesViewModel} from '../context/FavoritesContext';
import {styles} from './Favorites.styles';

const FavoriteCard = ({item, onRemove, onOpen}) => {
  const guide = item?.guide;
  const course = item?.course;
  if (!guide || !course) return null;
  return (
    <View style={styles.card}>
      <View style={styles.cardTop}>
        <View style={styles.cardInfo}>
          <View style={styles.courseBadge}>
            <Text style={styles.courseCode}>{course.code}</Text>
            <Text style={styles.courseName} numberOfLines={1}>{course.name}</Text>
          </View>
          <Text style={styles.guideTitle}>{guide.title}</Text>
          <View style={styles.teacherRow}>
            <Text style={styles.teacherLabel}>Docente: </Text>
            <Text style={styles.teacherName}>{guide.teacher}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.removeButton} onPress={onRemove} activeOpacity={0.8} accessibilityRole="button">
          <Text style={styles.removeButtonText}>🗑️</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardFooter}>
        <Text style={styles.stepsCount}>📋 {(guide.steps || []).length} passos</Text>
        <TouchableOpacity style={styles.openButton} onPress={onOpen} activeOpacity={0.85} accessibilityRole="button">
          <Text style={styles.openButtonText}>Ver guia →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const FavoritesScreen = ({navigation}) => {
  const {favorites, isLoading, toggleFavorite} = useFavoritesViewModel();

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#8b45c5" style={{marginTop: 60}} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={(item, index) =>
          item?.guide?.id && item?.course?.code
            ? `${item.course.code}-${item.guide.id}`
            : String(index)
        }
        ListHeaderComponent={
          <View style={styles.header}>
            <View style={styles.headerTop}>
              <Text style={styles.headerTitle}>Favoritos</Text>
              {favorites.length > 0 && (
                <Text style={styles.headerCount}>
                  {favorites.length} {favorites.length === 1 ? 'guia' : 'guias'}
                </Text>
              )}
            </View>
            <Text style={styles.headerSubtitle}>Os teus guias guardados</Text>
          </View>
        }
        renderItem={({item}) => (
          <FavoriteCard
            item={item}
            onRemove={() => toggleFavorite(item.guide, item.course)}
            onOpen={() => navigation.navigate('CourseDetail', {course: item.course})}
          />
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyEmoji}>⭐</Text>
            <Text style={styles.emptyTitle}>Nenhum favorito ainda</Text>
            <Text style={styles.emptyText}>Abre um guia e toca na estrela para o guardar aqui.</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default FavoritesScreen;