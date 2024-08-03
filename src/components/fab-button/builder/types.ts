import type { ButtonHTMLAttributes, ElementType } from 'react';

export interface ShapeProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export interface IconProps {
  icon: ElementType;
  className?: string;
}
