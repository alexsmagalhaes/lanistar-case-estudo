import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface ButtonIconProps{
   src: StaticImageData,
   alt: string, 
}

export default function ButtonIcon({src, alt}: ButtonIconProps): ReactNode {
   return (
      <Image alt={alt} src={src} />
   );
}
