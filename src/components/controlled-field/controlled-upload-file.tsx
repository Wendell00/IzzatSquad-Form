'use client';
import { ReactElement } from 'react';
import { FieldValues, useController } from 'react-hook-form';

import { z } from 'zod';

import { UploadFileProps } from './types';
import { UploadFile } from '../upload-file/upload-file';

export const blob = z.object({
  name: z.string(),
  size: z.number(),
  inProgress: z.boolean(),
  base64: z.string().min(1)
});

export const uploadFile = z.array(blob);

export function ControlledUploadFile<Values extends FieldValues>({
  disabled,
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: UploadFileProps<Values>): ReactElement {
  const { field } = useController({
    name,
    rules,
    shouldUnregister,
    defaultValue,
    control,
    disabled
  });
  return (
    <UploadFile
      files={field.value ?? []}
      onChange={field.onChange}
      {...props}
    />
  );
}
