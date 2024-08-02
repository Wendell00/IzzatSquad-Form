'use client';

import type { ReactElement } from 'react';

import { IconFile, IconLoader2, IconTrash } from '@tabler/icons-react';
import { twMerge } from 'tailwind-merge';

import type { FileItemProps } from './types';

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
        'flex items-center transition-colors',
        // Object.values(fileItem.shape),
        // Object.values(sizeTheme),
        // Object.values(text),
        // Object.values(padding),
        // Object.values(apperance),
        className
      )}
    >
      <IconFile
        data-in-progress={inProgress}
        // className={twMerge(iconSize, iconColor)}
      />
      <span
        data-in-progress={inProgress}
        // className={twMerge('mr-auto', textColor)}
      >
        {name}
      </span>

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
      {/* <FabButton icon={IconTrash} variant="danger" onClick={onRemove} /> */}
    </main>
  );
}
