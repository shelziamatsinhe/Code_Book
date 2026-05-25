// ============================================================
// Styles: Favorites.styles.js
// Descrição: Estilos separados da FavoritesScreen
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
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#ffffff',
    letterSpacing: -0.5,
  },
  headerCount: {
    fontSize: 12,
    color: '#f5a623',
    fontWeight: '700',
    backgroundColor: '#f5a62320',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    overflow: 'hidden',
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#d4b8f0',
  },

  // Lista
  listContent: {
    padding: 16,
    paddingBottom: 32,
  },

  // Card de favorito
  card: {
    backgroundColor: '#1a0f2e',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#3d1f6e',
    marginBottom: 12,
    elevation: 3,
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  cardInfo: {
    flex: 1,
    marginRight: 10,
  },
  courseBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 8,
  },
  courseCode: {
    fontSize: 11,
    fontWeight: '700',
    color: '#8b45c5',
    backgroundColor: '#6b2fa015',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#6b2fa033',
  },
  courseName: {
    fontSize: 11,
    color: '#7a5fa0',
    fontWeight: '500',
  },
  guideTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#f1e6ff',
    lineHeight: 21,
    marginBottom: 6,
  },
  teacherRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  teacherLabel: {
    fontSize: 11,
    color: '#7a5fa0',
  },
  teacherName: {
    fontSize: 11,
    color: '#f5a623',
    fontWeight: '600',
  },

  // Botão remover favorito
  removeButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#ef444420',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ef444433',
  },
  removeButtonText: {
    fontSize: 16,
  },

  // Footer do card
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#3d1f6e',
    paddingTop: 10,
    marginTop: 4,
  },
  stepsCount: {
    fontSize: 12,
    color: '#7a5fa0',
    fontWeight: '500',
  },
  openButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6b2fa020',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 4,
    borderWidth: 1,
    borderColor: '#6b2fa033',
  },
  openButtonText: {
    fontSize: 12,
    color: '#8b45c5',
    fontWeight: '700',
  },

  // Estado vazio
  emptyContainer: {
    alignItems: 'center',
    paddingTop: 80,
    paddingHorizontal: 30,
  },
  emptyEmoji: {
    fontSize: 56,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#f1e6ff',
    marginBottom: 8,
    textAlign: 'center',
  },
  emptyText: {
    fontSize: 14,
    color: '#7a5fa0',
    textAlign: 'center',
    lineHeight: 21,
  },
});