import Image, { StaticImageData } from "next/image";

interface CardSlideProps {
   src: StaticImageData,
   alt: string
}

export default function CardSlide({ src, alt }: CardSlideProps) {

   return (
      <div>
         <Image
            className="w-[17.375rem] h-auto"
            src={src}
            alt={alt}
            width={278}
         />
      </div>
   )
}