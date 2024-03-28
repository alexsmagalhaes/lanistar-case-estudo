import gsap from "gsap";
import { useEffect, useRef } from "react";

interface HamburguerButtonProps {
   onClick: () => void,
   actived: boolean
}

export default function HamburguerButton({ onClick, actived }: HamburguerButtonProps): JSX.Element {

   const line1Ref = useRef(null);
   const line2Ref = useRef(null);
   const line3Ref = useRef(null);

   useEffect(() => {
      if (window.innerWidth < 1024) {
         const line1 = line1Ref.current;
         const line2 = line2Ref.current;
         const line3 = line3Ref.current;

         if (actived) {
            gsap.to(line1, {
               duration: 0.3,
               rotate: 45,
               top: '50%'
            });
            gsap.to(line2, {
               duration: 0.2,
               opacity: 0
            });
            gsap.to(line3, {
               duration: 0.3,
               rotate: -45,
               top: '50%',
               width: '100%',
            });
         } else {
            gsap.to(line1, {
               duration: 0.3,
               rotate: 0,
               top: '0'
            });
            gsap.to(line3, {
               duration: 0.3,
               rotate: 0,
               top: '95%',
               width: '80%',
               right: '0'
            });
            gsap.to(line2, {
               duration: 0.3,
               opacity: 1,
            });
         }
      }
   }, [actived]);

   return (
      <button
         onClick={() => onClick()}
         className="@laptop:hidden flex flex-col justify-center items-center w-8 h-5 gap-2 relative mx-auto z-10"
      >
         <div
            ref={line1Ref}
            className="w-8 h-[1.5px] bg-brand-blue-default rounded absolute"
         ></div>
         <div
            ref={line2Ref}
            className="w-8 h-[1.5px] bg-brand-blue-default rounded"
         ></div>
         <div
            ref={line3Ref}
            className="w-8 h-[1.5px] bg-brand-blue-default rounded ml-auto absolute"
         ></div>
      </button>
   )
}
