import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className }: SectionContainerProps) {
  return (
    <section
      className={twMerge(
        'container relative mx-auto flex min-w-mobile flex-col gap-2 sm:gap-4 sm:px-4',
        className,
      )}
    >
      {children}
    </section>
  );
}
