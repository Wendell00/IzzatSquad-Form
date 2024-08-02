import { InputHTMLAttributes } from 'react';

export interface Option {
  value: string;
  label: string;
}

export interface RadioGroupProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'checked' | 'value' | 'onChange'
  > {
  options: Option[];
  errorMessage?: string;
  selected: string;
  onChange: (value: string) => void;
  wrapperClass?: string;
  label?: string;
  required?: boolean;
  name: string;
}
