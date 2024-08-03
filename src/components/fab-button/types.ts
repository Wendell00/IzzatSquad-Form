import type {
  ButtonHTMLAttributes,
  ElementType,
  MouseEventHandler
} from 'react';

export interface Props
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  icon: ElementType;
  disabled?: boolean;
  loading?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
