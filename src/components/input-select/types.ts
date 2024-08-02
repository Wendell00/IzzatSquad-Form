import { ReactElement } from 'react';

export interface Option {
  value: string;
  label: string;
}

export interface SelectProps {
  options: Option[];
  value: string;
  onChange: (option: Option) => void;
  label?: string;
  errorMessage?: string;
  renderIcon?: (option: Option) => ReactElement;
  className?: string;
  wrapperClass?: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
}
