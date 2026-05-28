// src/context/FavoritesContext.js
// Contexto global para favoritos — partilhado entre todos os ecras
import React, {createContext, useContext, useState, useEffect, useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_KEY = '@codebook_favorites';
const FavoritesContext = createContext(null);

export const FavoritesProvider = ({children}) => {
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const stored = await AsyncStorage.getItem(FAVORITES_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        const valid = parsed.filter(
          f => f && f.guide && f.guide.id && f.course && f.course.code,
        );
        setFavorites(valid);
      }
    } catch (e) {
      console.error('Erro favoritos:', e);
    } finally {
      setIsLoading(false);
    }
  };

  const saveFavorites = async list => {
    try {
      await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(list));
    } catch (e) {
      console.error('Erro guardar favoritos:', e);
    }
  };

  const toggleFavorite = useCallback((guide, course) => {
    if (!guide?.id || !course?.code) return;
    setFavorites(prev => {
      const exists = prev.some(
        f => f.guide.id === guide.id && f.course.code === course.code,
      );
      const updated = exists
        ? prev.filter(f => !(f.guide.id === guide.id && f.course.code === course.code))
        : [...prev, {guide, course}];
      saveFavorites(updated);
      return updated;
    });
  }, []);

  const isFavorite = useCallback(
    (guideId, courseCode) => {
      if (courseCode) {
        return favorites.some(f => f.guide.id === guideId && f.course.code === courseCode);
      }
      return favorites.some(f => f.guide.id === guideId);
    },
    [favorites],
  );

  return (
    <FavoritesContext.Provider value={{favorites, isLoading, toggleFavorite, isFavorite}}>
      {children}
    </FavoritesContext.Provider>
  );
};

// Hook que substitui o useFavoritesViewModel em todos os ecras
export const useFavoritesViewModel = () => {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error('useFavoritesViewModel deve ser usado dentro de FavoritesProvider');
  return ctx;
};