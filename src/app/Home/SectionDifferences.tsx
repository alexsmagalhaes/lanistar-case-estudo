import { ReactNode } from "react";
import ContainerGrid from "@/components/ui/ContainerGrid";
import CardDifferences, { CardDifferencesProps } from "@/components/ui/CardDifferences";

//assets
import DifferenceIcon1 from "@/assets/icons/detail-icon-1.svg";
import DifferenceIcon2 from "@/assets/icons/detail-icon-2.svg";
import DifferenceIcon3 from "@/assets/icons/detail-icon-3.svg";

const cards: CardDifferencesProps[] = [
   {
      image: DifferenceIcon3,
      text: 'ACCEPTED AT MORE THAN 38M TILLS'
   }, {
      image: DifferenceIcon2,
      text: 'Spend in multiple currencies'
   }, {
      image: DifferenceIcon1,
      text: 'THATS IT! free money transfers'
   }
]

export default function SectionDifferences(): ReactNode {
   return (
      <section className="py-16 @laptop:py-20 border-b border-neutral-gray-600 border-opacity-45">
         <ContainerGrid>
            <div className="flex @laptop:items-center justify-between @laptop:max-w-6xl gap-12 @laptop:gap-16 flex-col @laptop:flex-row">
               {
                  cards.map(({ image, text }: CardDifferencesProps, index: number) => {
                     return (
                        <CardDifferences
                           key={index}
                           image={image}
                           text={text}
                        />
                     )
                  })
               }
            </div>
         </ContainerGrid>
      </section>
   )
}