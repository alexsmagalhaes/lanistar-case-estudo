import { ReactNode } from "react";
import ContainerGrid from "@/components/ui/ContainerGrid";
import Button from "@/components/ui/Button";
import ListImages from "./components/ListImages";


export default function SectionSocial(): ReactNode {
   return (
      <section className="mt-20 @laptop:mt-32 relative overflow-x-hidden">
         <ContainerGrid>
            <div className="mb-10 @laptop:mb-20 z-10 flex gap-9 @laptop:gap-8 flex-col @laptop:flex-row items-center justify-between">
               <h2 className="text-[2rem] @laptop:text-[2.5rem] leading-none font-medium text-neutral-gray-400">
                  GET <span className="text-neutral-gray-300">MINDFUL</span>
               </h2>

               <Button.Root type="ghost" className="text-neutral-gray-400 gap-3">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fillRule="evenodd" clipRule="evenodd" d="M5.496 1H14.505C16.987 1 19 3.012 19 5.496V14.505C19 16.987 16.988 19 14.504 19H5.496C3.013 19 1 16.988 1 14.504V5.496C1 3.013 3.012 1 5.496 1V1Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                     <path d="M14.949 4.71304C14.763 4.71404 14.612 4.86504 14.612 5.05104C14.612 5.23704 14.764 5.38804 14.95 5.38804C15.136 5.38804 15.287 5.23704 15.287 5.05104C15.288 4.86404 15.136 4.71304 14.949 4.71304" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                     <path d="M12.5455 7.45432C13.9514 8.86021 13.9514 11.1396 12.5455 12.5455C11.1396 13.9514 8.86021 13.9514 7.45432 12.5455C6.04843 11.1396 6.04843 8.86021 7.45432 7.45432C8.86021 6.04843 11.1396 6.04843 12.5455 7.45432" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Follow us
               </Button.Root>
            </div>
            <ListImages />
         </ContainerGrid>
         <div className="absolute w-full h-40 bottom-0 
         bg-gradient-to-t from-white from-0% to-transparent opacity-80"></div>
      </section>
   )
}