'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import usePageLoaded from '@/hooks/usePageLoad'

//assets
import LoadingImage from '@/assets/brand/star-logo.svg'

export default function LoadingApplication() {
   const [loadingState, setLoadingState] = useState<boolean>(true)
   const loaded = usePageLoaded();

   useEffect(() => {
      loaded === true && setLoadingState(false)
   }, [loaded]);

   return (
      <div data-loading={loadingState} className="bg-white z-[100] w-dvw min-h-screen fixed flex items-center transition duration-500 bg-opacity-0 delay-300 ease-in-out pointer-events-none justify-center pb-12 data-[loading=true]:pointer-events-auto data-[loading=true]:bg-opacity-100 data-[loading=true]:backdrop-blur">
         <Image
            priority
            data-loading={loadingState}
            className='data-[loading=true]:opacity-100 opacity-0 transition-all duration-500 ease-in-out'
            src={LoadingImage}
            alt='loading image'
            width={72}
         />
      </div>
   )
}
