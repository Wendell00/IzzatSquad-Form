import type {
  ChangeEvent,
  ChangeEventHandler,
  ElementType,
  HTMLInputTypeAttribute
} from 'react';
import type { FieldValues, UseControllerProps } from 'react-hook-form';

import type { Option } from '@/components/field/types';

import type { SelectProps as RawSelectProps } from '../input-select/types';

import type { InputProps as RawInputProps } from '../input-text/types';

import type { UploadFileProps as RawUploadFileProps } from '../upload-file';

export interface InputProps<Values extends FieldValues>
  extends UseControllerProps<Values>,
    Omit<
      RawInputProps,
      | 'name'
      | 'defaultValue'
      | 'disabled'
      | 'value'
      | 'onChange'
      | 'onBlur'
      | 'errorMessage'
    > {
  wrapperClass?: string;
  type?: HTMLInputTypeAttribute;
  onChange?: (value: string, event?: ChangeEvent<HTMLInputElement>) => void;
}

export interface InputRadioProps<Values extends FieldValues>
  extends UseControllerProps<Values>,
    Omit<
      RawInputProps,
      | 'name'
      | 'defaultValue'
      | 'disabled'
      | 'value'
      | 'onChange'
      | 'onBlur'
      | 'errorMessage'
      | 'type'
      | 'size'
    > {
  wrapperClass?: string;
  options: Option[];
  onChange?: (value: string) => void;
}

export interface ToggleProps<Values extends FieldValues>
  extends UseControllerProps<Values> {
  label?: string;
  labelPosition?: 'left' | 'right' | 'top' | 'bottom';
  backgroundIcon?: ElementType;
  dotIcon?: ElementType;
}

export interface SelectProps<Values extends FieldValues>
  extends UseControllerProps<Values>,
    Omit<RawSelectProps, 'value' | 'onChange'> {
  onChange?: (option: Option) => void;
}

export interface UploadFileProps<Values extends FieldValues>
  extends UseControllerProps<Values>,
    Omit<RawUploadFileProps, 'files' | 'onChange'> {}
