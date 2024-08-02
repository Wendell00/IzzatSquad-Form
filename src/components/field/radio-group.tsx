'use client';

import { ChangeEvent, useCallback, useId, type ReactElement } from 'react';

import { twMerge } from 'tailwind-merge';

import { RadioGroupProps } from './types';

export function RadioGroup({
  option,
  name,
  onChange,
  selected,
  ...props
}: RadioGroupProps): ReactElement {
  const id = useId();

  const radioOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e.target.value);
      }
    },
    [onChange]
  );

  return (
    <div className={twMerge('flex flex-row mr-[32px]')}>
      <input
        id={id}
        type="radio"
        value={option.value}
        name={name}
        checked={option.value === selected}
        onChange={radioOnChange}
        className={twMerge(
          'size-[22px] mr-2 bg-transparent border-[2px] border-solid border-[#FFFFFFbb] checked:border-[#FF14B9] checked:accent-[#FF14B9] appearance-none rounded-full cursor-pointer relative outline-none'
        )}
        {...props}
      />
      <label htmlFor={id} className={'text-white'}>
        {option.label}
      </label>
    </div>
  );
}
