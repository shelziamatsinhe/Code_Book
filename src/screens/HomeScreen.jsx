// ============================================================
// Screen: HomeScreen.jsx
// Camada: View (MVVM)
// Descrição: Lista de cadeiras com acessibilidade completa
// Acessibilidade: accessibilityLabel, accessibilityRole,
//                 accessibilityHint em todos os elementos
// ============================================================

import React from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

// Importa ViewModel e estilos separados
import { HomeViewModel } from '../viewmodels/HomeViewModel';
import { styles } from './HomeScreen.styles';

const viewModel = new HomeViewModel();

const HomeScreen = ({ navigation }) => {
  const courses = viewModel.getCourses();

  // Renderiza cada card de cadeira
  const renderCourseItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.85}
        onPress={() => navigation.navigate('CourseDetail', { course: item })}
        // Acessibilidade: descreve o card e o resultado do clique
        accessibilityLabel={`Cadeira ${item.name}, código ${item.code}`}
        accessibilityHint={`Abre os guias práticos da cadeira ${item.name}`}
        accessibilityRole="button">

        <View style={styles.cardHeader}>
          {/* Código da cadeira */}
          <Text
            style={styles.courseCode}
            accessibilityLabel={`Código: ${item.code}`}>
            {item.code}
          </Text>
          {/* Anos */}
          <Text
            style={styles.year}
            accessibilityLabel={`${item.year} ano`}>
            {item.year} Ano
          </Text>
        </View>

        {/* Nome da cadeira */}
        <Text
          style={styles.courseName}
          accessibilityRole="text">
          {item.name}
        </Text>

        <View style={styles.footer}>
          {/* Semestre */}
          <Text
            style={styles.semesterText}
            accessibilityLabel={`${item.semester}º semestre`}>
            {item.semester}o Semestre
          </Text>
          {/* Seta indicadora */}
          <Text
            style={styles.arrow}
            accessibilityElementsHidden={true} // Oculta da leitura — apenas decorativo
            importantForAccessibility="no">
            →
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View
        style={styles.header}
        accessibilityRole="header">
        <View style={styles.headerTop}>
          <View style={styles.headerBadge}>
            <Text
              style={styles.headerBadgeText}
              accessibilityLabel="Instituto Superior de Engenharia e Tecnologia, UJAC">
              ISET - UJAC
            </Text>
          </View>
          <Text
            style={styles.headerSemester}
            accessibilityLabel="Ano de 2026">
            2026
          </Text>
        </View>

        {/* Título */}
        <Text
          style={styles.headerTitle}
          accessibilityRole="header"
          accessibilityLabel="CodeBook, guia de cadeiras">
          CodeBook
        </Text>

        {/* Subtítulo */}
        <Text
          style={styles.headerSubtitle}
          accessibilityLabel="Guia de cadeiras de Engenharia Informática">
          Guia de Cadeiras - Eng. Informatica
        </Text>

        {/* Estatísticas */}
        <View
          style={styles.headerStats}
          accessibilityLabel={`${courses.length} cadeiras disponíveis, nível licenciatura`}>
          <View style={styles.statChip}>
            <Text style={styles.statChipText}>{courses.length} Cadeiras</Text>
          </View>
          <View style={styles.statChip}>
            <Text style={styles.statChipText}>Licenciatura</Text>
          </View>
        </View>
      </View>

      {/* Lista de cadeiras */}
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={renderCourseItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        // Acessibilidade: descreve a lista para leitores de ecrã
        accessibilityLabel="Lista de cadeiras disponíveis"
        ListEmptyComponent={
          <View
            style={styles.emptyContainer}
            accessibilityLabel="Nenhuma cadeira encontrada">
            <Text style={styles.emptyText}>Nenhuma cadeira encontrada</Text>
            <Text style={styles.emptySubText}>Tenta mais tarde</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default HomeScreen;