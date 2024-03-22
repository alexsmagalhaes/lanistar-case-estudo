"use client"

import { useLenis } from "@studio-freight/react-lenis";
import { useEffect, useState } from "react";

export default function useScrollBodyLock() {
   const [lockScroll, setLockScroll] = useState(false);
   const [isClient, setIsClient] = useState(false);

   const lenis = useLenis((item) => {
      return item;
   })

   useEffect(() => {
      setIsClient(true);
   }, []);

   useEffect(() => {
      if (isClient) {
         lockScroll ? lenis?.stop() : lenis?.start()
      }
   }, [isClient, lockScroll]);

   const disableScroll = () => setLockScroll(true);
   const enableScroll = () => setLockScroll(false);
   const toggleScrollLock = () => setLockScroll(!lockScroll);

   return {
      lockScroll,
      disableScroll,
      enableScroll,
      toggleScrollLock
   };
}


