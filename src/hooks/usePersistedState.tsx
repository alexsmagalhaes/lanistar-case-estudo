'use client'

import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type Response<T> = [
  T,
  Dispatch<SetStateAction<T>>,
];

function usePersistedState<T>(key: string, initialState: T): Response<T> {
  const isClient = typeof window !== undefined;

  const [state, setState] = useState(() => {

    if (isClient) {
      const storageValue = localStorage.getItem(key);

      if (storageValue) {
        return JSON.parse(storageValue);
      } else {
        return initialState;
      }
    }
    return initialState;

  });

  useEffect(() => {
    if (isClient)
      localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];

}

export default usePersistedState;