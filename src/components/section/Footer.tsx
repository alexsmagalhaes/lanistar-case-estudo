import { ReactNode } from "react";
import ContainerGrid from "@/components/ui/ContainerGrid";
import Image, { StaticImageData } from 'next/image'
import Link from "next/link";

//assets
import InsanyLogo from '@/assets/brand/insany-logo.svg'
import CodeBoostLogo from '@/assets/brand/codeboost-logo.svg'
import LanistarLogo from '@/assets/brand/star-logo.svg'
import PlayStoreIcon from '@/assets/google-store.svg'
import AppStoreIcon from '@/assets/app-store.svg'
import InfluencersIcon from '@/assets/icons/influencers-icon.svg'
import InvertorsIcon from '@/assets/icons/investors-icon.svg'

interface menuLinksProps {
   text: string,
   path: string
}

interface diferencesProps {
   text: string,
   icon: StaticImageData,
   path: string
}

const menuLinks: menuLinksProps[] = [
   {
      text: 'Security',
      path: '#'
   }, {
      text: 'Support',
      path: '#'
   }, {
      text: 'Features',
      path: '#'
   }, {
      text: 'Terms and Conditions',
      path: '#'
   }, {
      text: 'Fundamentals',
      path: '#'
   }, {
      text: 'Privacy Policy',
      path: '#'
   }, {
      text: 'About Us',
      path: '#'
   },
]

const diferences: diferencesProps[] = [
   {
      text: 'Influencers',
      icon: InfluencersIcon,
      path: '#'
   }, {
      text: 'Investors',
      icon: InvertorsIcon,
      path: '#'
   },
]

