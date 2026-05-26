// ============================================================
// Screen: StudentListScreen.jsx
// Camada: View (MVVM)
// Descrição: Lista de estudantes consumida da API pública
//            JSONPlaceholder — demonstra consumo de API REST
// API: https://jsonplaceholder.typicode.com/users
// ============================================================

import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  useWindowDimensions,
} from 'react-native';

// Importa o serviço e estilos separados
import StudentService from '../services/StudentService';
import { styles } from './StudentList.styles';

// ============================================================
// Componente: StudentCard
// Descrição: Card de cada estudante da API
// ============================================================
const StudentCard = ({ student }) => {
  // Gera as iniciais do nome para o avatar
  const initials = student.name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <View
      style={styles.card}
      accessibilityLabel={`Estudante ${student.name}, número ${student.number}`}>

     // Avatar
<Text style={styles.avatarText}>
  {getInitials(student?.name)}
</Text>

// Nome
<Text style={styles.studentName}>
  {student?.name || 'Estudante'}
</Text>

// Número
<Text style={styles.studentNumber}>
  Nº {student?.number || '—'}
</Text>

// Curso
<Text style={styles.studentCourse}>
  {student?.course || 'Engenharia Informática'}
</Text>

// Email na secção de informações
<Text style={styles.infoValue}>{student?.email || '—'}
</Text>
</View>
  );
};

// ============================================================
// Screen principal: StudentListScreen
// ============================================================
const StudentListScreen = ({ navigation }) => {
  // Estado dos estudantes
  const [students, setStudents] = useState([]);

  // Estado de carregamento
  const [isLoading, setIsLoading] = useState(true);

  // Estado de erro
  const [error, setError] = useState(null);

  // Adapta ao tamanho do ecrã e rotação
  const { width } = useWindowDimensions();

  // Carrega os estudantes ao montar o componente
  useEffect(() => {
    loadStudents();
  }, []);

  // Função que chama o serviço
  const loadStudents = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await StudentService.getStudents();
      setStudents(data);
    } catch (err) {
      setError('Não foi possível carregar os estudantes.\nVerifica a tua ligação à internet.');
    } finally {
      setIsLoading(false);
    }
  };

  // Ecrã de carregamento
  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator
            size="large"
            color="#8b45c5"
            accessibilityLabel="A carregar estudantes da API"
          />
          <Text style={styles.loadingText}>A carregar estudantes...</Text>
        </View>
      </SafeAreaView>
    );
  }

  // Ecrã de erro
  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorEmoji}>📡</Text>
          <Text
            style={styles.errorTitle}
            accessibilityRole="header">
            Sem ligação
          </Text>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity
            style={styles.retryButton}
            onPress={loadStudents}
            accessibilityLabel="Tentar novamente"
            accessibilityRole="button">
            <Text style={styles.retryButtonText}>Tentar novamente</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={styles.container}
      accessibilityLabel="Lista de estudantes registados">

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          accessibilityLabel="Voltar"
          accessibilityRole="button">
          <Text style={styles.backText}>← Voltar</Text>
        </TouchableOpacity>

        <View style={styles.headerTop}>
          <Text
            style={styles.headerTitle}
            accessibilityRole="header">
            Estudantes
          </Text>
          <Text style={styles.headerCount}>{students.length} registados</Text>
        </View>

        <Text style={styles.headerSubtitle}>
          Lista de estudantes da UJAC
        </Text>

        {/* Badge a indicar que os dados vêm da API */}
        <View style={styles.apiBadge}>
          <Text style={styles.apiBadgeText}>
            🌐 JSONPlaceholder API
          </Text>
        </View>
      </View>

      {/* Lista de estudantes */}
      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <StudentCard student={item} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        accessibilityLabel="Lista de estudantes"
      />
    </SafeAreaView>
  );
};

export default StudentListScreen;