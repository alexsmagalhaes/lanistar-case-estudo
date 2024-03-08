import { ReactNode } from "react";
import ContainerGrid from "@/components/ui/ContainerGrid";
import CardsCarroussel from "./CardsCarroussel";

export default function SectionCardCarroussel(): ReactNode {

   return (
      <section className="py-[8.25rem]">
         <ContainerGrid className="flex flex-col items-center">
            <h2 className="text-[2.5rem] leading-none uppercase text-gray-400 font-medium text-center max-w-[30.875rem] mb-24">
               One payment card per Account?
               <span className="text-neutral-gray-200">
                  &nbsp; Yeah no.
               </span>
            </h2>

            <CardsCarroussel />
         </ContainerGrid>
      </section>
   )
}