export default function Footer(): ReactNode {
   return (
      <footer className="pb-14 pt-28 text-neutral-gray-300">
         <ContainerGrid>
            <div className="flex justify-between items-start gap-[5rem]">
               <div className="gap-8 flex justify-between items-start max-w-[18.5rem] mr-8">
                  <Link
                     className="transition duration-300 ease-in-out hover:opacity-85"
                     href="/"
                  >
                     <Image
                        className="w-12 h-12"
                        src={LanistarLogo}
                        alt="lanistar bank"
                        width={48}
                        height={48}
                     />
                  </Link>

                  <div className="flex flex-col gap-6">
                     <Link
                        className="transition duration-300 ease-in-out hover:opacity-85 rounded-lg py-3 px-4 max-h-14 border border-neutral-gray-500 flex justify-center items-center"
                        target="_blank"
                        href="#"
                     >
                        <Image
                           className="h-9 w-auto"
                           alt="playstore"
                           src={PlayStoreIcon}
                        />
                     </Link>
                     <Link
                        className="transition duration-300 ease-in-out hover:opacity-85 rounded-lg py-3 px-4 max-h-14 border border-neutral-gray-500 flex justify-center items-center"
                        href="#"
                        target="_blank"
                     >
                        <Image
                           className="h-[2.125rem] w-auto"
                           alt="playstore"
                           src={AppStoreIcon}
                        />
                     </Link>
                  </div>
               </div>

               <div className="flex flex-col gap-6 items-start">
                  {
                     diferences.map(({ text, icon, path }: diferencesProps, index: number) => {
                        return (
                           <Link
                              key={index}
                              className="transition duration-300 ease-in-out hover:opacity-85 flex items-center gap-4 text-xl/none"
                              href={path}
                              target="_blank"
                           >
                              <Image
                                 src={icon}
                                 alt={text}
                                 width={19}  
                              />
                              {text}
                           </Link>
                        )
                     })
                  }
               </div>

               <div className="text-lg/snug grid grid-cols-2 gap-8 max-w-[23.4375rem]">
                  {
                     menuLinks.map(({ text, path }: menuLinksProps, index: number) => {
                        return (
                           <Link
                              key={index}
                              className="transition duration-300 ease-in-out hover:opacity-85"
                              href={path}
                           >
                              {text}
                           </Link>
                        )
                     })
                  }
               </div>

               <div className="flex gap-8 items-center ml-5">
                  <Link
                     className="transition duration-300 ease-in-out  hover:text-brand-blue-dark"
                     href="#"
                     target="_blank"
                  >
                     <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.496 1H14.505C16.987 1 19 3.012 19 5.496V14.505C19 16.987 16.988 19 14.504 19H5.496C3.013 19 1 16.988 1 14.504V5.496C1 3.013 3.012 1 5.496 1V1Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14.949 4.71304C14.763 4.71404 14.612 4.86504 14.612 5.05104C14.612 5.23704 14.764 5.38804 14.95 5.38804C15.136 5.38804 15.287 5.23704 15.287 5.05104C15.288 4.86404 15.136 4.71304 14.949 4.71304" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12.5455 7.45432C13.9514 8.86021 13.9514 11.1396 12.5455 12.5455C11.1396 13.9514 8.86021 13.9514 7.45432 12.5455C6.04843 11.1396 6.04843 8.86021 7.45432 7.45432C8.86021 6.04843 11.1396 6.04843 12.5455 7.45432" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                  </Link>
                  <Link
                     className="transition duration-300 ease-in-out  hover:text-brand-blue-dark"
                     href="#"
                     target="_blank"
                  >
                     <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M20.583 4.37312C20.354 3.36912 19.676 2.57712 18.814 2.30512C17.255 1.81812 11 1.81812 11 1.81812C11 1.81812 4.748 1.81812 3.186 2.30512C2.327 2.57312 1.649 3.36512 1.417 4.37312C1 6.19512 1 10.0001 1 10.0001C1 10.0001 1 13.8051 1.417 15.6271C1.646 16.6311 2.324 17.4231 3.186 17.6951C4.748 18.1821 11 18.1821 11 18.1821C11 18.1821 17.255 18.1821 18.814 17.6951C19.673 17.4271 20.351 16.6351 20.583 15.6271C21 13.8051 21 10.0001 21 10.0001C21 10.0001 21 6.19512 20.583 4.37312Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.00195 13L14.198 10L9.00195 7V13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>

                  </Link>
                  <Link
                     className="transition duration-300 ease-in-out  hover:text-brand-blue-dark"
                     href="#"
                     target="_blank"
                  >
                     <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.2 6.8501C17.2 13.1501 13.6 17.6501 7.3 17.6501C3.7 17.6501 2.257 15.7711 1 14.0501" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M1 14.0501C1.029 14.0451 3.7 13.1501 3.7 13.1501C0.694 10.1111 0.466 5.6101 2.8 2.3501C3.907 4.4091 5.974 6.3091 8.2 6.8501C8.286 4.2501 10.049 2.3501 12.7 2.3501C14.505 2.3501 15.567 3.0381 16.3 4.1501H19L17.2 6.8501" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                     </svg>
                  </Link>
               </div>
            </div>

            <hr className="h-[1.5px] w-full bg-[#E4E7EB] my-14" />
            <p className="text-sm mb-16">
               Lanistar Ltd is a registered EMD agent (FRN: 902996) of Modulr FS Limited and may distribute and redeem e-money and provide payment services. Modulr FS Limited is authorised by the Financial Conduct Authority ("FCA") under the Electronic Money Regulations 2011 (FRN: 900573) for the issuing of electronic money and to provide payment services. Lanistar Limited ("Lanistar") is currently only carrying out pre-launch marketing in preparation for a future launch of Lanistar branded payment cards ("Cards"). Lanistar is finalising arrangements with various partner firms who are authorised and/or regulated (by the FCA and other overseas regulators) and the Cards will only be launched and go-live when those arrangements are in place.
            </p>
            <div className="flex justify-between max-w-[63.25rem] items-center">
               <span className="text-sm font-medium">
                  © 2021 Lanistar.com
               </span>
               <div className="flex gap-5 items-center">
                  <span className="text-sm">
                     Powered by
                  </span>
                  <Link
                     className="transition duration-300 ease-in-out hover:opacity-85"
                     href="https://codeboost.com.br/"
                     target="_blank"
                  >
                     <Image
                        src={CodeBoostLogo}
                        alt="design by codeboost"
                        width={42}
                        height={21}
                     />
                  </Link>
                  <Link
                     className="transition duration-300 ease-in-out hover:opacity-85"
                     href="https://insany.design/"
                     target="_blank"
                  >
                     <Image
                        src={InsanyLogo}
                        alt="design by insany"
                        width={29}
                        height={18}
                     />
                  </Link>
               </div>
            </div>
         </ContainerGrid>
      </footer>
   )
}