import { ReactNode } from "react";
import ContainerGrid from "@/components/ui/ContainerGrid";
import Button from "@/components/ui/Button";
import ScrollDown from "@/components/ui/ScrollDown";
import { ModalActiveWrap } from "../context/ModalContext";
import Image from 'next/image'

//assets
import BgHero from "@/assets/hero-shadow.png";
import HeroCard1 from "@/assets/hero-card-1.png";
import HeroCard2 from "@/assets/hero-card-2.png";
import HeroCard3 from "@/assets/hero-card-3.png";
import HeroCard4 from "@/assets/hero-card-4.png";
import HeroCard5 from "@/assets/hero-card-5.png";
import HeroCard6 from "@/assets/hero-card-6.png";
import HeroSymbol from "@/assets/hero-symbol.svg";

export default function SectionHero(): ReactNode {

   return (
      <header className="bg-light pt-32 @laptop:pt-48 pb-32 @laptop:pb-[5.5rem] overflow-hidden relative">
         <ContainerGrid className="flex flex-col justify-start">
            <div className="@laptop:max-w-[38rem] mb-[80%] @laptop:mb-96 relative z-10 flex flex-col items-start">
               <h1 className="text-neutral-gray-400 text-5xl @laptop:text-7xl font-light mb-4 @laptop:mb-6">
                  BE <span className="text-neutral-gray-100 break-words hyphens-auto">UNTOUCHABLE</span>
               </h1>
               <p className="text-lg/snug @laptop:text-2xl/snug font-normal text-neutral-gray-300 mb-8 @laptop:mb-10">
                  A polymorphic payment card for those who know<br/> influence is the only currency that matters.
               </p>
               <ModalActiveWrap>
                  <Button.Root>
                     PRE-REGISTER NOW
                  </Button.Root>
               </ModalActiveWrap>
               <div className="  mt-12 max-w-64 flex gap-6 flex-col items-start">
                  <span className="text-neutral-gray-400 text-base/normal uppercase">
                     <span className="font-semibold">COMING 2021:</span> GET THE APP TO GET ON THE WAITLIST.
                  </span>
                  <div className="bg-brand-blue-default bg-opacity-20 w-32 rounded-md overflow-hidden">
                     <div className="bg-brand-blue-default bg-opacity-80 h-1 w-2/5">
                     </div>
                  </div>
               </div>
            </div>

            <div className="absolute bottom-0 @laptop:right-0">
               <Image
                  className="min-w-[160%] @laptop:min-w-0 ml-[-6%] @laptop:ml-auto"
                  src={BgHero}
                  alt='bg hero lanistar'
                  width={1000}
               />
               <div className="absolute flex flex-col bottom-[10%] ml-[13%] @laptop:bottom-10 @laptop:ml-[5%] w-full pb-[7%] @laptop:pb-0">
                  <div className="flex items-center justify-center relative @laptop:max-w-[33.25rem] w-[71%] @laptop:w-[54%] ml-[-6%] mb-[-5%]">
                     <Image
                        className="absolute top-[72%] right-[72%]"
                        src={HeroCard2}
                        alt='card lanistar'
                        width={532}
                     />
                     <Image
                        src={HeroCard6}
                        alt='card lanistar'
                        width={532}
                     />
                     <Image
                        className="absolute top-[-72%] left-[72%]"
                        src={HeroCard5}
                        alt='card lanistar'
                        width={532}
                     />
                  </div>

                  <div className="flex items-center justify-center relative @laptop:max-w-[33.25rem] w-[71%] @laptop:w-[54%]">
                     <Image
                        className="absolute top-[72%] right-[72%]"
                        src={HeroCard1}
                        alt='card lanistar'
                        width={532}
                     />
                     <Image
                        src={HeroCard3}
                        alt='card lanistar'
                        width={532}
                     />
                     <Image
                        className="absolute top-[-72%] left-[72%]"
                        src={HeroCard4}
                        alt='card lanistar'
                        width={532}
                     />
                     <Image
                        className="absolute top-[-90%] left-[144%] drop-shadow-2xl w-3/12"
                        src={HeroSymbol}
                        alt='card lanistar'
                        width={114}
                     />
                  </div>
               </div>
            </div>

            <div className="hidden @laptop:visible ml-auto z-10">
               <ScrollDown />
            </div>
         </ContainerGrid>
      </header>
   )
}