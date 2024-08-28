import { z } from 'zod';

import { IS_NOT_EMPTY_MESSAGE, isNotEmpty } from '@/utils/validators';
import { blob } from '@/components/controlled-field';

enum FormType {
    'piloto' = 'piloto',
    'box' = 'box',
    'none' = 'none'
  }

export const schemaBox = z
  .object({
    name: z
      .string()
      .max(60, 'Nome muito grande')
      .refine(isNotEmpty, IS_NOT_EMPTY_MESSAGE),
    phone: z.string().refine(isNotEmpty, IS_NOT_EMPTY_MESSAGE),
    email: z
      .string()
      .email('E-mail inválido')
      .refine(isNotEmpty, IS_NOT_EMPTY_MESSAGE),
    comprovanteWhatsapp: z.string().refine(isNotEmpty, IS_NOT_EMPTY_MESSAGE),
    comprovante: z.array(blob),
    formType: z.nativeEnum(FormType)
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

export type SchemaBox = z.infer<typeof schemaBox>;

export const defaultValuesBox: SchemaBox = {
  name: '',
  phone: '',
  email: '',
  comprovanteWhatsapp: 'nao',
  comprovante: [],
  formType: FormType.none
};
