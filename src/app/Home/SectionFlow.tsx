import { ReactNode } from "react";
import ContainerGrid from "@/components/ui/ContainerGrid";
import FlowItem, { FlowItemProps } from "@/components/ui/FlowItem";
import Image from 'next/image'

//assets
import FlowIcon1 from "@/assets/icons/flow-icon-1.svg";
import FlowIcon2 from "@/assets/icons/flow-icon-2.svg";
import FlowIcon3 from "@/assets/icons/flow-icon-3.svg";
import FlowIcon4 from "@/assets/icons/flow-icon-4.svg";
import FlowIcon5 from "@/assets/icons/flow-icon-5.svg";
import CardImage1 from "@/assets/card-flow-1.png";
import CardImage2 from "@/assets/card-flow-2.png";
import CardImage3 from "@/assets/card-flow-3.png";
import CardShadow from "@/assets/card-flow-shadow.png";
import BgSection from "@/assets/flow-bg.png";

const flowItems: FlowItemProps[] = [
   {
      icon: FlowIcon2,
      title: 'SPLIT BILLS',
      text: 'Send, request and split money with anyone, anywhere instantly. And if they’re using Lanistar, you know it’s free as anything.'
   }, {
      icon: FlowIcon4,
      title: 'SEND MONEY FOR FREE',
      text: 'Lanistar to Lanistar payments are free, so there’s no reason not to settle up.'

   }, {
      icon: FlowIcon3,
      title: '24/7 MULTI-LINGUAL SUPPORT',
      text: 'Need us? We’re up. 24/7 multilingual support, in-app or on WhatsApp. You’re in control.'
   }, {

      icon: FlowIcon5,
      title: 'TRACK YOUR SPENDING',
      text: 'See and track your spending across all your payment cards in real-time. And if you want instant notifications when money comes in or out, we’ve got that too.'
   }, {
      icon: FlowIcon1,
      title: 'STACK, SWAP, DONT STOP',
      text: 'One payment card per account? Yeah no. Our payment cards are polymorphic, meaning you can stack multiple cards in one, and swap between.'
   },
]

export default function SectionFlow(): ReactNode {
   return (
      <section className="pt-28 pb-40 bg-dark relative overflow-hidden">
         <ContainerGrid className="flex items-start justify-between">
            <h2 className="text-neutral-gray-400 text-[2.5rem] font-medium">
               CONTROL YOUR<br />
               <span className="text-white">

                  MONEY FLOW
               </span>
            </h2>
            <div className="grid grid-cols-2 text-left gap-x-28 gap-y-10 max-w-[49rem]" dir="rtl">
               {
                  flowItems.map(({ icon, title, text }: FlowItemProps, index: number) => {

                     const isLastItem = index === flowItems.length - 1
                     const classCustom = isLastItem ? "@laptop:-mt-6" : ''

                     return (
                        <FlowItem icon={icon} title={title} text={text} className={`items-end ${classCustom}`} />
                     )
                  })
               }
            </div>
         </ContainerGrid>
         <div className="absolute bottom-0 left-0 flex items-center justify-start">
            <div className="flex items-center z-10 absolute bottom-20 -left-40">
               <Image
                  className="min-w-[29.5rem] -mr-36 -mt-96"
                  src={CardImage1}
                  alt='card lanistar'
                  width={472}
               />
               <div className="min-w-[29.5rem] relative">
                  <Image
                     className="relative z-10"
                     src={CardImage3}
                     alt='card lanistar'
                     width={472}
                  />
                  <Image
                     className="absolute -top-14 z-0 -left-28"
                     src={CardShadow}
                     alt='card lanistar'
                     width={472}
                  />
               </div>
               <Image
                  className="min-w-[29.5rem] -ml-36 -mb-96"
                  src={CardImage2}
                  alt='card lanistar'
                  width={472}
               />
            </div>
            <Image
               className=""
               src={BgSection}
               alt='card lanistar'
               width={888}
            />
         </div>
      </section>
   )
}