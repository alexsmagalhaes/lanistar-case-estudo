import { ReactNode } from "react";
import ContainerGrid from "@/components/ui/ContainerGrid";
import Image from 'next/image'
import Link from 'next/link'
import Button from "../ui/Button";

//assets
import Logo from '@/assets/brand/lanistar-logo.svg'
import DropDownLanguage from "../ui/DropDownLanguage";

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
      <nav className="py-6 max-h-24 bg-white bg-opacity-90 sticky top-0 border-b-neutral-gray-600 border-b border-opacity-30 z-40 backdrop-blur">
         <ContainerGrid className="flex items-center justify-between">
            <Link href='/' className="hover:opacity-85 transition duration-300 ease-in-out">
               <Image src={Logo} alt={"logo lenistar"} width={176} priority />
            </Link>

            <div className="flex gap-24">
               <div className="flex gap-14 mr-2">
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

               <Button.Root type="ghost">
                  <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <rect x="1" y="1" width="30" height="22" rx="1" stroke="currentColor" strokeWidth="2" />
                     <rect x="4.36353" y="4.36353" width="5.81818" height="4.36364" rx="2" fill="currentColor" />
                  </svg>
                  Botão de ação
               </Button.Root>
            </div>
         </ContainerGrid>
      </nav>
   )
}