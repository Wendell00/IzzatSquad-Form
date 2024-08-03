export interface Props {
  text: string;
  variant: 'contained' | 'outlined';
  loading?: boolean;
  type?: 'button' | 'reset' | 'submit';
}
