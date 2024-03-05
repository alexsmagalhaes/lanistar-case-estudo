"use client"

import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type Response<T> = [
  T,
  Dispatch<SetStateAction<T>>,
];

function usePersistedState<T>(key: string, initialState: T): Response<T> {
  const [state, setState] = useState(() => {

    if (typeof window === undefined) return initialState;

    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    if (typeof window !== undefined)
      localStorage.setItem(key, JSON.stringify(state));

  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;