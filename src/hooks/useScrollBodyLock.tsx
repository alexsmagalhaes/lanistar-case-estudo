import { useEffect, useState } from "react";

export default function useScrollBodyLock() {
   const [lockScroll, setLockScroll] = useState(false);
   const [isClient, setIsClient] = useState(false);

   useEffect(() => {
      setIsClient(true);
   }, []);

   useEffect(() => {
      if (isClient) {
         document.body.style.overflowY = lockScroll ? 'hidden' : 'auto';
      }
   }, [isClient, lockScroll]);

   const disableScroll = () => setLockScroll(true);
   const enableScroll = () => setLockScroll(false);
   const toggleScrollLock = () => setLockScroll(!lockScroll);

   return {
      disableScroll,
      enableScroll,
      toggleScrollLock
   };
}


