"use client"

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import useScrollBodyLock from "@/hooks/useScrollBodyLock";

type ContextType = {
   modalActive: boolean;
   showModal: () => void;
   hideModal: () => void;
   toggleModal: () => void;
   disableScroll: () => void,
   enableScroll: () => void,
   toggleScrollLock: () => void
};

const ModalContext = createContext<ContextType | undefined>(undefined);

export function ModalContextProvider({ children }: { children: ReactNode }) {
   const [modalActive, setModalActive] = useState(false);
   const { disableScroll, enableScroll, toggleScrollLock } = useScrollBodyLock();

   useEffect(() => {
      modalActive ? disableScroll() : enableScroll();
   }, [modalActive, disableScroll, enableScroll]);

   const showModal = () => setModalActive(true);
   const hideModal = () => setModalActive(false);
   const toggleModal = () => setModalActive(!modalActive);

   const contextValue = {
      modalActive,
      showModal,
      hideModal,
      toggleModal,
      disableScroll,
      enableScroll,
      toggleScrollLock
   };

   return (
      <ModalContext.Provider value={contextValue}>
         {children}
      </ModalContext.Provider>
   );
}

export function useModalContext() {
   const context = useContext(ModalContext);
   if (!context) {
      throw new Error("useModalContext must be used within a ModalContextProvider");
   }
   return context;
}

export function ModalActiveWrap({ children }: { children: ReactNode }) {
   const { showModal } = useModalContext()

   return (
      <div onClick={() => showModal()}>
         {children}
      </div>
   )
}
