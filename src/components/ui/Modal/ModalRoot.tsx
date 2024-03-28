"use client"

import { useModalContext } from "@/app/context/ModalContext";
import { ReactNode } from "react";

export default function ModalRoot({ children }: { children: ReactNode }): ReactNode {

   const { modalActive, hideModal } = useModalContext();

   return (
      <aside
         data-modal-active={modalActive}
         className="fixed z-50 items-end @laptop:items-center justify-center @laptop:p-page-padding top-0 bottom-0 right-0 left-0 flex max-h-dvh scroll-auto transition ease-in-out duration-200 data-[modal-active=false]:opacity-0 data-[modal-active=false]:pointer-events-none"
      >
         <div
            className="bg-black bg-opacity-65 fixed top-0 bottom-0 right-0 left-0"
            onClick={() => hideModal()}
         ></div>

         {children}
      </aside>
   )
}