'use client';

import type { ReactElement } from 'react';

import { IconFile, IconLoader2, IconTrash } from '@tabler/icons-react';
import { twMerge } from 'tailwind-merge';

import type { FileItemProps } from './types';
import { FabButton } from '../fab-button';

export function FileItem({
  name,
  inProgress,
  maximumReached,
  onRemove,
  className = ''
}: FileItemProps): ReactElement {
  return (
    <main
      data-in-progress={inProgress}
      data-maximum-reached={maximumReached}
      className={twMerge(
        'flex items-center justify-between transition-colors w-full py-2 px-6 border-solid rounded-[4px] border-[2px] border-[#FF14B9]',
        className
      )}
    >
      <div className="flex">
        <IconFile
          data-in-progress={inProgress}
          className={twMerge('text-white mr-4')}
        />
        <span data-in-progress={inProgress} className={twMerge('text-white')}>
          {name}
        </span>
      </div>

      {inProgress && !maximumReached ? (
        <IconLoader2
          data-in-progress={inProgress}
          //   className={twMerge('animate-spin', iconColor, iconSize)}
        />
      ) : null}

      {maximumReached ? (
        <span className="text-danger text-sm font-medium">
          {/* {t('inputFile.maxReached')} */}
        </span>
      ) : null}
      <FabButton icon={IconTrash} onClick={onRemove} />
    </main>
  );
}
