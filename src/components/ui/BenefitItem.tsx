import { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

export interface BenefitItemProps {
   icon: StaticImageData,
   text: string
}

export default function BenefitItem({ icon, text }: BenefitItemProps): ReactNode {
   return (
      <div className="flex gap-4 items-center">
         <Image
            src={icon}
            alt={text}
            width={24}
            height={24}
         />
         <span className="text-lg/snug font-normal text-neutral-gray-300">
            {text}
         </span>
      </div>
   )
}