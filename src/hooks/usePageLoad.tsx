import { ReactNode, useEffect, useState } from 'react';

export default function usePageLoaded(): boolean {
   const [pageLoaded, setPageLoaded] = useState<boolean>(false);

   useEffect(() => {
      const handleLoad = () => {
         setPageLoaded(true);
      };

      if (document.readyState === 'complete') {
         setPageLoaded(true);
      } else {
         window.addEventListener('load', handleLoad);

         return () => {
            window.removeEventListener('load', handleLoad);
         };
      }
   }, []);

   return pageLoaded;
}
