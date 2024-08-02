'use client';

import React, { ReactElement } from 'react';

import { twMerge } from 'tailwind-merge';

import * as Builder from '../field';
import { RadioGroupProps } from './types';

export function RadioGroup({
  options,
  selected = '',
  name,
  onChange,
  required,
  label,
  errorMessage,
  wrapperClass,
  ...props
}: RadioGroupProps): ReactElement {
  return (
    <main className={twMerge('flex items-center justify-center', wrapperClass)}>
      <Builder.Label
        text={<div className="flex gap-2">{label}</div>}
        isRequired={required}
      >
        <Builder.Shape>
          {options.map((radio, index) => (
            <Builder.RadioGroup
              name={name}
              key={index}
              onChange={onChange}
              option={radio}
              selected={selected}
              {...props}
            />
          ))}
        </Builder.Shape>
        <Builder.ErrorMessage>{errorMessage}</Builder.ErrorMessage>
      </Builder.Label>
    </main>
  );
}
