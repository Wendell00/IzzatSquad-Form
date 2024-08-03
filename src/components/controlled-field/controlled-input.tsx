'use client';
import type { ChangeEvent, ReactElement } from 'react';
import { FieldValues, useController } from 'react-hook-form';

import type { InputProps } from './types';
import { InputText } from '../input-text';

export function ControlledInput<Values extends FieldValues>({
  name,
  rules,
  shouldUnregister,
  defaultValue,
  control,
  disabled,
  onChange,
  ...props
}: InputProps<Values>): ReactElement {
  const { field, fieldState } = useController({
    name,
    rules,
    shouldUnregister,
    defaultValue,
    control,
    disabled
  });

  const handleOnChange = (
    value: string,
    event: ChangeEvent<HTMLInputElement> | undefined
  ): void => {
    field.onChange(value);
    if (onChange) {
      onChange(value, event);
    }
  };

  return (
    <InputText
      {...field}
      {...props}
      errorMessage={fieldState.error?.message}
      onChange={handleOnChange}
    />
  );
}
