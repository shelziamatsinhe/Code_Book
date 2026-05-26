// ============================================================
// Styles: Search.styles.js
// Descrição: Estilos separados da SearchScreen
// Boas práticas: CSS sempre separado da lógica (View)
// ============================================================

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // Container principal
  container: {
    flex: 1,
    backgroundColor: '#0f0a1a',
  },

  // Header
  header: {
    backgroundColor: '#4a1d6e',
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 4,
    letterSpacing: -0.5,
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#d4b8f0',
    marginBottom: 16,
  },

  // Barra de pesquisa
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff15',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#6b2fa033',
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 10,
    color: '#b89fd4',
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#f1e6ff',
  },
  clearButton: {
    padding: 4,
  },
  clearButtonText: {
    fontSize: 16,
    color: '#7a5fa0',
    fontWeight: '700',
  },

  // Resultados
  resultsCount: {
    fontSize: 12,
    color: '#7a5fa0',
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 4,
    fontWeight: '500',
  },
  listContent: {
    padding: 16,
  },

  // Card de resultado
  card: {
    backgroundColor: '#1a0f2e',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#3d1f6e',
    marginBottom: 12,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  courseCode: {
    fontSize: 12,
    fontWeight: '700',
    color: '#8b45c5',
    backgroundColor: '#6b2fa015',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#6b2fa033',
  },
  year: {
    fontSize: 12,
    fontWeight: '600',
    color: '#f5a623',
    backgroundColor: '#f5a62315',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    overflow: 'hidden',
  },
  courseName: {
    fontSize: 17,
    fontWeight: '700',
    color: '#f1e6ff',
    marginBottom: 8,
    lineHeight: 23,
  },
  teacherRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 10,
  },
  teacherLabel: {
    fontSize: 12,
    color: '#7a5fa0',
  },
  teacherName: {
    fontSize: 12,
    color: '#f5a623',
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#3d1f6e',
    paddingTop: 10,
  },
  semesterText: {
    fontSize: 12,
    color: '#7a5fa0',
    fontWeight: '500',
  },
  arrow: {
    fontSize: 16,
    color: '#8b45c5',
    fontWeight: '700',
  },

  // Estado vazio
  emptyContainer: {
    alignItems: 'center',
    paddingTop: 60,
  },
  emptyEmoji: {
    fontSize: 48,
    marginBottom: 12,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#f1e6ff',
    marginBottom: 6,
    textAlign: 'center',
  },
  emptySubText: {
    fontSize: 13,
    color: '#7a5fa0',
    textAlign: 'center',
  },

  // Estado inicial (sem pesquisa)
  initialContainer: {
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 30,
  },
  initialEmoji: {
    fontSize: 48,
    marginBottom: 12,
  },
  initialText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#f1e6ff',
    marginBottom: 6,
    textAlign: 'center',
  },
  initialSubText: {
    fontSize: 13,
    color: '#7a5fa0',
    textAlign: 'center',
    lineHeight: 20,
  },
});