import React, { ReactElement } from 'react';

import * as Builder from './builder';
import { FileProps } from './types';

export function FileDownloadItem({ href, name }: FileProps): ReactElement {
  return <Builder.FileDownloadItem href={href} name={name} />;
}
