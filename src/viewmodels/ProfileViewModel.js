// ============================================================
// ViewModel: ProfileViewModel.js
// Camada: ViewModel (MVVM)
// Descrição: Lógica do perfil do estudante
// ============================================================

import { useFavoritesViewModel } from './FavoritesViewModel';



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
    guides: 0,    // Total de guias disponíveis
  };

  return {
    student: null,
    stats,
    getInitials,
  };
};