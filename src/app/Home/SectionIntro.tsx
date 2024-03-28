import { ReactNode } from "react";
import ContainerGrid from "@/components/ui/ContainerGrid";
import CheckItem from "@/components/ui/CheckItem";

const checksContent = [
   'Instant spending notifications across all your <b>payment cards</b>',
   'Free Lanistar-to-Lanistar payments',
   'Spend in multiple currencies',
   'Track your spending'
]

export default function SectionIntro(): ReactNode {
   return (
      <section>
         <ContainerGrid className="border-b border-neutral-gray-600 border-opacity-45 py-[5.625rem] @laptop:py-28">
            <div className="flex justify-between items-start flex-col @laptop:flex-row gap-10 @laptop:gap-8 max-w-[65.5rem]">
               <h2 className="text-[2rem] @laptop:text-[3.5rem] uppercase font-light text-neutral-gray-400 leading-none">
                  LANISTAR <br />
                  <span className="text-neutral-gray-200">
                     PAYMENT CARD</span>
               </h2>
               <div className="flex gap-8 @laptop:gap-6 flex-col items-start @laptop:max-w-96">
                  {
                     checksContent.map((text: string, index: number) => {
                        return (
                           <CheckItem
                              key={index}
                              text={text}
                           />
                        )
                     })
                  }
               </div>
            </div>
         </ContainerGrid>
      </section>
   )
}