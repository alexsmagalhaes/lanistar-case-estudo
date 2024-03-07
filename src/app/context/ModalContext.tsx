"use client"

import { createContext, ReactNode, useContext } from "react";
import useModal from "@/hooks/useModal";

type ContextType = {
   modalActive: boolean;
   setModalActive: (active: boolean) => void;
};

const ModalContext = createContext<ContextType | undefined>(undefined);

export function useModalContext() {
   const context = useContext(ModalContext);
   
   return context;
}

export function ModalContextProvider({ children }: { children: ReactNode }) {
   const { modalActive, setModalActive } = useModal();

   const contextValue: ContextType = {
      modalActive,
      setModalActive
   };

   return (
      <ModalContext.Provider value={contextValue}>
         {children}
      </ModalContext.Provider>
   );
}
