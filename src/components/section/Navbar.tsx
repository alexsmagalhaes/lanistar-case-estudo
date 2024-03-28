"use client"

import { ReactNode, useEffect, useRef, useState } from "react";
import ContainerGrid from "@/components/ui/ContainerGrid";
import Image from 'next/image'
import Link from 'next/link'
import Button from "../ui/Button";
import { ModalActiveWrap } from "@/app/context/ModalContext";
import HamburguerButton from "../ui/HamburguerButton";
import DropDownLanguage from "../ui/DropDownLanguage";
import { gsap } from "gsap";

//assets
import Logo from '@/assets/brand/lanistar-logo.svg'

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
   const [menuActived, setMenuActived] = useState(false)
   const menuRef = useRef(null)
   const menuContentRef = useRef(null)
   const navbarElemRef = useRef(null)

   useEffect(() => {
      if (window.innerWidth < 1024) {
         const menu = menuRef?.current
         const menuContent = menuContentRef?.current
         const tl = gsap.timeline()

         if (menuActived) {
            tl.to(menu, {
               y: 0,
               duration: .5,
            })
               .to(menuContent, {
                  opacity: 100,
                  duration: .5,
               }, "-=0.1")
         } else {
            tl.to(menuContent, {
               opacity: 0,
               duration: .2,
               ease: "ease",
            })
               .to(menu, {
                  y: - window.innerHeight - 100,
                  duration: .5,
                  ease: "ease",
               }, "-=0.025")
         }
      }
   }, [menuActived, menuRef]);

   const toggleMenuClick = () => {
      setMenuActived(!menuActived)
   }

   return (
      <nav
         ref={navbarElemRef}
         className="py-4 @laptop:py-6 max-h-24 bg-white bg-opacity-90 fixed top-[-1px] w-full z-50 backdrop-blur"
      >
         <div className="border-neutral-gray-600 border border-opacity-30 absolute z-50 w-full bottom-0"></div>

         <ContainerGrid className="flex items-center justify-between gap-6">
            <Link href='/' className="relative z-50 hover:opacity-85 transition duration-300 ease-in-out">
               <Image
                  className="@laptop:w-[11rem]"
                  src={Logo}
                  alt={"logo lenistar"}
                  width={146}
                  priority
               />
            </Link>

            <div className="flex justify-between items-center gap-6 @tablet:gap-20">
               <div
                  ref={menuRef}
                  data-lenis-prevent
                  className="@laptop:relative absolute w-screen @laptop:w-auto h-screen @laptop:h-auto max-h-screen overflow-auto top-0 right-0 left-0 bottom-0 bg-white @laptop:bg-transparent pt-[8rem] @laptop:pt-0 pb-16 @laptop:pb-0 @laptop:translate-y-0 -translate-y-[110vh]"
               >

                  <div
                     ref={menuContentRef}
                     className="flex flex-col items-center gap-14 opacity-0 @laptop:opacity-100"
                  >
                     <div className="max-w-[7.5rem] @laptop:max-w-none flex @laptop:gap-14 mr-2 @laptop:flex-row flex-col gap-6">
                        {
                           pagesRef.map(({ text, path }: pagesRefProps, index: number) => {
                              return (
                                 <Link
                                    className="uppercase @laptop:text-base text-neutral-gray-300 font-normal text-2xl @laptop:font-medium transition duration-300 ease-in-out hover:opacity-85 p-3 @laptop:p-0 flex justify-center"
                                    key={index}
                                    href={path}
                                 >
                                    {text}
                                 </Link>
                              )
                           })
                        }
                     </div>

                     <div className="border-neutral-gray-600 border border-opacity-30 w-3/4 @laptop:hidden"></div>

                     <div className="visible @laptop:hidden">
                        <ModalActiveWrap>
                           <Button.Root
                              type="ghost"
                              className="text-2xl text-neutral-gray-300 font-normal flex-col">
                              <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <rect x="1" y="1" width="30" height="22" rx="1" stroke="currentColor" strokeWidth="2" />
                                 <rect x="4.36353" y="4.36353" width="5.81818" height="4.36364" rx="2" fill="currentColor" />
                              </svg>
                              PRE-REGISTER NOW
                           </Button.Root>
                        </ModalActiveWrap>
                     </div>
                  </div>

               </div>

               <DropDownLanguage />

               <div className="hidden @laptop:block">
                  <ModalActiveWrap>
                     <Button.Root type="ghost">
                        <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <rect x="1" y="1" width="30" height="22" rx="1" stroke="currentColor" strokeWidth="2" />
                           <rect x="4.36353" y="4.36353" width="5.81818" height="4.36364" rx="2" fill="currentColor" />
                        </svg>
                        PRE-REGISTER NOW
                     </Button.Root>
                  </ModalActiveWrap>
               </div>

               <HamburguerButton
                  actived={menuActived}
                  onClick={() => toggleMenuClick()}
               />
            </div>
         </ContainerGrid>
      </nav>
   )
}