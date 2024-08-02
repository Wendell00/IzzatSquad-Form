import { FileProps } from '../field/types';

export interface UploadFileProps extends Omit<FileProps, 'size'> {}
