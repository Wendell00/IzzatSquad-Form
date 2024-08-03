'use client';
import { type ReactElement } from 'react';
import { FieldValues, useController } from 'react-hook-form';

import { Select } from '../input-select/input-select';

import { Option } from '@/utils/types';

import type { SelectProps } from './types';

export function ControlledSelect<Values extends FieldValues>({
  name,
  rules,
  shouldUnregister,
  defaultValue,
  control,
  disabled,
  options,
  onChange,
  ...props
}: SelectProps<Values>): ReactElement {
  const { field, fieldState } = useController({
    name,
    rules,
    shouldUnregister,
    defaultValue,
    control,
    disabled
  });

  const handleOnChange = (option: Option): void => {
    onChange && onChange(option);
    field.onChange(option.value);
  };

  return (
    <Select
      {...props}
      value={field.value}
      options={options}
      onChange={handleOnChange}
      errorMessage={fieldState.error?.message}
      disabled={disabled}
    />
  );
}
