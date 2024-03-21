import { ReactNode } from "react";
import ContainerGrid from "@/components/ui/ContainerGrid";
import Button from "@/components/ui/Button";
import Image from 'next/image'

//assets
import User1 from "@/assets/users/use-brand-1.jpg";
import User2 from "@/assets/users/use-brand-2.jpg";
import User3 from "@/assets/users/use-brand-3.jpg";
import User4 from "@/assets/users/use-brand-4.jpg";
import User5 from "@/assets/users/use-brand-5.jpg";
import User6 from "@/assets/users/use-brand-6.jpg";
import User7 from "@/assets/users/use-brand-7.jpg";
import User8 from "@/assets/users/use-brand-8.jpg";
import User9 from "@/assets/users/use-brand-9.jpg";
import User10 from "@/assets/users/use-brand-10.jpg";
import User11 from "@/assets/users/use-brand-11.jpg";
import User12 from "@/assets/users/use-brand-12.jpg";
import User13 from "@/assets/users/use-brand-13.jpg";
import User14 from "@/assets/users/use-brand-14.jpg";
import User15 from "@/assets/users/use-brand-15.jpg";

const imagesSocial = [
   [User10, User9, User8, User7, User6],
   [User5, User4, User3, User2, User1],
   [User15, User14, User13, User12, User11]
];

export default function SectionSocial(): ReactNode {
   return (
      <section className="mt-32 relative overflow-x-hidden">
         <ContainerGrid>
            <div className="mb-20 z-10 flex gap-8 items-center justify-between">
               <h2 className="text-[2.5rem] leading-none font-medium text-neutral-gray-400">
                  GET&nbsp;
                  <span className="text-neutral-gray-300">
                     MINDFUL
                  </span>
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
            <div className="flex gap-10 flex-col -mb-40">
               {
                  imagesSocial.map((row, index: number) => {

                     return (
                        <div className={`flex gap-11 items-center ${(index % 2 == 0) ? 'justify-start' : 'justify-end'}`}
                           key={index}>
                           {
                              row.map((item, indexImg: number) => {
                                 return (
                                    <Image
                                       key={indexImg}
                                       className="rounded"
                                       src={item}
                                       alt="Usuário do Banco"
                                       width={246}
                                    />
                                 )
                              })
                           }
                        </div>
                     )
                  })
               }
            </div>
         </ContainerGrid>
         <div className="absolute w-full h-40 bottom-0 
         bg-gradient-to-t from-white from-0% to-transparent opacity-80"></div>
      </section>
   )
}