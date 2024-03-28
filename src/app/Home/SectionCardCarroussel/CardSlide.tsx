import Image, { StaticImageData } from "next/image";

interface CardSlideProps {
   src: StaticImageData,
   alt: string
}

export default function CardSlide({ src, alt }: CardSlideProps) {

   return (
         <Image
            className="m-auto h-auto will-change-transform"
            src={src}
            alt={alt}
            width={278}
         />
   )
}