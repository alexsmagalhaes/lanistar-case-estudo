import { ReactNode } from "react";
import Image from 'next/image'
import Button from "@/components/ui/Button";
import CardCategory from "./CardCategory";
import { ModalActiveWrap } from "@/app/context/ModalContext";
import BenefitItem, { BenefitItemProps } from "@/components/ui/BenefitItem";

//assets
import CardImage from "@/assets/card-tab-1.png";
import CardBgImage from "@/assets/card-tab-1-bg.png";
import CategoryIcon from "@/assets/brand/card-categorie.svg";
import BenefitIcon1 from "@/assets/icons/benefit-icon-1.svg";
import BenefitIcon2 from "@/assets/icons/benefit-icon-2.svg";
import BenefitIcon3 from "@/assets/icons/benefit-icon-3.svg";
import BenefitIcon4 from "@/assets/icons/benefit-icon-4.svg";

const benefits: BenefitItemProps[] = [
   {
      icon: BenefitIcon1,
      text: 'Nlitz on-line shopping more securely with dynamic CVV2'
   }, {
      icon: BenefitIcon2,
      text: 'You control your money, it doesn’t control you'
   }, {
      icon: BenefitIcon3,
      text: 'Securely with dynamic CVV2'
   }, {
      icon: BenefitIcon4,
      text: 'Ant-hacker technology'
   }
]

export default function Tab1(): ReactNode {
   return (
      <div className="flex justify-between items-end">
         <div className="flex flex-col items-start max-w-[33.25rem]">
            <h2 className="mb-6 text-[2.5rem] font-medium leading-snug text-neutral-gray-400">
               A SECURITY DETAIL FOR YOUR <span className="text-neutral-gray-200">BANK DETAILS</span>
            </h2>
            <p className="mb-10 text-lg/snug font-medium text-neutral-gray-300">
               The most secure payment card in the world. Load up to 8 payment cards and get one-time PINs straight from the keypad
            </p>
            <ul className="list-none flex flex-col gap-8 mb-12">
               {
                  benefits.map(({ icon, text }: BenefitItemProps, index: number) => {
                     return (
                        <li key={index}>
                           <BenefitItem
                              icon={icon}
                              text={text}
                           />
                        </li>
                     )
                  })
               }
            </ul>
            <ModalActiveWrap>
               <Button.Root>
                  SPEAKING OF DETAILs
               </Button.Root>
            </ModalActiveWrap>
         </div>

         <div className="bg-gradient-to-br from-[#F9FFFF] to-[#DCFFFF] rounded-xl relative w-[26rem] flex justify-center items-start py-[4.25rem] px-24">
            <div className="flex gap-6 flex-col justify-center relative -bottom-24 z-10">
               <Image
                  src={CardImage}
                  alt="Card lanistar"
                  width={216}
               />
               <CardCategory image={CategoryIcon} />
            </div>
            <Image
               className="absolute opacity-50"
               src={CardBgImage}
               alt="Phases Lanistar"
               width={349}
            />
         </div>
      </div>
   )
}