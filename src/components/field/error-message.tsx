import type { ReactElement } from 'react';

import type { ErrorMessageProps } from './types';

export function ErrorMessage({ children }: ErrorMessageProps): ReactElement {
  return <span className={''}>{children}</span>;
}
