import { ReactNode } from "react";
import Image from 'next/image'

// assets
import CheckIcon from '@/assets/icons/check-icon.svg'

export interface CheckItemProps {
   text: string
}

export default function CheckItem({ text }: CheckItemProps): ReactNode {
   return (
      <div className="flex items-center justify-center text-lg/snug font-normal gap-6 text-neutral-gray-300">
         <Image src={CheckIcon} alt={text} width={24} />
         <span dangerouslySetInnerHTML={{ __html: text }}></span>
      </div>
   )
}