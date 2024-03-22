import { ReactNode } from "react";
import Image, { StaticImageData } from 'next/image'

export interface CardDifferencesProps {
   image: StaticImageData,
   text: string
}

export default function CardDifferences({ image, text }: CardDifferencesProps): ReactNode {
   return (
      <div className="flex items-center gap-8 max-w-[17.75rem]">
         <div className="p-3 rounded-lg bg-gradient-to-tr from-[#55D4F0] to-[#D0F6EE] min-w-[4.5rem] min-h-[4.5rem] flex items-center justify-center">
            <Image src={image} alt={text} width={48} />
         </div>
         <span className="text-neutral-gray-300 font-semibold text-base/tight uppercase tracking-wider">
            {text}
         </span>
      </div>
   )
}