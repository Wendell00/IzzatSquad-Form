import { forwardRef, type ReactElement } from 'react';

import { twMerge } from 'tailwind-merge';

import type { InputProps } from './types';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', ...props }: InputProps, ref): ReactElement => {
    return (
      <input
        {...props}
        ref={ref}
        className={twMerge(
          className,
          'lg:w-[417px] w-[100%] h-[56px] placeholder:text-white text-white rounded-[4px] border-[2px] border-solid border-[#5A5D67] bg-transparent px-[12px] flex justify-start items-center'
        )}
      />
    );
  }
);

Input.displayName = 'Input';
