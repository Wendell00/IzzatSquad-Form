import { z } from 'zod';

import { IS_NOT_EMPTY_MESSAGE, isNotEmpty } from '@/utils/validators';

export const schema = z
  .object({
    name: z.string().refine(isNotEmpty, IS_NOT_EMPTY_MESSAGE)
  })
  .superRefine((data, ctx) => {
    if (data.name !== 'carimba@troxa') {
      ctx.addIssue({
        code: 'custom',
        path: ['name'],
        message: 'Senha Errada'
      });
    }
  });

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  name: ''
};
