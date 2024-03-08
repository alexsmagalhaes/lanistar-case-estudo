import { ReactNode, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

interface ColorSelectorProps {
   color: string,
   colorName: string
}

export default function ColorSelector({ color, colorName }: ColorSelectorProps): ReactNode {

   const defaultStyle = 'w-[1.625rem] h-[1.625rem] rounded-full bg-slate-500'
   const mixedStyle = twMerge(defaultStyle, color)

   return (
      <div className="flex flex-col items-center">
         <div className="flex items-center justify-center rounded-full border-[1.5px] border-[#F1F1FD] mb-2 h-9 w-9">
            <div className={mixedStyle}></div>
         </div>
         <span className="text-neutral-gray-400 font-medium text-base/none uppercase will-change-auto">
            {colorName}
         </span>
      </div>
   )
}