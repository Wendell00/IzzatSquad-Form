export interface UploadFileProps extends Omit<FileProps, 'size'> {
  size?: Size;
}
