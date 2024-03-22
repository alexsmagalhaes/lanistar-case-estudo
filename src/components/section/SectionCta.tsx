import { ReactNode } from "react";
import Button from "@/components/ui/Button";
import ContainerGrid from "@/components/ui/ContainerGrid";
import { ModalActiveWrap } from "@/app/context/ModalContext";
import Image from 'next/image'

//assets
import MasterCardIcon from "@/assets/master-card.svg";
import CardImage from "@/assets/card-cta.png";
import PhoneImage from "@/assets/phone-cta.png";
import BannerBg from "@/assets/banner-bg-cta.png";

export default function SectionCta(): ReactNode {
   return (
      <section className="bg-dark h-[36.25rem] overflow-hidden relative">
         <ContainerGrid className="mt-[6.25rem] flex justify-between items-start relative z-10">
            <div className="max-w-[32rem]">
               <h2 className="mb-6 text-opacity-70 text-[3.5rem] leading-none text-white">
                  WHAT’S BETTER THAN AIR MILES?
                  <span className="text-white text-opacity-100">ACTUAL AIR.</span>
               </h2>
               <p className="text-lg text-gray-100 mb-8">
                  We plant a tree for everyone who pre-registers and every new customer. And we’re planning to plant millions.
               </p>
               <ModalActiveWrap>
                  <Button.Root>
                     PRE-REGISTER NOW
                  </Button.Root>
               </ModalActiveWrap>
            </div>

            <div className="relative w-full max-w-[38.75rem] flex items-start justify-end">
               <Image
                  className="mt-[5rem] max-w-[29.125rem] w-[76%]"
                  src={PhoneImage}
                  alt={"phone lanistar"}
                  width={466}
               />
               <Image
                  className="absolute top-[-3%] left-0 max-w-[20.625rem] w-[56%]"
                  src={CardImage}
                  alt={"card lanistar"}
                  width={330}
               />
               <Image
                  className="absolute -mt-7"
                  src={MasterCardIcon}
                  alt={"MasterCard"}
                  width={80}
               />
            </div>
         </ContainerGrid>

         <Image
            className="absolute top-0 h-full w-full"
            src={BannerBg}
            alt={"bg banner lanistar"}
            width={1442}
         />
      </section>
   )
}