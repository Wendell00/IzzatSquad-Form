'use client';

import type { ReactElement } from 'react';

import { IconDownload, IconFile } from '@tabler/icons-react';
import { twMerge } from 'tailwind-merge';

import type { FileDownloadItemProps } from './types';

export function FileDownloadItem({
  href,
  name,
  className = ''
}: FileDownloadItemProps): ReactElement {
  const fileName = name.substring(name.lastIndexOf('.') + 1);
  const lastDotIndex = name.lastIndexOf('.');

  return (
    <div>
      <main
        className={twMerge(
          'items-center transition-colors inline-flex  w-full py-2 px-6 border-solid rounded-[4px] border-[2px] border-[#FF14B9]',
          className
        )}
      >
        <IconFile className={''} />
        <span className={twMerge('truncate text-white')}>
          {name.substring(0, lastDotIndex)}
        </span>
        <span className={twMerge('mr-auto text-[#FF14B9]')}>
          {fileName.toUpperCase()}
        </span>

        <a href={href} download={name}>
          <IconDownload className={'text-[#FF14B9]'} />
        </a>
      </main>
    </div>
  );
}
