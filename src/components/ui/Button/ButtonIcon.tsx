import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface ButtonIconProps{
   src: StaticImageData,
   alt: string, 
   className?: string
}

export default function ButtonIcon({src, alt, className}: ButtonIconProps): ReactNode {
   return (
      <Image alt={alt} src={src} className={className}/>
   );
}
