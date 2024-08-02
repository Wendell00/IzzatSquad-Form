import type { ReactElement } from 'react';

import { twMerge } from 'tailwind-merge';

import type { LabelProps } from './types';

export function Label({
  text,
  children,
  className = '',
  isRequired = false,
  ...props
}: LabelProps): ReactElement {
  return (
    <label {...props} className={twMerge('flex w-full', className)}>
      <div className="absolute top-[-8px] left-[4px] px-2 z-[1] bg-[#292D39] flex flex-row">
        <span
          className={twMerge(
            'h-[10px] gap-1 text-[#A9ABB0] text-[12px] flex',
            className
          )}
        >
          {text}
          {isRequired ? <span className={'text-[#FF14B9]'}>*</span> : null}
        </span>
      </div>
      <main className="relative block w-full">{children}</main>
    </label>
  );
}
