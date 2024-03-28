import { ReactNode, useEffect, useRef } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputMask from "@mona-health/react-input-mask";
import Button from "../Button";

export default function ModalForm(): ReactNode {
   const schema = yup.object({
      phone: yup.string().required('Field Required. Please Continue.').min(18, 'Please fill in the field correctly.').max(18)
   });

   const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm({
      resolver: yupResolver(schema)
   });

   const onSubmit = (data: any) => {
      console.log(data);
   };

   useEffect(() => {
      if (isSubmitSuccessful) {
         const timer = setTimeout(() => {
            reset()
         }, 3000);

         return () => clearTimeout(timer);
      }
   }, [isSubmitSuccessful, reset]);

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <div className="flex items-stretch flex-col @laptop:flex-row gap-4 @laptop:gap-5">
            <div>
               <label className="relative flex items-center">
                  <span className="absolute ml-4 text-neutral-gray-200">
                     +55
                  </span>

                  <InputMask
                     mask="(99) 9 9999 - 9999"
                     maskPlaceholder=''
                     className="py-4 text-base/snug rounded-md pr-4 pl-14 border border-neutral-gray-500 text-neutral-gray-400 focus:text-neutral-gray-200 focus:outline-neutral-gray-500 flex-grow"
                     placeholder="Phone number"
                     {...register('phone')}
                  />
               </label>
            </div>

            <Button.Root typeButton="submit">
               send contact
            </Button.Root>
         </div>
         {errors.phone && <p className="mt-2 text-sm text-red-400">{errors.phone.message}</p>}
         {isSubmitSuccessful && <p className="mt-2 text-sm text-brand-green-dark">Submitted successfully.</p>}
      </form>
   );
}
