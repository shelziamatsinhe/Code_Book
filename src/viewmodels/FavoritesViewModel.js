// ============================================================
// ViewModel: FavoritesViewModel.js
// Camada: ViewModel (MVVM)
// Descrição: Lógica de favoritos — guardar e remover guias
//            Usa AsyncStorage para persistir os favoritos
//            mesmo após fechar a app
// ============================================================

import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Chave usada para guardar no AsyncStorage
const FAVORITES_KEY = '@codebook_favorites';

export const useFavoritesViewModel = () => {
  // Lista de guias favoritos
  const [favorites, setFavorites] = useState([]);

  // Controla o carregamento inicial
  const [isLoading, setIsLoading] = useState(true);

  // Carrega os favoritos guardados ao iniciar
  useEffect(() => {
    loadFavorites();
  }, []);

  // Carrega favoritos do AsyncStorage
  const loadFavorites = async () => {
    try {
      const stored = await AsyncStorage.getItem(FAVORITES_KEY);
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Erro ao carregar favoritos:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Guarda favoritos no AsyncStorage
  const saveFavorites = async (newFavorites) => {
    try {
      await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
    } catch (error) {
      console.error('Erro ao guardar favoritos:', error);
    }
  };

  // Adiciona ou remove um guia dos favoritos
  const toggleFavorite = useCallback((guide, course) => {
    setFavorites((prev) => {
      // Verifica se o guia já está nos favoritos
      const exists = prev.some((f) => f.guide.id === guide.id && f.course.code === course.code);

      let updated;
      if (exists) {
        // Remove dos favoritos
        updated = prev.filter((f) => !(f.guide.id === guide.id && f.course.code === course.code));
      } else {
        // Adiciona aos favoritos com info da cadeira
        updated = [...prev, { guide, course }];
      }

      // Persiste no AsyncStorage
      saveFavorites(updated);
      return updated;
    });
  }, []);

  // Verifica se um guia está nos favoritos
  const isFavorite = useCallback((guideId, courseCode) => {
    return favorites.some((f) => f.guide.id === guideId && f.course.code === courseCode);
  }, [favorites]);

  return {
    favorites,
    isLoading,
    toggleFavorite,
    isFavorite,
  };
};