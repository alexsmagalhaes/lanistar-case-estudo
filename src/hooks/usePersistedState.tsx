'use client'

import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type Response<T> = [
  T,
  Dispatch<SetStateAction<T>>,
];

function usePersistedState<T>(key: string, initialState: T): Response<T> {
  // Função para obter o valor persistido do localStorage
  const getStoredValue = (): T | null => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
  };

  // Estado inicial é o valor persistido ou o valor inicial fornecido
  const [state, setState] = useState<T>(() => {
    const storedValue = getStoredValue();
    return storedValue !== null ? storedValue : initialState;
  });

  // Atualizar o localStorage sempre que o estado for alterado
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
