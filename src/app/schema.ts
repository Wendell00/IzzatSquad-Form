import { z } from 'zod';

import { IS_NOT_EMPTY_MESSAGE, isNotEmpty } from '@/utils/validators';
import { uploadFile as comprovante } from '@/components/controlled-field';

export const schema = z.object({
  name: z.string().refine(isNotEmpty, IS_NOT_EMPTY_MESSAGE),
  carModel: z.string().refine(isNotEmpty, IS_NOT_EMPTY_MESSAGE),
  phone: z.string().refine(isNotEmpty, IS_NOT_EMPTY_MESSAGE),
  email: z.string().refine(isNotEmpty, IS_NOT_EMPTY_MESSAGE),
  categories: z.string().refine(isNotEmpty, IS_NOT_EMPTY_MESSAGE),
  tshirt: z.string().refine(isNotEmpty, IS_NOT_EMPTY_MESSAGE),
  comprovante
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  name: '',
  carModel: '',
  phone: '',
  email: '',
  categories: '',
  tshirt: '',
  comprovante: []
};
