import type { ReactElement } from 'react';

import { twMerge } from 'tailwind-merge';

import type { ShapeProps } from './types';

export function Shape({ className = '', ...props }: ShapeProps): ReactElement {
  return (
    <button
      {...props}
      className={twMerge(
        'relative flex items-center justify-center transition-colors group',
        className
      )}
    />
  );
}
