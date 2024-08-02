import type { ReactElement } from 'react';

import { twMerge } from 'tailwind-merge';

import { ShapeProps } from './types';

export function Shape({ children }: ShapeProps): ReactElement {
  return <div className={twMerge(`flex lg:flex-row flex-col lg:gap-0 gap-4`)}>{children}</div>;
}
