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
      <section className="bg-dark @laptop:h-[36.25rem] overflow-hidden relative">
         <ContainerGrid className="mt-20 @laptop:mt-[6.25rem] flex justify-between items-start relative z-10 flex-col @laptop:flex-row">
            <div className="@laptop:max-w-[32rem] flex flex-col items-start">
               <h2 className="mb-6 text-opacity-70 text-[2rem] @laptop:text-[3.5rem] leading-none text-white">
                  WHAT’S BETTER THAN AIR MILES? <span className="text-white text-opacity-100">ACTUAL AIR.</span>
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

            <div className="relative w-full @tablet:w-[64%] @laptop:max-w-[38.75rem] flex items-start justify-end">
               <Image
                  className="mb-[-26%] mt-[44%] @tablet:mt-[30%] mr-[-20%] @laptop:mr-0 @laptop:mb-0 @laptop:mt-[5rem] w-[90%] @laptop:max-w-[29.125rem] @laptop:w-[76%]"
                  src={PhoneImage}
                  alt={"phone lanistar"}
                  width={466}
               />
               <Image
                  className="absolute bottom-[36%] @laptop:bottom-auto @laptop:top-0 left-[0%] @laptop:left-[3%] w-[68%] @laptop:w-[51%]"
                  src={CardImage}
                  alt={"card lanistar"}
                  width={330}
               />
               <Image
                  className="absolute bottom-[22%] @tablet:w-[4.5rem] @laptop:bottom-auto left-[4%] @laptop:left-auto @laptop:-mt-7 @laptop:w-20"
                  src={MasterCardIcon}
                  alt={"MasterCard"}
                  width={64}
               />
            </div>
         </ContainerGrid>

         <Image
            className="absolute @laptop:top-0 @laptop:h-full bottom-0 w-full"
            src={BannerBg}
            alt={"bg banner lanistar"}
            width={1442}
         />
      </section>
   )
}