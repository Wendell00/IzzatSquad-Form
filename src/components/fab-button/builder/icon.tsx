import type { ReactElement } from 'react';

import { twMerge } from 'tailwind-merge';

import type { IconProps } from './types';

export function Icon({
  icon: ElementIcon,

  className = ''
}: IconProps): ReactElement {
  return <ElementIcon className={twMerge(className)} />;
}
