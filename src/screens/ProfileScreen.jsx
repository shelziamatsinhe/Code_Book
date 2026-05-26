// ============================================================
// Screen: ProfileScreen.jsx
// Camada: View (MVVM)
// Descrição: Perfil dinâmico do estudante com dados reais
//            da sessão guardada no AsyncStorage
// ============================================================

import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  useWindowDimensions,
  Alert,
  ActivityIndicator,
} from 'react-native';

// Importa ViewModel de sessão e favoritos
import { useSessionViewModel } from '../viewmodels/LoginViewModel';
import { useFavoritesViewModel } from '../viewmodels/FavoritesViewModel';
import { styles } from './Profile.styles';

const ProfileScreen = ({ navigation }) => {
  // Dados reais da sessão
  const { student, isLoading, logout } = useSessionViewModel();

  // Favoritos para estatísticas
  const { favorites } = useFavoritesViewModel();

  // Adapta ao tamanho do ecrã e rotação
  const { width } = useWindowDimensions();

  // Gera iniciais do nome para o avatar
  const getInitials = (name) => {
    if (!name) return 'CB';
    return name
      .split(' ')
      .map((n) => n[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  };

  // Estatísticas do estudante
  const stats = {
    favorites: favorites.length,
    courses: 4,
    guides: 6,
  };

  // Termina sessão e vai para Login
  const handleLogout = () => {
    Alert.alert(
      'Terminar Sessão',
      'Tens a certeza que queres sair?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Sair',
          style: 'destructive',
          onPress: async () => {
            await logout();
            navigation.replace('Login');
          },
        },
      ],
    );
  };

  // Ecrã de carregamento
  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator
          size="large"
          color="#8b45c5"
          style={{ marginTop: 60 }}
          accessibilityLabel="A carregar perfil"
        />
      </SafeAreaView>
    );
  }

  // Se não há sessão redireciona para login
  if (!student) {
    navigation.replace('Login');
    return null;
  }

  return (
    <SafeAreaView
      style={styles.container}
      accessibilityLabel="Ecrã de perfil do estudante">

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header com avatar e nome */}
        <View
          style={styles.header}
          accessibilityLabel={`Perfil de ${student.name}`}>

          {/* Avatar com iniciais */}
          <View
            style={styles.avatarContainer}
            accessibilityLabel={`Avatar de ${student.name}`}>
            <Text style={styles.avatarText}>
              {getInitials(student.name)}
            </Text>
          </View>

          {/* Nome */}
          <Text
            style={styles.studentName}
            accessibilityRole="header">
            {student.name}
          </Text>

          {/* Número */}
          <Text
            style={styles.studentNumber}
            accessibilityLabel={`Número de estudante: ${student.number}`}>
            Nº {student.number}
          </Text>

          {/* Curso */}
          <Text
            style={styles.studentCourse}
            accessibilityLabel={`Curso: ${student.course}`}>
            {student.course}
          </Text>
        </View>

        <View style={styles.content}>

          {/* Estatísticas */}
          <Text style={styles.sectionTitle}>Estatísticas</Text>
          <View
            style={styles.statsCard}
            accessibilityLabel={`${stats.favorites} favoritos, ${stats.courses} cadeiras, ${stats.guides} guias`}>
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

          {/* Informações pessoais */}
          <Text style={styles.sectionTitle}>Informações</Text>
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
                <Text style={styles.infoValue}>{student.year}</Text>
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

          {/* Opções */}
          <Text style={styles.sectionTitle}>Opções</Text>

          <TouchableOpacity
            style={styles.actionButton}
            activeOpacity={0.85}
            onPress={() => navigation.navigate('Favorites')}
            accessibilityLabel="Ver os meus guias favoritos"
            accessibilityRole="button">
            <Text style={styles.actionButtonIcon}>⭐</Text>
            <Text style={styles.actionButtonText}>Os meus favoritos</Text>
            <Text style={styles.actionButtonArrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            activeOpacity={0.85}
            onPress={() => navigation.navigate('Search')}
            accessibilityLabel="Pesquisar cadeiras"
            accessibilityRole="button">
            <Text style={styles.actionButtonIcon}>🔍</Text>
            <Text style={styles.actionButtonText}>Pesquisar cadeiras</Text>
            <Text style={styles.actionButtonArrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            activeOpacity={0.85}
            onPress={() => navigation.navigate('Register')}
            accessibilityLabel="Registar novo estudante"
            accessibilityRole="button">
            <Text style={styles.actionButtonIcon}>📝</Text>
            <Text style={styles.actionButtonText}>Registar estudante</Text>
            <Text style={styles.actionButtonArrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            activeOpacity={0.85}
            onPress={() => navigation.navigate('StudentList')}
            accessibilityLabel="Ver lista de estudantes"
            accessibilityRole="button">
            <Text style={styles.actionButtonIcon}>👥</Text>
            <Text style={styles.actionButtonText}>Ver estudantes</Text>
            <Text style={styles.actionButtonArrow}>›</Text>
          </TouchableOpacity>

          {/* Botão logout */}
          <TouchableOpacity
            style={styles.logoutButton}
            activeOpacity={0.85}
            onPress={handleLogout}
            accessibilityLabel="Terminar sessão"
            accessibilityHint="Sai da conta e regressa ao ecrã de login"
            accessibilityRole="button">
            <Text>🚪</Text>
            <Text style={styles.logoutText}>Terminar Sessão</Text>
          </TouchableOpacity>

          {/* Badge UJAC */}
          <View style={styles.ujacBadge}>
            <Text style={styles.ujacText}>
              UJAC • Engenharia Informática • 2026
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;