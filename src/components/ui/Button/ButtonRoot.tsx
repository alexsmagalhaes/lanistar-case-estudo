import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { tv, VariantProps } from "tailwind-variants";

const ButtonVariants = tv({
   base: 'font-semibold uppercase ring-0 transition-all duration-300 ring-opacity-0 ease-in-out rounded-md flex items-center gap-4',
   variants: {
      size: {
         default: 'text-base/snug px-8 py-4 flex items-center',
      },
      type: {
         primary: 'bg-brand-blue-default hover:bg-brand-blue-dark hover:ring-4 hover:ring-opacity-20 border border-brand-blue-default hover:border-brand-blue-dark ring-brand-blue-default text-white justify-center',
         ghost: 'text-neutral-gray-200 [&_svg]:text-brand-blue-default [&_svg]:transition [&_svg]:ease-in-out [&_svg]:duration-300 [&_svg]:hover:text-brand-blue-dark py-0 px-0'
      }
   },
   defaultVariants: {
      size: "default",
      type: "primary"
   }
});

interface ButtonRootProps {
   children: ReactNode,
   size?: VariantProps<typeof ButtonVariants>['size'],
   type?: VariantProps<typeof ButtonVariants>['type'],
   className?: string,
   typeButton?: string
}

export default function ButtonRoot({ children, size, type, className, typeButton, ...props }: ButtonRootProps): ReactNode {

   const defaultClass = ButtonVariants({ size, type })
   const mergedClass = twMerge(defaultClass, className)

   return (
      <button className={mergedClass} {...props}>
         {children}
      </button>
   );
}
