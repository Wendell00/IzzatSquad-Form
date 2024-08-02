'use client';
import type { ReactElement } from 'react';

import { twMerge } from 'tailwind-merge';

import { PopoverContent } from '@/components/popover';

import type { WrapperOptionProps } from './types';

export function WrapperOption({
  className = '',
  ...props
}: WrapperOptionProps): ReactElement {
  return (
    <PopoverContent
      onOpenAutoFocus={(event) => event.preventDefault()}
      className={twMerge(
        'flex flex-col overflow-hidden overflow-y-auto w-[230px] bg-white gap-1 relative z-60',

        className
      )}
      {...props}
    />
  );
}
