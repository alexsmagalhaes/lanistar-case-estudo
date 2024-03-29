"use client"

import { ReactNode, useEffect, useState } from "react";
import Image, { StaticImageData } from 'next/image'
import usePersistedState from "@/hooks/usePersistedState";

// assets
import Language1 from '@/assets/icons/language-icon-2.png'
import Language2 from '@/assets/icons/language-icon-1.png'
import Language3 from '@/assets/icons/language-icon-3.png'
import Arrow from '@/assets/icons/arrow-top-icon.svg'

interface languagesProps {
   code: string
   icon: StaticImageData,
}

// avaliables languages
const languages: languagesProps[] = [
   {
      code: 'pt-br',
      icon: Language1,
   }, {
      code: 'en-us',
      icon: Language2,
   }, {
      code: 'es-es',
      icon: Language3,
   }
]

export default function DropDownLanguage(): ReactNode {
   const [show, setShow] = useState(false) // dropdown activation control
   const [language, setLanguage] = useState<languagesProps>(languages[0]) // set current language

   // get persisted language from a custom hook
   const [persistedLanguage, setPersistedLanguage] = usePersistedState<languagesProps>('language', language)

   // set up a site language with a chosen language previous
   useEffect(() => {
      setLanguage(persistedLanguage)
   }, [])

   // update a persisted chose the language in cookies
   useEffect(() => {
      setPersistedLanguage(language)
   }, [language])

   // toggle acvation dropdown
   const handleToggle = (): void => {
      show ? setShow(false) : setShow(true)
   }

   // general control function to set language and providers
   const handleLanguage = ({ code, icon }: languagesProps): void => {
      setLanguage({ code, icon })
   }

   return (
      <div className="relative flex gap-3">
         <button className="relative flex gap-3 items-center" onClick={handleToggle}>
            <Image
               className="min-w-6 h-6"
               src={language.icon}
               alt={language.code}
               width={24}
               height={24}
            />
            <Image
               className={`transition ease-in-out duration-200 ${show ? 'rotate-180' : 'rotate-0'}`}
               src={Arrow}
               alt="dropdown arrow"
               width={12}
            />
         </button>

         <div className={`flex gap-2 flex-col absolute bg-white py-3 px-3 rounded shadow-2xl shadow-indigo-950/20 z-[60] transition ease-in-out duration-200 top-[120%]
         ${show ? 'opacity-100 pointer-events-auto translate-y-0' :
               'opacity-0 pointer-events-none translate-y-2'}`}>

            {
               languages.filter(item => item.code !== language.code).map(({ code, icon }: languagesProps, index: number) => {
                  return (
                     <button
                        key={index}
                        className="w-full"
                        onClick={() => {
                           handleLanguage({ code, icon })
                           handleToggle()
                        }}
                     >
                        <Image
                           className="min-w-6 h-6 cursor-pointer"
                           src={icon}
                           alt={code}
                           width={24}
                           height={24}
                        />
                     </button>
                  )
               })
            }
         </div>
      </div>
   )
}