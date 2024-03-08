import { ReactNode, RefObject, useRef } from "react";
import Image from 'next/image'

//assets
import ArrowIcon from '@/assets/icons/arrow-slide-icon.svg'

interface ArrowButtonProps {
   reverse?: boolean,
   // ref: RefObject<HTMLButtonElement>
}

export default function ArrowButton({ reverse }: ArrowButtonProps): ReactNode {

   return (
      <button
         // ref={ref}
         className={`pointer-events-auto transition duration-300 ease-in-out bg-brand-blue-default hover:bg-brand-blue-dark rounded-full w-11 h-11 flex items-center justify-center ${reverse && 'rotate-180'}`}
      >
         <Image
            className="w-auto"
            src={ArrowIcon}
            alt="arrow slide"
            width={13}
         />
      </button>
   )
}