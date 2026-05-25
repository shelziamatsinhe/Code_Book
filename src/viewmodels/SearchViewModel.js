// ============================================================
// ViewModel: SearchViewModel.js
// Camada: ViewModel (MVVM)
// Descrição: Lógica de pesquisa de cadeiras
//            Separa a lógica de negócio da View
// ============================================================

import { useState, useCallback } from 'react';
import { MOCK_COURSES } from '../models/Course';

export const useSearchViewModel = () => {
  // Estado da query de pesquisa
  const [query, setQuery] = useState('');

  // Estado dos resultados filtrados
  const [results, setResults] = useState([]);

  // Controla se o utilizador já pesquisou algo
  const [hasSearched, setHasSearched] = useState(false);

  // Função principal de pesquisa
  // Filtra por nome, código e docente
  const search = useCallback((text) => {
    setQuery(text);

    // Se o campo estiver vazio, limpa os resultados
    if (!text.trim()) {
      setResults([]);
      setHasSearched(false);
      return;
    }

    setHasSearched(true);

    // Pesquisa insensível a maiúsculas/minúsculas
    const q = text.toLowerCase();

    const filtered = MOCK_COURSES.filter(
      (course) =>
        // Pesquisa por nome da cadeira
        course.name.toLowerCase().includes(q) ||
        // Pesquisa por código
        course.code.toLowerCase().includes(q) ||
        // Pesquisa por nome do docente
        course.teacher.toLowerCase().includes(q),
    );

    setResults(filtered);
  }, []);

  // Limpa a pesquisa
  const clearSearch = useCallback(() => {
    setQuery('');
    setResults([]);
    setHasSearched(false);
  }, []);

  return {
    query,
    results,
    hasSearched,
    search,
    clearSearch,
  };
};