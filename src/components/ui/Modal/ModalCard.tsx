"use client"

import { ReactNode } from "react";
import Image from "next/image"
import { useModalContext } from "@/app/context/ModalContext";
import ModalForm from "./ModalForm";

//assets
import CheckIcon from '@/assets/icons/check-icon.svg'
import CloseIcon from '@/assets/icons/close-icon.svg'
import WorldIcon from '@/assets/icons/word-icon.svg'
import BgCard from '@/assets/card-modal-phrases.png'
import CardShadow from '@/assets/card-modal-shadow.png'
import CardImage from '@/assets/card-modal.png'

export function ModalCard(): ReactNode {
   const { modalActive, hideModal } = useModalContext();

   return (
      <div
         data-modal-active={modalActive}
         className="bg-white max-w-[62.5rem] w-full relative z-10 transition ease-in-out duration-200 rounded-t-lg @laptop:rounded-lg flex overflow-hidden data-[modal-active=false]:translate-y-5 max-h-dvh scroll-auto"
      >
         <div
            className="hidden bg-brand-pink-default w-full max-w-96 @laptop:flex items-center justify-center max-h-screen overflow-auto"
         >
            <div className="flex flex-col items-center gap-8 mt-16">
               <div className="relative flex justify-end z-10 -right-8">
                  <Image
                     className="relative z-10"
                     src={CardImage}
                     alt="card image"
                     width={372}
                  />
                  <Image
                     className="absolute bottom-[-6px] mix-blend-multiply right-[10%]"
                     src={CardShadow}
                     alt="card shadow"
                     width={430}
                  />
               </div>
               <span className=" relative z-20 uppercase text-white rounded-s py-2 px-4 text-base/snug bg-brand-pink-default font-medium">
                  BE UNTOUCHABLE
               </span>
            </div>
            <Image
               className="absolute max-w-[70%]"
               src={BgCard}
               alt="close modal"
               width={314}
            />

         </div>
         <div
            data-lenis-prevent
            data-modal-active={modalActive}
            className="px-6 @laptop:px-16 pt-14 @laptop:pt-12 pb-16 @laptop:pb-24 transition ease-in-out duration-200 text-neutral-gray-400 relative w-full data-[modal-active=false]:translate-y-4 data-[modal-active=false]:opacity-0 max-h-screen overflow-auto"
         >
            <button
               className="absolute top-4 right-4 @laptop:top-9 @laptop:right-9 hover:opacity-85 transition duration-200 ease-in-out"
               onClick={() => hideModal()}
            >
               <Image
                  className="w-11 @laptop:w-9"
                  src={CloseIcon}
                  alt="close modal"
                  width={37}
               />
            </button>

            <Image
               className="mb-4 @laptop:mb-9 w-6 h-6"
               src={WorldIcon}
               alt="close modal"
               width={22}
               height={22}
            />

            <div className="mb-6 @laptop:mb-10 @laptop:max-w-[25.625rem]">
               <div className="text-2xl @laptop:text-[2rem]/none uppercase font-normal text-neutral-gray-300 mb-4">
                  GET THE APP, AND GET ON THE WAITLIST<span className="text-brand-blue-default">.</span>
               </div>
               <p className="text-base">
                  When this drops, you’re going to be right there to catch it. Plus, we’ll plant a tree just for you. Really.
               </p>
            </div>

            <ModalForm />

            <div className="flex items-center gap-4 @laptop:gap-6 mt-7 @laptop:mt-14">
               <Image src={CheckIcon} alt="benefits from card" width={23} height={23} />
               <span className="text-neutral-gray-400 text-sm/normal @laptop:text-base/normal">
                  Instant spending notifications across all your <span className="font-medium">payment cards</span>
               </span>
            </div>
         </div>
      </div>
   )
}