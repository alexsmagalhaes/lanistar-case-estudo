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
      <section className="pt-[5.75rem] @laptop:pt-28 pb-96 @laptop:pb-40 bg-dark relative overflow-hidden">
         <ContainerGrid className="flex items-start flex-col @laptop:flex-row justify-between">
            <h2 className="text-neutral-gray-400 mb-9 @laptop:mb-0 text-[2rem] @laptop:text-[2.5rem] font-medium @laptop:max-w-72">
               CONTROL YOUR <span className="text-white">MONEY FLOW</span>
            </h2>
            <div className="grid @laptop:grid-cols-2 gap-8 text-left @laptop:gap-x-28 @laptop:gap-y-10 @laptop:max-w-[49rem]" dir="rtl">
               {
                  flowItems.map(({ icon, title, text }: FlowItemProps, index: number) => {

                     const isLastItem = index === flowItems.length - 1
                     const classCustom = isLastItem ? "@laptop:-mt-6" : ''

                     return (
                        <FlowItem key={index} icon={icon} title={title} text={text} className={`items-end ${classCustom}`} />
                     )
                  })
               }
            </div>
         </ContainerGrid>
         <div className="absolute bottom-0 left-0 flex items-center justify-start">
            <div className="flex items-center z-10 absolute bottom-12 left-20 @laptop:bottom-20 @laptop:left-44">
               <Image
                  className="absolute w-full left-[-73%] top-[-73%]"
                  src={CardImage1}
                  alt='card lanistar'
                  width={472}
               />
               <Image
                  className="relative z-10 w-[19rem] @laptop:w-[29.5rem]"
                  src={CardImage3}
                  alt='card lanistar'
                  width={472}
               />
               <Image
                  src={CardShadow}
                  className="absolute top-[-16%] z-0 left-[-20%] w-full"
                  alt='card lanistar'
                  width={472}
               />
               <Image
                  className="absolute w-full right-[-73%] bottom-[-73%]"
                  src={CardImage2}
                  alt='card lanistar'
                  width={472}
               />
            </div>
            <Image
               className="max-w-[34rem] @laptop:max-w-max"
               src={BgSection}
               alt='bg card lanistar'
               width={888}
            />
         </div>
      </section>
   )
}