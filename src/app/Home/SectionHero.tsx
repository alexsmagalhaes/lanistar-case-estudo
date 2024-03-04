import { ReactNode } from "react";
import ContainerGrid from "@/components/ui/ContainerGrid";
import Button from "@/components/ui/Button";

export default function SectionHero(): ReactNode {
   return (
      <header className="min-h-[1000px]">
         <ContainerGrid>
            <Button.Root>
               Botão de ação
            </Button.Root>
         </ContainerGrid>
      </header>
   )
}