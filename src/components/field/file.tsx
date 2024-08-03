'use client';

import {
  forwardRef,
  useEffect,
  useMemo,
  useRef,
  type ChangeEventHandler,
  type DragEvent,
  type ReactElement
} from 'react';

import { IconCloudUp } from '@tabler/icons-react';
import { twMerge } from 'tailwind-merge';

import { fileToBase64 } from '@/utils/helpers';

import { getMimeType, getFileType, convertByteToMegabyte } from './helpers';
import type { FileProps } from './types';
import Image from 'next/image';

export const File = forwardRef<HTMLInputElement, FileProps>(function File(
  {
    files,
    onChange,
    onMaximumSizeReached,
    rawAccept,
    maxSize,
    multiple = false,
    accept = [],
    className = ''
  },
  ref
): ReactElement {
  const recentFilesRef = useRef<File[]>([]);

  const setFiles = (value: FileList): void => {
    const parsedValue = Array.from(value);
    recentFilesRef.current = parsedValue;

    if (multiple) {
      onChange([
        ...files,
        ...parsedValue.map((item) => ({
          name: item.name,
          size: convertByteToMegabyte(item.size),
          base64: '',
          inProgress: true
        }))
      ]);
    } else {
      const newFile = parsedValue[0];

      onChange([
        {
          name: newFile.name,
          size: convertByteToMegabyte(newFile.size),
          base64: '',
          inProgress: true
        }
      ]);
    }
  };

  const handleOnDrop = (event: DragEvent): void => {
    event.preventDefault();
    setFiles(event.dataTransfer.files);
  };

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setFiles(event.target.files);
    }
  };

  const onlyFileType = useMemo(
    () => accept.map((item) => getMimeType(item)).join(','),
    [accept]
  );

  const fileType = useMemo(
    () =>
      onlyFileType
        .split(',')
        .map((item) => getFileType(item))
        .join(', '),
    [onlyFileType]
  );

  useEffect(
    function loadFiles() {
      const recentFilesLength = recentFilesRef.current.length;

      if (recentFilesLength > 0 && files.some((item) => item.inProgress)) {
        recentFilesRef.current.forEach((item, index) => {
          if (
            maxSize === undefined ||
            (maxSize && convertByteToMegabyte(item.size) <= maxSize)
          ) {
            fileToBase64(item).then((base64) => {
              const previousFiles = files.slice(0, -recentFilesLength);
              const newFiles = files.slice(-recentFilesLength);
              newFiles[index].base64 = base64;
              newFiles[index].inProgress = false;

              onChange(previousFiles.concat(newFiles));
            });
          } else {
            onMaximumSizeReached && onMaximumSizeReached();
          }
        });

        recentFilesRef.current = [];
      }
    },
    [files, maxSize, onChange, onMaximumSizeReached]
  );

  return (
    <label
      onDrop={handleOnDrop}
      onDragOver={(event) => event.preventDefault()}
      className={twMerge(
        'flex flex-col items-center justify-center cursor-pointer w-full border-[2px] border-dashed border-[#FF14B9] p-8 bg-[#3E424D]',
        className
      )}
    >
      <input
        ref={ref}
        type="file"
        className="hidden"
        accept={accept.length > 0 ? onlyFileType : rawAccept}
        onChange={handleOnChange}
        multiple={multiple}
      />
      <Image
        width={70}
        height={59}
        alt="Suba o comprovante"
        src={'/upload.png'}
        className='mb-[16px]'
      />
      <p className={'text-center text-white'}>
        <span className="text-white font-bold text-[16px]">
          {' '}
          Anexe o comprovante
        </span>
        <br />
        {fileType} {maxSize ? `(Máximo ${maxSize}mb)` : null}
      </p>
    </label>
  );
});
