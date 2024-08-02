import type { ReactElement } from 'react';

import { twMerge } from 'tailwind-merge';

import type { OptionProps } from './types';

export function Option({
  className = '',
  ...props
}: OptionProps): ReactElement {
  return (
    <option
      role="option"
      {...props}
      className={twMerge('flex cursor-pointer hover:bg-slate-100 p-2', className)}
    />
  );
}
