import { ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const ButtonVariants = tv({
   base: 'bg-brand-blue-default hover:bg-brand-blue-dark font-semibold border border-brand-blue-default hover:border-brand-blue-dark text-white uppercase ring-0 ring-brand-blue-default ring-opacity-0 hover:ring-4 hover:ring-opacity-20 transition duration-300 ease-in-out rounded-md',
   variants: {
      size: {
         default: 'text-base/snug px-8 py-4',
      },
   },
   defaultVariants: {
      size: "default",
   }
});

interface ButtonRootProps {
   children: ReactNode,
   size?: VariantProps<typeof ButtonVariants>['size'],
}

export default function ButtonRoot({ children, size, ...props }: ButtonRootProps): ReactNode {

   return (
      <button className={ButtonVariants({ size })} {...props}>
         {children}
      </button>
   );
}
