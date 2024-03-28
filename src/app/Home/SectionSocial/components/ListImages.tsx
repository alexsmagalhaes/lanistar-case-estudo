"use client"

import { ReactNode, useEffect, useState } from "react";
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

const imagesSocialDesktop = [
   [User10, User9, User8, User7, User6],
   [User5, User4, User3, User2, User1],
   [User15, User14, User13, User12, User11]
];

const imagesSocialMobile = [
   [User10, User9, User8, User7, User6, User4]
]

export default function ListImages(): ReactNode {
   const [images, setImages] = useState(imagesSocialMobile)

   useEffect(() => {
      function handleResize() {
         if (window.innerWidth >= 1024) {
            setImages(imagesSocialDesktop);
         }
      }

      handleResize();

      window.addEventListener('resize', handleResize);

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   return (
      <div className="flex gap-10 flex-col -mb-16 @laptop:-mb-40 ">
         {
            images.map((row, index: number) => {

               return (
                  <div className={`grid grid-cols-2 @tablet:grid-cols-3 @laptop:flex gap-4 @laptop:gap-11 items-center ${(index % 2 == 0) ? '@laptop:justify-start' : '@laptop:justify-end'}`}
                     key={index}>
                     {
                        row.map((item, indexImg: number) => {
                           return (
                              <Image
                                 key={indexImg}
                                 className="rounded w-full"
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
   )
}