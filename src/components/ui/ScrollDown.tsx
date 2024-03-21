"use client"

import Image from 'next/image'
import { ReactNode } from 'react';

//assets
import ArrowIcon from "@/assets/icons/arrow-down.svg";
import { useLenis } from "@studio-freight/react-lenis";


export default function ScrollDown(): ReactNode {
   const lenis = useLenis((item) => {
      return item;
   })

   const handleScrollClick = () => {
      lenis?.scrollTo(1000)
   };

   return (
      <button className='flex items-center justify-center w-14 h-14 rounded-full border-brand-blue-default border-2 border-opacity-30 ease-in-out duration-200 hover:border-opacity-100 hover:pt-1'
         onClick={() => handleScrollClick()}>
         <Image
            src={ArrowIcon}
            alt='scroll down'
            width={16}
         />
      </button>
   )
}
