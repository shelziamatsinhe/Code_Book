import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';
import {styles} from './CourseDetail.styles';
import {MOCK_GUIDES} from '../models/Course';
import {useFavoritesViewModel} from '../context/FavoritesContext';

const ScriptBlock = ({script}) => (
  <View style={styles.scriptBlock}>
    <View style={styles.scriptHeader}>
      <Text style={styles.scriptHeaderText}>💻 Script / Comando</Text>
    </View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <Text style={styles.scriptText}>{script}</Text>
    </ScrollView>
  </View>
);

const GuideCard = ({guide, course, isFav, onToggleFav}) => (
  <View style={styles.guideCard}>
    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4}}>
      <Text style={[styles.guideTitle, {flex: 1, marginRight: 8}]}>{guide.title}</Text>
      <TouchableOpacity onPress={onToggleFav} activeOpacity={0.8} accessibilityRole="button">
        <Text style={{fontSize: 22}}>{isFav ? '⭐' : '☆'}</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.guideTeacherRow}>
      <Text style={styles.guideTeacherLabel}>Docente: </Text>
      <Text style={styles.guideTeacherName}>{guide.teacher}</Text>
    </View>
    <Text style={[styles.stepsTitle, {marginTop: 10}]}>Passos</Text>
    {(guide.steps || []).map((step, index) => (
      <View key={index} style={styles.stepRow}>
        <View style={styles.stepNumber}>
          <Text style={styles.stepNumberText}>{index + 1}</Text>
        </View>
        <View style={styles.stepContent}>
          <Text style={styles.stepInstruction}>{step.instruction}</Text>
          {step.script ? <ScriptBlock script={step.script} /> : null}
        </View>
      </View>
    ))}
    {guide.exercises && guide.exercises.length > 0 && (
      <View style={styles.exercisesSection}>
        <Text style={styles.exercisesTitle}>Exercicios Praticos</Text>
        {guide.exercises.map((exercise, index) => (
          <View key={index} style={styles.exerciseRow}>
            <Text style={styles.exerciseBullet}>{index + 1}.</Text>
            <Text style={styles.exerciseText}>{exercise}</Text>
          </View>
        ))}
      </View>
    )}
  </View>
);

const CourseDetailScreen = ({route, navigation}) => {
  const {course} = route.params;
  const guides = MOCK_GUIDES[course.code] || [];
  const {toggleFavorite, isFavorite} = useFavoritesViewModel();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 32}}>
        {/* Header dentro do scroll */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()} accessibilityRole="button">
            <Text style={styles.backText}>← Voltar</Text>
          </TouchableOpacity>
          <View style={styles.codeBadge}>
            <Text style={styles.codeBadgeText}>{course.code}</Text>
          </View>
          <Text style={styles.courseName}>{course.name}</Text>
          <Text style={styles.courseMeta}>{course.semester}° Semestre • {course.year || 0}° Ano</Text>
          <View style={styles.teacherRow}>
            <Text style={styles.teacherLabel}>Docente:</Text>
            <Text style={styles.teacherName}>{course.teacher}</Text>
          </View>
        </View>

        <View style={{padding: 14}}>
          <Text style={styles.sectionTitle}>Aulas Praticas</Text>
          {guides.length === 0 ? (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>Nenhum guia disponivel ainda.</Text>
            </View>
          ) : (
            guides.map(guide => (
              <GuideCard
                key={guide.id}
                guide={guide}
                course={course}
                isFav={isFavorite(guide.id, course.code)}
                onToggleFav={() => toggleFavorite(guide, course)}
              />
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CourseDetailScreen;