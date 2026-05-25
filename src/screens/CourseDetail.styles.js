// ============================================================
// Styles: CourseDetail.styles.js
// Descrição: Estilos separados do CourseDetailScreen
// Boas práticas: CSS sempre separado da lógica (View)
// ============================================================

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // Container principal
  container: {
    flex: 1,
    backgroundColor: '#0f0a1a',
  },

  // Header com info da cadeira
  header: {
    backgroundColor: '#4a1d6e',
    padding: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    paddingBottom: 24,
  },
  backButton: {
    marginBottom: 14,
  },
  backText: {
    color: '#d4b8f0',
    fontSize: 14,
    fontWeight: '600',
  },
  codeBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#6b2fa015',
    borderWidth: 1,
    borderColor: '#6b2fa033',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginBottom: 10,
    overflow: 'hidden',
  },
  codeBadgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#8b45c5',
  },
  courseName: {
    fontSize: 22,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 6,
    lineHeight: 28,
  },
  courseMeta: {
    fontSize: 13,
    color: '#d4b8f0',
    marginBottom: 4,
  },
  teacherRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    gap: 6,
  },
  teacherLabel: {
    fontSize: 12,
    color: '#7a5fa0',
    fontWeight: '500',
  },
  teacherName: {
    fontSize: 12,
    color: '#f5a623',
    fontWeight: '700',
  },

  // Conteúdo principal
  content: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#f1e6ff',
    marginBottom: 16,
    marginTop: 8,
  },

  // Card de cada guia
  guideCard: {
    backgroundColor: '#1a0f2e',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#3d1f6e',
  },
  guideHeader: {
    marginBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#3d1f6e',
    paddingBottom: 12,
  },
  guideTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#f1e6ff',
    marginBottom: 6,
    lineHeight: 21,
  },
  guideTeacherRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  guideTeacherLabel: {
    fontSize: 11,
    color: '#7a5fa0',
  },
  guideTeacherName: {
    fontSize: 11,
    color: '#f5a623',
    fontWeight: '600',
  },

  // Passos do guia
  stepsTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#b89fd4',
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  stepRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
    gap: 10,
  },
  stepNumber: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#6b2fa0',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 1,
  },
  stepNumberText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#ffffff',
  },
  stepContent: {
    flex: 1,
  },
  stepInstruction: {
    fontSize: 13,
    color: '#b89fd4',
    lineHeight: 20,
    marginBottom: 8,
  },

  // Bloco de script/código
  scriptBlock: {
    backgroundColor: '#0f0a1a',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#3d1f6e',
    overflow: 'hidden',
  },
  scriptHeader: {
    backgroundColor: '#1a0f2e',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#3d1f6e',
  },
  scriptHeaderText: {
    fontSize: 11,
    color: '#7a5fa0',
    fontWeight: '600',
  },
  scriptText: {
    fontFamily: 'monospace',
    fontSize: 12,
    color: '#7dd3fc',
    padding: 12,
    lineHeight: 20,
  },

  // Secção de exercícios
  exercisesSection: {
    marginTop: 16,
    backgroundColor: '#6b2fa011',
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: '#6b2fa033',
  },
  exercisesTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#8b45c5',
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  exerciseRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
    gap: 8,
  },
  exerciseBullet: {
    fontSize: 12,
    color: '#f5a623',
    marginTop: 2,
    fontWeight: '700',
  },
  exerciseText: {
    flex: 1,
    fontSize: 13,
    color: '#b89fd4',
    lineHeight: 20,
  },

  // Estado vazio
  emptyContainer: {
    alignItems: 'center',
    paddingTop: 60,
  },
  emptyText: {
    fontSize: 15,
    color: '#7a5fa0',
    textAlign: 'center',
  },
});