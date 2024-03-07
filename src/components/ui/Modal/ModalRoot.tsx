"use client"

import { useModalContext } from "@/app/context/ModalContext";
import { ReactNode, useContext } from "react";

export default function ModalRoot({ children }: { children: ReactNode }): ReactNode {

   const modal = useModalContext();

   return (
      <aside
         data-modal-active={modal?.modalActive}
         className="fixed z-50 items-center justify-center p-page-padding top-0 bottom-0 right-0 left-0 flex max-h-screen scroll-auto transition ease-in-out duration-200 data-[modal-active=false]:opacity-0 data-[modal-active=false]:pointer-events-none"
      >
         <div
            className="bg-black bg-opacity-65 fixed top-0 bottom-0 right-0 left-0"
            onClick={() => modal?.setModalActive(false)}
         ></div>

         {children}
      </aside>
   )
}