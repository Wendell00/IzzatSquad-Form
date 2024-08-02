import type { ReactElement } from 'react';

import { IconChevronDown } from '@tabler/icons-react';
import { twMerge } from 'tailwind-merge';

import type { SelectProps } from './types';

export function Select({
  value,
  placeholder,
  className = '',
  ...props
}: SelectProps): ReactElement {
  return (
    <button
      {...props}
      type="button"
      role="combobox"
      aria-controls={props['aria-controls']}
      aria-expanded={props['aria-expanded']}
      className={twMerge(
        'w-[230px] h-[56px] placeholder:text-white text-white rounded-[4px] border-[2px] border-solid border-[#5A5D67] bg-transparent px-[12px] flex justify-between items-center',
        className
      )}
    >
      <span data-has-placeholder={Boolean(value)} className="">
        {value ?? placeholder}
      </span>
      <IconChevronDown
        size={16}
        aria-expanded={props['aria-expanded']}
        className={twMerge('aria-expanded:rotate-180 transition', className)}
      />
    </button>
  );
}
