export function isNotEmpty(value: string | undefined): boolean {
  return (value ?? '').trim().length > 0;
}

export function isEmpty(value: string | undefined): boolean {
  return (value ?? '').trim().length === 0;
}

export const IS_NOT_EMPTY_MESSAGE = 'Preencha o campo obrigatório.';
