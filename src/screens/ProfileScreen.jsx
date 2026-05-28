// src/screens/ProfileScreen.jsx
import React, {useEffect} from 'react';
import {
  View, Text, ScrollView, SafeAreaView,
  TouchableOpacity, Alert, ActivityIndicator,
} from 'react-native';

import {useSessionViewModel} from '../viewmodels/LoginViewModel';
import {useFavoritesViewModel} from '../context/FavoritesContext';
import {styles} from './Profile.styles';

const ProfileScreen = ({navigation}) => {
  const {student, isLoading, logout} = useSessionViewModel();
  const {favorites} = useFavoritesViewModel();

  useEffect(() => {
    if (!isLoading && !student) {
      navigation.replace('Login');
    }
  }, [isLoading, student]);

  const getInitials = name => {
    if (!name || name === 'Estudante') return 'CB';
    return name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
  };

  const handleLogout = () => {
    Alert.alert('Terminar Sessao', 'Tens a certeza que queres sair?', [
      {text: 'Cancelar', style: 'cancel'},
      {text: 'Sair', style: 'destructive', onPress: async () => {
        await logout();
        navigation.replace('Login');
      }},
    ]);
  };

  if (isLoading || !student) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#8b45c5" style={{marginTop: 60}} />
      </SafeAreaView>
    );
  }

  const stats = {favorites: favorites.length, courses: 4, guides: 4};

  return (
    <SafeAreaView style={styles.container}>
      {/* ScrollView envolve TUDO incluindo o header */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow: 1}}>

        {/* Header avatar — dentro do scroll */}
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>{getInitials(student.name)}</Text>
          </View>
          <Text style={styles.studentName} accessibilityRole="header">{student.name}</Text>
          <Text style={styles.studentNumber}>N° {student.number}</Text>
          <Text style={styles.studentCourse}>{student.course}</Text>
        </View>

        <View style={styles.content}>

          {/* Estatisticas */}
          <Text style={styles.sectionTitle}>Estatisticas</Text>
          <View style={styles.statsCard}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{stats.favorites}</Text>
              <Text style={styles.statLabel}>Favoritos</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{stats.courses}</Text>
              <Text style={styles.statLabel}>Cadeiras</Text>
            </View>
            <View style={styles.statItemLast}>
              <Text style={styles.statValue}>{stats.guides}</Text>
              <Text style={styles.statLabel}>Guias</Text>
            </View>
          </View>

          {/* Informacoes */}
          <Text style={styles.sectionTitle}>Informacoes</Text>
          <View style={styles.infoCard}>
            <View style={styles.infoRow}>
              <Text style={styles.infoIcon}>👤</Text>
              <View style={styles.infoContent}>
                <Text style={styles.infoLabel}>Nome completo</Text>
                <Text style={styles.infoValue}>{student.name}</Text>
              </View>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoIcon}>🎓</Text>
              <View style={styles.infoContent}>
                <Text style={styles.infoLabel}>Curso</Text>
                <Text style={styles.infoValue}>{student.course}</Text>
              </View>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoIcon}>📅</Text>
              <View style={styles.infoContent}>
                <Text style={styles.infoLabel}>Ano</Text>
                <Text style={styles.infoValue}>
                  {student.year && student.year !== '' ? student.year : 'Nao definido'}
                </Text>
              </View>
            </View>
            <View style={styles.infoRowLast}>
              <Text style={styles.infoIcon}>✉️</Text>
              <View style={styles.infoContent}>
                <Text style={styles.infoLabel}>Email institucional</Text>
                <Text style={styles.infoValue}>{student.email}</Text>
              </View>
            </View>
          </View>

          {/* Opcoes */}
          <Text style={styles.sectionTitle}>Opcoes</Text>
          <TouchableOpacity style={styles.actionButton} activeOpacity={0.85} onPress={() => navigation.navigate('Favorites')} accessibilityRole="button">
            <Text style={styles.actionButtonIcon}>⭐</Text>
            <Text style={styles.actionButtonText}>Os meus favoritos</Text>
            <Text style={styles.actionButtonArrow}>›</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} activeOpacity={0.85} onPress={() => navigation.navigate('Search')} accessibilityRole="button">
            <Text style={styles.actionButtonIcon}>🔍</Text>
            <Text style={styles.actionButtonText}>Pesquisar cadeiras</Text>
            <Text style={styles.actionButtonArrow}>›</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} activeOpacity={0.85} onPress={() => navigation.navigate('Register')} accessibilityRole="button">
            <Text style={styles.actionButtonIcon}>📝</Text>
            <Text style={styles.actionButtonText}>Registar estudante</Text>
            <Text style={styles.actionButtonArrow}>›</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} activeOpacity={0.85} onPress={() => navigation.navigate('StudentList')} accessibilityRole="button">
            <Text style={styles.actionButtonIcon}>👥</Text>
            <Text style={styles.actionButtonText}>Ver estudantes</Text>
            <Text style={styles.actionButtonArrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.logoutButton} activeOpacity={0.85} onPress={handleLogout} accessibilityRole="button">
            <Text>🚪</Text>
            <Text style={styles.logoutText}>Terminar Sessao</Text>
          </TouchableOpacity>

          <View style={styles.ujacBadge}>
            <Text style={styles.ujacText}>UJAC • Engenharia Informatica • 2026</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;