import { ReactNode } from "react";
import ContainerGrid from "@/components/ui/ContainerGrid";
import CardsCarroussel from "./CardsCarroussel";

export default function SectionCardCarroussel(): ReactNode {

   return (
      <section className="py-20 @laptop:py-[8.25rem] overflow-hidden">
         <ContainerGrid className="flex flex-col items-center">
            <h2 className="text-[2rem] @laptop:text-[2.5rem] leading-none uppercase text-gray-400 font-medium text-center @laptop:max-w-[30.875rem] @laptop:mb-24 mb-14">
               One payment card per Account? <span className="text-neutral-gray-200">Yeah no.</span>
            </h2>

            <CardsCarroussel />
         </ContainerGrid>
      </section>
   )
}