import { ReactNode } from "react";
import ContainerGrid from "@/components/ui/ContainerGrid";
import Image from 'next/image'
import Link from 'next/link'

//assets
import Logo from '@/assets/brand/lanistar-logo.svg'
import DropDownLanguage from "./DropDownLanguage";

interface pagesRefProps {
   text: string,
   path: string
}

const pagesRef = [
   {
      text: 'Security',
      path: '#'
   }, {
      text: 'Features',
      path: '#'
   }, {
      text: 'Fundamentals',
      path: '#'
   }
]

export default function Navbar(): ReactNode {
   return (
      <nav className="py-6 max-h-24 bg-white bg-opacity-90 sticky top-0 border-b-neutral-gray-600 border-b border-opacity-30 backdrop-blur">
         <ContainerGrid className="flex items-center justify-between">
            <Link href='/' className="hover:opacity-85 transition duration-300 ease-in-out">
               <Image src={Logo} alt={"logo lenistar"} width={176} priority/>
            </Link>

            <div className="flex gap-20">
               <div className="flex gap-14">
                  {
                     pagesRef.map(({ text, path }: pagesRefProps, index: number) => {
                        return (
                           <Link
                              className="uppercase text-base text-neutral-gray-300 font-medium transition duration-300 ease-in-out hover:opacity-85"
                              key={index}
                              href={path}
                           >
                              {text}
                           </Link>
                        )
                     })
                  }
               </div>

               <DropDownLanguage />
            </div>
         </ContainerGrid>
      </nav>
   )
}