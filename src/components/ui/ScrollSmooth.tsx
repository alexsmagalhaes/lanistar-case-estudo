"use client"

import ReactLenis from "@studio-freight/react-lenis";
import { ReactNode } from "react";

interface ScrollSmoothProps {
   children: ReactNode,
}

function ScrollSmooth({ children }: ScrollSmoothProps) {

   const lenisBahavior: Object = {
      duration: 1.6,
      easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net
      smoothTouch: false,
      touchMultiplier: 1.1,
   }

   return (
      <ReactLenis root options={lenisBahavior}>
         {children}
      </ReactLenis >
   )
}

export default ScrollSmooth;  