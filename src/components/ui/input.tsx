// import React from 'react';
// import { twMerge } from 'tailwind-merge';
//
// type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
//
// const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
//   { className, ...props }: InputProps,
//   ref,
// ) {
//   return (
//     <input
//       className={twMerge(
//         `
//         w-full rounded-md border border-gray-300 px-3 py-2
//         focus-visible:outline-none focus-visible:ring-2
//         focus-visible:ring-black focus-visible:ring-offset-2
//         disabled:cursor-not-allowed disabled:opacity-50
//        `,
//         className,
//       )}
//       ref={ref}
//       {...props}
//     />
//   );
// });
//
// export default Input;

import * as React from 'react';
import { cn } from '@/utils/cn';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        className={cn(
          'flex h-10 w-full rounded-md border border-gray-300 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        type={type}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };
