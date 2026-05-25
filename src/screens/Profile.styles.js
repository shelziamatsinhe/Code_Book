// ============================================================
// Styles: Profile.styles.js
// Descrição: Estilos separados da ProfileScreen
// Boas práticas: CSS sempre separado da lógica (View)
// ============================================================

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // Container principal
  container: {
    flex: 1,
    backgroundColor: '#0f0a1a',
  },

  // Header com avatar e nome
  header: {
    backgroundColor: '#4a1d6e',
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 32,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    alignItems: 'center',
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#8b45c5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 3,
    borderColor: '#ffffff30',
  },
  avatarText: {
    fontSize: 32,
  },
  studentName: {
    fontSize: 20,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 4,
  },
  studentNumber: {
    fontSize: 13,
    color: '#d4b8f0',
    marginBottom: 4,
  },
  studentCourse: {
    fontSize: 12,
    color: '#f5a623',
    fontWeight: '600',
    backgroundColor: '#f5a62320',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: 4,
  },

  // Conteúdo
  content: {
    flex: 1,
    padding: 16,
  },

  // Secção
  sectionTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#7a5fa0',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 10,
    marginTop: 8,
  },

  // Card de informação
  infoCard: {
    backgroundColor: '#1a0f2e',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#3d1f6e',
    marginBottom: 16,
    overflow: 'hidden',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#3d1f6e',
  },
  infoRowLast: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  infoIcon: {
    fontSize: 18,
    marginRight: 14,
  },
  infoContent: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 11,
    color: '#7a5fa0',
    fontWeight: '500',
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 15,
    color: '#f1e6ff',
    fontWeight: '600',
  },

  // Card de estatísticas
  statsCard: {
    backgroundColor: '#1a0f2e',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#3d1f6e',
    marginBottom: 16,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 16,
    borderRightWidth: 1,
    borderRightColor: '#3d1f6e',
  },
  statItemLast: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 16,
  },
  statValue: {
    fontSize: 24,
    fontWeight: '800',
    color: '#8b45c5',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 11,
    color: '#7a5fa0',
    fontWeight: '500',
    textAlign: 'center',
  },

  // Botão de ação
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a0f2e',
    borderRadius: 14,
    padding: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#3d1f6e',
    gap: 14,
  },
  actionButtonIcon: {
    fontSize: 20,
    width: 28,
    textAlign: 'center',
  },
  actionButtonText: {
    flex: 1,
    fontSize: 15,
    color: '#f1e6ff',
    fontWeight: '600',
  },
  actionButtonArrow: {
    fontSize: 14,
    color: '#7a5fa0',
  },

  // Botão logout
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ef444415',
    borderRadius: 14,
    padding: 16,
    marginTop: 8,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#ef444433',
    gap: 10,
  },
  logoutText: {
    fontSize: 15,
    color: '#ef4444',
    fontWeight: '700',
  },

  // Badge UJAC
  ujacBadge: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  ujacText: {
    fontSize: 12,
    color: '#3d1f6e',
    fontWeight: '600',
  },
});