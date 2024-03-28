import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import Image from 'next/image'
import { twMerge } from "tailwind-merge";

export interface FlowItemProps {
   icon: StaticImageData,
   title: string,
   text: string,
   className?: string
}

export default function FlowItem({ icon, title, text, className }: FlowItemProps): ReactNode {
   const classDefault = 'flex justify-start items-start flex-col'
   const mergedClasses = twMerge(classDefault, className)

   return (
      <div className={mergedClasses}>
         <Image
            className="mb-4 @laptop:mb-8"
            src={icon}
            alt={text}
            width={42}
         />
         <h3 className="mb-4 uppercase text-white text-lg/none">
            {title}
         </h3>
         <p className="text-neutral-gray-500 text-base font-normal">
            {text}
         </p>
      </div>
   )
}