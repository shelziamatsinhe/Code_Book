// ============================================================
// Screen: ProfileScreen.jsx
// Camada: View (MVVM)
// Descrição: Perfil do estudante com informações pessoais,
//            estatísticas e opções de configuração
// Acessibilidade: accessibilityLabel e accessibilityRole
//                 em todos os elementos
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
} from 'react-native';

// Importa ViewModel e estilos separados
import { useProfileViewModel } from '../viewmodels/ProfileViewModel';
import { styles } from './Profile.styles';

// ============================================================
// Screen principal: ProfileScreen
// ============================================================
const ProfileScreen = ({ navigation }) => {
  // Hook do ViewModel com dados do estudante
  const { student, stats, getInitials } = useProfileViewModel();

  // Adapta ao tamanho do ecrã e rotação
  const { width } = useWindowDimensions();

  // Simula logout — na Fase 3 será Firebase Auth signOut
  const handleLogout = () => {
    Alert.alert(
      'Terminar Sessão',
      'Tens a certeza que queres sair?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Sair',
          style: 'destructive',
          onPress: () => {
            // Na Fase 3: Firebase Auth signOut()
            navigation.navigate('Welcome');
          },
        },
      ],
    );
  };

  return (
    <SafeAreaView
      style={styles.container}
      accessibilityLabel="Ecrã de perfil do estudante">

      <ScrollView
        showsVerticalScrollIndicator={false}>

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

          {/* Botão logout */}
          <TouchableOpacity
            style={styles.logoutButton}
            activeOpacity={0.85}
            onPress={handleLogout}
            accessibilityLabel="Terminar sessão"
            accessibilityHint="Sai da conta e regressa ao ecrã inicial"
            accessibilityRole="button">
            <Text>🚪</Text>
            <Text style={styles.logoutText}>Terminar Sessão</Text>
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