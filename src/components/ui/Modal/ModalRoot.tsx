"use client"

import { ReactNode } from "react";
import useScrollBodyLock from "@/hooks/useScrollBodyLock";

export default function ModalRoot({children}: {children: ReactNode}): ReactNode {
   const { enableScroll } = useScrollBodyLock();

   return (
      <aside className="fixed z-50 items-center justify-center p-page-padding top-0 bottom-0 right-0 left-0 flex max-h-screen scroll-auto">
         <div
            className="bg-black bg-opacity-65 fixed top-0 bottom-0 right-0 left-0"
            onClick={() => enableScroll()}
         ></div>

         {children}
      </aside>
   )
}