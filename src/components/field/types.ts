import {
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  OptionHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes
} from 'react';

export type FileType =
  | 'AAC'
  | 'ABW'
  | 'APNG'
  | 'ARC'
  | 'AVIF'
  | 'AVI'
  | 'AZW'
  | 'BIN'
  | 'BMP'
  | 'BZ'
  | 'BZ2'
  | 'CDA'
  | 'CSH'
  | 'CSS'
  | 'CSV'
  | 'DOC'
  | 'DOCX'
  | 'EOT'
  | 'EPUB'
  | 'GZ'
  | 'GIF'
  | 'HTML'
  | 'ICO'
  | 'ICS'
  | 'JAR'
  | 'JPG'
  | 'JS'
  | 'JSON'
  | 'JSONLD'
  | 'MID'
  | 'MIDI'
  | 'MP3'
  | 'MP4'
  | 'MPEG'
  | 'MPKG'
  | 'ODP'
  | 'ODS'
  | 'ODT'
  | 'OGA'
  | 'OGV'
  | 'OGX'
  | 'OPUS'
  | 'OTF'
  | 'PNG'
  | 'PDF'
  | 'PHP'
  | 'PPT'
  | 'PPTX'
  | 'RAR'
  | 'RTF'
  | 'SH'
  | 'SVG'
  | 'TAR'
  | 'TIFF'
  | 'TS'
  | 'TTF'
  | 'TXT'
  | 'VSD'
  | 'WAV'
  | 'WEBA'
  | 'WEBP'
  | 'WOFF'
  | 'WOFF2'
  | 'XHTML'
  | 'XLS'
  | 'XLSX'
  | 'XML'
  | 'XUL'
  | 'ZIP'
  | '3GP'
  | '3G2'
  | '7Z';

export interface Blob {
  name: string;
  size: number;
  base64: string;
  inProgress: boolean;
}

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  text: ReactNode;
  isRequired?: boolean;
}

export interface ErrorMessageProps {
  children: ReactNode;
}

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {}

export interface FileItemProps {
  name: string;
  inProgress: boolean;
  maximumReached: boolean;
  onRemove: () => void;
  className?: string;
}

export interface FileProps {
  files: Blob[];
  onChange: (value: Blob[]) => void;
  onMaximumSizeReached?: () => void;
  multiple?: boolean;
  maxSize?: number; // mb size
  rawAccept?: string;
  accept?: FileType[];
  className?: string;
}

export interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement> {}

export interface ShapeProps {
  children: ReactNode;
}

export interface WrapperOptionProps extends HTMLAttributes<HTMLDivElement> {}

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLButtonElement>, 'size' | 'children'> {
  placeholder?: string;
}

export interface Option {
  value: string;
  label: string;
}

export interface RadioGroupProps {
  option: Option;
  name: string;
  onChange: (value: string) => void;
  selected: string;
  className?: string;
}
