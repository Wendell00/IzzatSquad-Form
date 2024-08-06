import { z } from 'zod';

import { IS_NOT_EMPTY_MESSAGE, isNotEmpty } from '@/utils/validators';
import { blob } from '@/components/controlled-field';

export const schema = z
  .object({
    name: z
      .string()
      .max(60, 'Nome muito grande')
      .refine(isNotEmpty, IS_NOT_EMPTY_MESSAGE),
    carModel: z
      .string()
      .max(80, 'Modelo muito grande')
      .refine(isNotEmpty, IS_NOT_EMPTY_MESSAGE),
    phone: z.string().refine(isNotEmpty, IS_NOT_EMPTY_MESSAGE),
    email: z
      .string()
      .email('E-mail inválido')
      .refine(isNotEmpty, IS_NOT_EMPTY_MESSAGE),
    categories: z.string().refine(isNotEmpty, IS_NOT_EMPTY_MESSAGE),
    comprovanteWhatsapp: z.string().refine(isNotEmpty, IS_NOT_EMPTY_MESSAGE),
    tshirt: z.string().refine(isNotEmpty, IS_NOT_EMPTY_MESSAGE),
    comprovante: z.array(blob),
    lote: z.string(),
    number: z.number()
  })
  .superRefine((data, ctx) => {
    if (data.comprovanteWhatsapp === 'nao' && data.comprovante.length === 0) {
      ctx.addIssue({
        code: 'custom',
        path: ['comprovante'],
        message: 'Adicione um comprovante'
      });
    }
  });

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  number: 0,
  lote: '1',
  name: '',
  carModel: '',
  phone: '',
  email: '',
  categories: '',
  tshirt: '',
  comprovanteWhatsapp: 'nao',
  comprovante: []
};
