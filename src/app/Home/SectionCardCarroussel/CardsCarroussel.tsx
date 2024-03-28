'use client'

import { ReactNode, useRef, useState } from "react";
import { StaticImageData } from "next/image";
import CardSlide from "./CardSlide";
import ArrowButton from "@/components/swiper/ArrowButton";

// swiper
import { Swiper as SwiperTypes } from 'swiper/types';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css'


//assets
import ColorSelector from "./ColorSelector";
import Card1 from '@/assets/cards/lanistar-card-1.png'
import Card2 from '@/assets/cards/lanistar-card-2.png'
import Card3 from '@/assets/cards/lanistar-card-4.png'
import Card4 from '@/assets/cards/lanistar-card-5.png'
import Card5 from '@/assets/cards/lanistar-card-6.png'
import Card6 from '@/assets/cards/lanistar-card-7.png'
import Card7 from '@/assets/cards/lanistar-card-8.png'

interface CardsProps {
   image: StaticImageData,
   color: string,
   colorName: string
}

const cards: CardsProps[] = [
   {
      image: Card1,
      color: 'bg-gradient-to-b from-cyan-700 to-cyan-200',
      colorName: 'OCEAN SPRAY'
   }, {
      image: Card2,
      color: 'bg-gradient-to-b from-lime-600 to-lime-300',
      colorName: 'CHOOPED KALE'
   }, {
      image: Card3,
      color: 'bg-gradient-to-b from-fuchsia-900 to-fuchsia-500',
      colorName: 'BRUISED EGO'
   }, {
      image: Card4,
      color: 'bg-gradient-to-b from-rose-600 to-amber-400',
      colorName: 'BLOOD ORANGE'
   }, {
      image: Card5,
      color: 'bg-gradient-to-b from-pink-400 to-pink-200',
      colorName: 'TUTU FLUFF'
   }, {
      image: Card6,
      color: 'bg-gradient-to-b from-slate-900 to-slate-700',
      colorName: 'PHANTOM BLACK'
   }, {
      image: Card7,
      color: 'bg-gradient-to-b from-lime-600 to-amber-400',
      colorName: 'QUEEN-B LEMONADE'
   }
]

export default function CardCarroussel(): ReactNode {

   const [swiperElement, setSwiperElement] = useState<SwiperTypes | null>(null);
   const [currentCard, setCurrentCard] = useState<number>(0)

   const prevRef = useRef(null);
   const nextRef = useRef(null);

   const speedSlideChange = 900

   const handleSlideChange = () => {
      setCurrentCard(swiperElement !== null ? swiperElement.realIndex : 0)
   };

   const handleSlideToLoop = (index: number) => {
      swiperElement?.slideToLoop(index, speedSlideChange)
   };

   const swiperConfig = {
      effect: 'coverflow',
      updateOnWindowResize: true,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto' as const,
      speed: speedSlideChange,
      loop: true,
      autoplay: { delay: 4000, disableOnInteraction: false },
      coverflowEffect: {
         rotate: -24,
         depth: 232,
         modifier: 0.75,
         slideShadows: false,
      },
      modules: [EffectCoverflow, Autoplay, Navigation],
      navigation: {
         prevEl: prevRef.current,
         nextEl: nextRef.current,
      }
   };

   return (
      <>
         <div className="flex relative items-center max-w-full justify-center">
            <Swiper
               className="mb-14 flex min-w-[100vw] @laptop:min-w-0 @laptop:max-w-full"

               onInit={(swiper) => { setSwiperElement(swiper); }}

               {...swiperConfig}

               onSlideChange={() => {
                  handleSlideChange();
               }}
            >
               {cards.map(({ image, colorName }: CardsProps, index: number) => {
                  return (
                     <SwiperSlide
                        onClick={() => { handleSlideToLoop(index) }}
                        data-current-card={currentCard === index ? true : false}
                        className="max-w-[13.25rem] @laptop:max-w-[17.375rem] mx-6 @laptop:mx-9
                        
                        blur-sm transition-all data-[current-card=true]:blur-none data-[current-card=true]:opacity-100 will-change-transform"
                        key={index}
                     >
                        <CardSlide src={image} alt={colorName} />
                     </SwiperSlide>
                  );
               })}
            </Swiper>

            <div className="max-w-full w-full @laptop:max-w-[27rem] flex justify-between absolute z-10 mb-14">
               <div ref={prevRef}><ArrowButton reverse /></div>
               <div ref={nextRef}><ArrowButton /></div>
            </div>
         </div >
         <div className="">
            <ColorSelector color={cards[currentCard].color} colorName={cards[currentCard].colorName} />
         </div>
      </>
   )
}