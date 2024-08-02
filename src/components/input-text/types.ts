import { ChangeEvent, InputHTMLAttributes } from 'react';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  label?: string;
  errorMessage?: string;
  required?: boolean;
  onChange: (value: string, event?: ChangeEvent<HTMLInputElement>) => void;
  wrapperClass?: string;
  addMaskValue?: (value: string) => string;
}
