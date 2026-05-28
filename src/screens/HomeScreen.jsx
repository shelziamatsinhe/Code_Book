// src/screens/HomeScreen.jsx
import React from 'react';
import {View, Text, FlatList, SafeAreaView, TouchableOpacity} from 'react-native';

import {HomeViewModel} from '../viewmodels/HomeViewModel';
import {styles} from './HomeScreen.styles';

const viewModel = new HomeViewModel();

const HomeScreen = ({navigation}) => {
  const courses = viewModel.getCourses();

  const renderCourseItem = ({item}) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.85}
      onPress={() => navigation.navigate('CourseDetail', {course: item})}
      accessibilityLabel={`Cadeira ${item.name}, codigo ${item.code}`}
      accessibilityRole="button">
      <View style={styles.cardHeader}>
        <Text style={styles.courseCode}>{item.code}</Text>
        <Text style={styles.year}>{item.year} Ano</Text>
      </View>
      <Text style={styles.courseName}>{item.name}</Text>
      <View style={styles.footer}>
        <Text style={styles.semesterText}>{item.semester}o Semestre</Text>
        <Text style={styles.arrow}>→</Text>
      </View>
    </TouchableOpacity>
  );

  // Header como componente dentro da FlatList — scroll correto
  const ListHeader = () => (
    <View style={styles.header}>
      <View style={styles.headerTop}>
        <View style={styles.headerBadge}>
          <Text style={styles.headerBadgeText}>ISET - UJAC</Text>
        </View>
        <Text style={styles.headerSemester}>2026</Text>
      </View>
      <Text style={styles.headerTitle} accessibilityRole="header">CodeBook</Text>
      <Text style={styles.headerSubtitle}>Guia de Cadeiras - Eng. Informatica</Text>
      <View style={styles.headerStats}>
        <View style={styles.statChip}>
          <Text style={styles.statChipText}>{courses.length} Cadeiras</Text>
        </View>
        <View style={styles.statChip}>
          <Text style={styles.statChipText}>Licenciatura</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={courses}
        keyExtractor={item => item.id}
        renderItem={renderCourseItem}
        ListHeaderComponent={<ListHeader />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Nenhuma cadeira encontrada</Text>
            <Text style={styles.emptySubText}>Tenta mais tarde</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default HomeScreen;