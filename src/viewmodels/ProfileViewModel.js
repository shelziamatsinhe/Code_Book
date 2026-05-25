// ============================================================
// ViewModel: ProfileViewModel.js
// Camada: ViewModel (MVVM)
// Descrição: Lógica do perfil do estudante
//            Dados mock — na Fase 3 virão do Firebase Auth
// ============================================================

import { useFavoritesViewModel } from './FavoritesViewModel';

// Dados mock do estudante logado
// Na Fase 3 estes dados virão do Firebase Authentication
const MOCK_STUDENT = {
  name: 'Shelzia Matsinhe',
  number: '2023001',
  course: 'Engenharia Informática',
  year: '2º Ano',
  email: 'shelzia@ujac.ac.mz',
  institution: 'UJAC',
};

export const useProfileViewModel = () => {
  // Busca os favoritos para mostrar estatísticas
  const { favorites } = useFavoritesViewModel();

  // Retorna as iniciais do nome para o avatar
  const getInitials = (name) => {
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
    courses: 4,   // Total de cadeiras disponíveis
    guides: 6,    // Total de guias disponíveis
  };

  return {
    student: MOCK_STUDENT,
    stats,
    getInitials,
  };
};