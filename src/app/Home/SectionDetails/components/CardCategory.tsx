import { ReactNode } from "react";
import Image, { StaticImageData } from 'next/image'

interface CardCategoryProps {
   image: StaticImageData,
}

export default function CardCategory({ image }: CardCategoryProps): ReactNode {
   return (
      <div className="rounded-md bg-white shadow-xl shadow-slate-100 py-5 px-10 flex items-center justify-center max-w-56 gap-4 text-[#579ECE]">
         <Image
            src={image}
            alt="card categore"
            width={32}
         />
         <span className="uppercase font-medium text-sm/tight">
            LANISTAR
            POLYMORPHIC
         </span>
      </div>
   )
}