'use client';

import type { ReactElement } from 'react';

import { twMerge } from 'tailwind-merge';

import { File, FileItem } from '../field';
import type { FileProps as UploadFileProps } from '../field/types';

import * as Builder from '../field';

export function UploadFile({
  files,
  rawAccept,
  onChange,
  accept = [],
  className = '',
  maxSize,
  multiple = false,
  errorMessage
}: UploadFileProps): ReactElement {
  const handleOnRemove = (index: number): void => {
    onChange(files.filter((_, i) => index !== i));
  };

  return (
    <main className={twMerge('flex flex-col gap-4 w-full', className)}>
      <File
        files={files}
        onChange={onChange}
        rawAccept={rawAccept}
        accept={accept}
        maxSize={maxSize}
        multiple={multiple}
      />
      <section className="flex flex-col gap-2">
        {files.map((item, index) => (
          <FileItem
            key={index}
            name={item.name}
            inProgress={item.inProgress}
            maximumReached={maxSize ? item.size > maxSize : false}
            onRemove={() => handleOnRemove(index)}
          />
        ))}
        <Builder.ErrorMessage>{errorMessage}</Builder.ErrorMessage>
      </section>
    </main>
  );
}
