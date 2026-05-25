// ============================================================
// Screen: CourseDetailScreen.jsx
// Camada: View (MVVM)
// Descrição: Guias práticos com acessibilidade completa
// ============================================================

import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  useWindowDimensions,
} from 'react-native';

import { styles } from './CourseDetail.styles';
import { MOCK_GUIDES } from '../models/Course';
// Importa o ViewModel de favoritos
import { useFavoritesViewModel } from '../viewmodels/FavoritesViewModel';

// Bloco de script com acessibilidade
const ScriptBlock = ({ script }) => (
  <View
    style={styles.scriptBlock}
    // Acessibilidade: indica que é um bloco de código
    accessibilityLabel={`Bloco de código: ${script}`}
    accessibilityRole="text">
    <View style={styles.scriptHeader}>
      <Text style={styles.scriptHeaderText}>💻 Script / Comando</Text>
    </View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <Text style={styles.scriptText}>{script}</Text>
    </ScrollView>
  </View>
);

// Card de cada guia com acessibilidade
const GuideCard = ({ guide, course, isFav, onToggleFav }) => (
  <View style={styles.guideCard}>
    <View style={styles.guideHeader}></View>
    accessibilityLabel={`Guia: ${guide.title}, docente ${guide.teacher}`}

    {/* Cabeçalho */}
    <View style={styles.guideHeader}>
      <Text
        style={styles.guideTitle}
        accessibilityRole="header">
        {guide.title}
      </Text>
      <View style={styles.guideTeacherRow}>
        <Text style={styles.guideTeacherLabel}>Docente: </Text>
        <Text
          style={styles.guideTeacherName}
          accessibilityLabel={`Docente responsável: ${guide.teacher}`}>
          {guide.teacher}
        </Text>
      </View>
    </View>

    {/* Passos */}
    <Text
      style={styles.stepsTitle}
      accessibilityRole="header">
      Passos
    </Text>
    {guide.steps.map((step, index) => (
      <View
        key={index}
        style={styles.stepRow}
        accessibilityLabel={`Passo ${index + 1}: ${step.instruction}`}>
        <View style={styles.stepNumber}>
          <Text
            style={styles.stepNumberText}
            accessibilityElementsHidden={true}>
            {index + 1}
          </Text>
        </View>
        <View style={styles.stepContent}>
          <Text style={styles.stepInstruction}>{step.instruction}</Text>
          {step.script ? <ScriptBlock script={step.script} /> : null}
        </View>
      </View>
    ))}

     {/* Linha com título e botão favorito */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Text
          style={[styles.guideTitle, { flex: 1, marginRight: 10 }]}
          accessibilityRole="header">
          {guide.title}
        </Text>

        {/* Botão favorito */}
        <TouchableOpacity
          onPress={onToggleFav}
          activeOpacity={0.8}
          accessibilityLabel={isFav ? `Remover ${guide.title} dos favoritos` : `Adicionar ${guide.title} aos favoritos`}
          accessibilityRole="button">
          <Text style={{ fontSize: 22 }}>{isFav ? '⭐' : '☆'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.guideTeacherRow}>
        <Text style={styles.guideTeacherLabel}>Docente: </Text>
        <Text style={styles.guideTeacherName}>{guide.teacher}</Text>
      </View>
    

    {/* Exercícios */}
    {guide.exercises && guide.exercises.length > 0 && (
      <View
        style={styles.exercisesSection}
        accessibilityLabel="Secção de exercícios práticos">
        <Text
          style={styles.exercisesTitle}
          accessibilityRole="header">
          Exercícios Práticos
        </Text>
        {guide.exercises.map((exercise, index) => (
          <View
            key={index}
            style={styles.exerciseRow}
            accessibilityLabel={`Exercício ${index + 1}: ${exercise}`}>
            <Text
              style={styles.exerciseBullet}
              accessibilityElementsHidden={true}>
              {index + 1}.
            </Text>
            <Text style={styles.exerciseText}>{exercise}</Text>
          </View>
        ))}
      </View>
    )}
  </View>

);

const CourseDetailScreen = ({ route, navigation }) => {
  const { course } = route.params;
  const { width } = useWindowDimensions();
  const guides = MOCK_GUIDES[course.code] || [];

  const { toggleFavorite, isFavorite } = useFavoritesViewModel();

  return (
    <SafeAreaView
      style={styles.container}
      accessibilityLabel={`Ecrã de detalhes da cadeira ${course.name}`}>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          accessibilityLabel="Voltar para a lista de cadeiras"
          accessibilityHint="Regressa ao ecrã anterior"
          accessibilityRole="button">
          <Text style={styles.backText}>← Voltar</Text>
        </TouchableOpacity>

        <View style={styles.codeBadge}>
          <Text
            style={styles.codeBadgeText}
            accessibilityLabel={`Código da cadeira: ${course.code}`}>
            {course.code}
          </Text>
        </View>

        <Text
          style={styles.courseName}
          accessibilityRole="header">
          {course.name}
        </Text>

        <Text
          style={styles.courseMeta}
          accessibilityLabel={`${course.semester}º semestre, ${course.credits} créditos`}>
          {course.semester}º Semestre • {course.credits} Créditos
        </Text>

        <View style={styles.teacherRow}>
          <Text style={styles.teacherLabel}>Docente:</Text>
          <Text
            style={styles.teacherName}
            accessibilityLabel={`Docente: ${course.teacher}`}>
            {course.teacher}
          </Text>
        </View>
      </View>

      {/* Guias */}
      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
        accessibilityLabel="Lista de guias práticos da cadeira">

        <Text
          style={styles.sectionTitle}
          accessibilityRole="header">
          Aulas Práticas
        </Text>

        {guides.length === 0 ? (
          <View
            style={styles.emptyContainer}
            accessibilityLabel="Nenhum guia disponível para esta cadeira">
            <Text style={styles.emptyText}>
              Nenhum guia disponível ainda para esta cadeira.
            </Text>
          </View>
        ) : (
          guides.map((guide) => (
            <GuideCard key={guide.id} guide={guide} />
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CourseDetailScreen;