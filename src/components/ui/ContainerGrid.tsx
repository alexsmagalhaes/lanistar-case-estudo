import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ContainerGridProps {
  children: ReactNode
  className?: string
}

export default function ContainerGrid({ children, className = "" }: ContainerGridProps): ReactNode {
  const defaultClass = 'max-w-grid mx-auto w-full px-page-padding'
  const combinedClass = twMerge(defaultClass, className);

  return (
    <div className={combinedClass}>
      {children}
    </div>
  );
}

