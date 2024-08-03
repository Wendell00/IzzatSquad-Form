'use client';

import type { ReactElement } from 'react';
import { FieldValues, useController } from 'react-hook-form';

import { InputRadioProps } from './types';
import { RadioGroup } from '../radio-group';

export function ControlledRadioGroup<Values extends FieldValues>({
  name,
  rules,
  shouldUnregister,
  defaultValue,
  control,
  disabled,
  options,
  onChange,
  ...props
}: InputRadioProps<Values>): ReactElement {
  const { field, fieldState } = useController({
    name,
    rules,
    shouldUnregister,
    defaultValue,
    control,
    disabled
  });

  const handleOnChange = (value: string): void => {
    if (onChange) {
      onChange(value);
    }
    field.onChange(value);
  };

  return (
    <RadioGroup
      {...props}
      name={name}
      errorMessage={fieldState.error?.message}
      options={options}
      selected={field.value}
      disabled={disabled}
      onChange={handleOnChange}
    />
  );
}
