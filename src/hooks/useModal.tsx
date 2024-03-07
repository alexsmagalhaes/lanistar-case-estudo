"use client"

import { useEffect, useState } from "react";
import useScrollBodyLock from "./useScrollBodyLock";

export default function useModal() {
   const [modalActive, setModalActive] = useState(false);
   const [isClient, setIsClient] = useState(false);
   const { disableScroll, enableScroll } = useScrollBodyLock()

   useEffect(() => {
      setIsClient(true);
   }, []);

   useEffect(() => {
      if (isClient) {
         modalActive ? disableScroll() : enableScroll()
         //He willbe a control time modal logic and action
      }
   }, [isClient, modalActive]);

   // const disableModalActive = () => {setModalActive(true)};
   // const enableModalActive = () => setModalActive(false);
   // const toggleModalActive = () => setModalActive(!modalActive);

   return { modalActive, setModalActive };
}


