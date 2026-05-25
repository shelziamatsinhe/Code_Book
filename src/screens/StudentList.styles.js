// ============================================================
// Styles: StudentList.styles.js
// Descrição: Estilos separados da StudentListScreen
// ============================================================

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0a1a',
  },
  header: {
    backgroundColor: '#4a1d6e',
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  backButton: {
    marginBottom: 14,
  },
  backText: {
    color: '#d4b8f0',
    fontSize: 14,
    fontWeight: '600',
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
  apiBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#22c55e15',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#22c55e33',
    gap: 6,
  },
  apiBadgeText: {
    fontSize: 11,
    color: '#22c55e',
    fontWeight: '700',
  },
  listContent: {
    padding: 16,
    paddingBottom: 32,
  },
  card: {
    backgroundColor: '#1a0f2e',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#3d1f6e',
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#6b2fa0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#ffffff',
  },
  cardInfo: {
    flex: 1,
  },
  studentName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#f1e6ff',
    marginBottom: 4,
  },
  studentNumber: {
    fontSize: 12,
    color: '#7a5fa0',
    marginBottom: 2,
  },
  studentEmail: {
    fontSize: 12,
    color: '#7a5fa0',
  },
  courseBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#6b2fa015',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginTop: 6,
    borderWidth: 1,
    borderColor: '#6b2fa033',
    overflow: 'hidden',
  },
  courseBadgeText: {
    fontSize: 11,
    color: '#8b45c5',
    fontWeight: '600',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  loadingText: {
    fontSize: 14,
    color: '#7a5fa0',
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    gap: 12,
  },
  errorEmoji: {
    fontSize: 48,
  },
  errorTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#f1e6ff',
    textAlign: 'center',
  },
  errorText: {
    fontSize: 14,
    color: '#7a5fa0',
    textAlign: 'center',
  },
  retryButton: {
    backgroundColor: '#6b2fa0',
    borderRadius: 12,
    paddingHorizontal: 24,
    paddingVertical: 12,
    marginTop: 8,
  },
  retryButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
  },
});