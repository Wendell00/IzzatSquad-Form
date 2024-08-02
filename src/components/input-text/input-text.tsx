'use client';
import { type ChangeEventHandler, forwardRef, type ReactElement } from 'react';

import { twMerge } from 'tailwind-merge';

import type { InputProps } from './types';

import * as Builder from '../field';

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    label,
    errorMessage,
    type,
    onChange,
    required = false,
    addMaskValue,
    wrapperClass = '',
    ...props
  },
  ref
): ReactElement {
  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (addMaskValue) {
      event.target.value = addMaskValue(event.target.value);
    }

    onChange(event.target.value, event);
  };

  return (
    <main className={twMerge('flex flex-col w-full relative', wrapperClass)}>
      <Builder.Label
        text={<div className="flex gap-2">{label}</div>}
        isRequired={required}
      >
        <Builder.Input
          {...props}
          ref={ref}
          onChange={handleOnChange}
          data-error={Boolean(errorMessage)}
          type={type}
        />
      </Builder.Label>
      <Builder.ErrorMessage>{errorMessage}</Builder.ErrorMessage>
    </main>
  );
});
