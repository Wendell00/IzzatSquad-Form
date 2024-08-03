'use client';
import type { ReactElement } from 'react';

import { IconLoader2 } from '@tabler/icons-react';

import * as Builder from './builder';
import type { Props } from './types';

export function FabButton({
  onClick,
  type,
  icon: Icon,
  disabled = false,
  loading = false,
  className = ''
}: Props): ReactElement {
  return (
    <Builder.Shape
      data-loading={loading}
      onClick={onClick}
      type={type}
      disabled={disabled || loading}
      className={className}
    >
      {loading ? (
        <Builder.Icon icon={IconLoader2} className="animate-spin" />
      ) : (
        <Builder.Icon icon={Icon} className="text-red-600" />
      )}
    </Builder.Shape>
  );
}
