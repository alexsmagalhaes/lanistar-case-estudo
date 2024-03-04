import React, { ReactNode } from 'react';
import ContainerGrid from './ContainerGrid';

export default function FavButton(): ReactNode {
   return (
      <ContainerGrid className="flex justify-end">

         <button className='bg-neutral-gray-300 hover:bg-brand-blue-default hover:text-brand-blue-default h-14 w-14 flex text-neutral-gray-300 items-center justify-center rounded-full ring-4 hover:ring-8 hover:ring-opacity-20 ring-neutral-gray-500 hover:ring-brand-blue-default ring-opacity-20 transition ease-in-out duration-300 fixed bottom-8 translate-x-14'>

            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="29" fill="none" >
               <g fill="#fff"><path d="M6.148 1A5.15 5.15 0 0 0 1 6.148v14.747a5.15 5.15 0 0 0 5.148 5.148H22.5l3.027 2.13c.393.276.934-.005.934-.485v-1.646h.025V6.148A5.15 5.15 0 0 0 21.338 1H6.148z" /><path d="M22.5 26.043l.185-.263-.083-.059H22.5v.322zm3.027 2.13l-.185.263h0l.185-.263zm.934-2.13v-.322h-.322v.322h.322zm.025 0v.322h.322v-.322h-.322zM1.322 6.148c0-2.665 2.161-4.826 4.826-4.826V.678a5.47 5.47 0 0 0-5.47 5.47h.643zm0 14.747V6.148H.678v14.747h.643zm4.826 4.826c-2.665 0-4.826-2.161-4.826-4.826H.678a5.47 5.47 0 0 0 5.47 5.47v-.643zm16.352 0H6.148v.643H22.5v-.643zm-.185.585l3.027 2.13.37-.526-3.027-2.13-.37.526zm3.027 2.13c.606.426 1.441-.007 1.441-.748h-.644a.27.27 0 0 1-.427.221l-.37.526zm1.441-.748v-1.646h-.644v1.646h.644zm-.297-1.967h-.025v.643h.025v-.643zm-.322-19.573v19.895h.643V6.148h-.643zm-4.826-4.826c2.665 0 4.826 2.161 4.826 4.826h.643a5.47 5.47 0 0 0-5.469-5.47v.643zm-15.19 0h15.19V.678H6.148v.643z" fillOpacity=".2" /></g><path d="M4.881 18.079s2.503 3.186 8.647 3.186c5.461 0 8.875-3.186 8.875-3.186" stroke="currentColor" strokeWidth="2.574" strokeLinecap="round" />
            </svg>

         </button>
         
      </ContainerGrid>
   );
}

