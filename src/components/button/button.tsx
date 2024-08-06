import * as React from 'react';
import Button from '@mui/material/Button';
import { Props } from './types';
import { IconLoader2 } from '@tabler/icons-react';
import { twMerge } from 'tailwind-merge';

function getTheme(variant: 'contained' | 'outlined'): string {
  switch (variant) {
    case 'contained':
      return 'bg-[#FF14B9] hover:bg-[#FF14B9aa] w-[224px]';
    case 'outlined':
      return 'border-[#FF14B9] hover:border-[#FF14B9aa] text-[#FF14B9] w-[224px]';
  }
}

export function ButtonComponent({
  text,
  variant,
  loading,
  type,
  className,
  ...props
}: Props) {
  return (
    <Button
      variant={variant}
      className={twMerge(getTheme(variant), className)}
      type={type}
      {...props}
    >
      {text.toUpperCase()}
      {loading ? (
        <IconLoader2 size={18} className="animate-spin absolute right-4" />
      ) : null}
    </Button>
  );
}
