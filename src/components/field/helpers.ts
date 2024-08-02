import type { FileType } from './types';

export function getFileType(mimeType: string): string {
  switch (mimeType.trim()) {
    case 'audio/aac':
      return 'AAC';
    case 'application/x-abiword':
      return 'ABW';
    case 'image/apng':
      return 'APNG';
    case 'application/x-freearc':
      return 'ARC';
    case 'image/avif':
      return 'AVIF';
    case 'video/x-msvideo':
      return 'AVI';
    case 'application/vnd.amazon.ebook':
      return 'AZW';
    case 'application/octet-stream':
      return 'BIN';
    case 'image/bmp':
      return 'BMP';
    case 'application/x-bzip':
      return 'BZ';
    case 'application/x-bzip2':
      return 'BZ2';
    case 'application/x-cdf':
      return 'CDA';
    case 'application/x-csh':
      return 'CSH';
    case 'text/css':
      return 'CSS';
    case 'text/csv':
      return 'CSV';
    case 'application/msword':
      return 'DOC';
    case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      return 'DOCX';
    case 'application/vnd.ms-fontobject':
      return 'EOT';
    case 'application/epub+zip':
      return 'EPUB';
    case 'application/gzip':
      return 'GZ';
    case 'image/gif':
      return 'GIF';
    case 'text/html':
      return 'HTML';
    case 'image/vnd.microsoft.icon':
      return 'ICO';
    case 'text/calendar':
      return 'ICS';
    case 'application/java-archive':
      return 'JAR';
    case 'image/jpeg':
      return 'JPG';
    case 'text/javascript':
      return 'JS';
    case 'application/json':
      return 'JSON';
    case 'application/ld+json':
      return 'JSONLD';
    case 'audio/midi':
      return 'MID';
    case 'audio/x+midi':
      return 'MIDI';
    case 'audio/mpeg':
      return 'MP3';
    case 'video/mp4':
      return 'MP4';
    case 'video/mpeg':
      return 'MPEG';
    case 'application/vnd.apple.installer+xml':
      return 'MPKG';
    case 'application/vnd.oasis.opendocument.presentation':
      return 'ODP';
    case 'application/vnd.oasis.opendocument.spreadsheet':
      return 'ODS';
    case 'application/vnd.oasis.opendocument.text':
      return 'ODT';
    case 'audio/ogg':
      return 'OGA';
    case 'video/ogg':
      return 'OGV';
    case 'application/ogg':
      return 'OGX';
    case 'audio/ogg':
      return 'OPUS';
    case 'font/otf':
      return 'OTF';
    case 'image/png':
      return 'PNG';
    case 'application/pdf':
      return 'PDF';
    case 'application/x-httpd-php':
      return 'PHP';
    case 'application/vnd.ms-powerpoint':
      return 'PPT';
    case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
      return 'PPTX';
    case 'application/vnd.rar':
      return 'RAR';
    case 'application/rtf':
      return 'RTF';
    case 'application/x-sh':
      return 'SH';
    case 'image/svg+xml':
      return 'SVG';
    case 'application/x-tar':
      return 'TAR';
    case 'image/tiff':
      return 'TIFF';
    case 'video/mp2t':
      return 'TS';
    case 'font/ttf':
      return 'TTF';
    case 'text/plain':
      return 'TXT';
    case 'application/vnd.visio':
      return 'VSD';
    case 'audio/wav':
      return 'WAV';
    case 'audio/webm':
      return 'WEBA';
    case 'video/webm':
      return 'WEBP';
    case 'font/woff':
      return 'WOFF';
    case 'font/woff2':
      return 'WOFF2';
    case 'application/xhtml+xml':
      return 'XHTML';
    case 'application/vnd.ms-excel':
      return 'XLS';
    case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
      return 'XLSX';
    case 'application/xml':
    case 'text/xml':
    case 'application/atom+xml':
      return 'XML';
    case 'application/vnd.mozilla.xul+xml':
      return 'XUL';
    case 'application/zip':
    case 'application/x-zip-compressed':
      return 'ZIP';
    case 'video/3gpp':
    case 'audio/3gpp':
      return '3GP';
    case 'video/3gpp2':
    case 'audio/3gpp2':
      return '3G2';
    case 'application/x-7z-compressed':
      return '7Z';
    default:
      return '';
  }
}

export function getMimeType(mimeType: FileType): string {
  switch (mimeType) {
    case 'AAC':
      return 'audio/aac';

    case 'ABW':
      return 'application/x-abiword';

    case 'APNG':
      return 'image/apng';

    case 'ARC':
      return 'application/x-freearc';

    case 'AVIF':
      return 'image/avif';

    case 'AVI':
      return 'video/x-msvideo';

    case 'AZW':
      return 'application/vnd.amazon.ebook';

    case 'BIN':
      return 'application/octet-stream';

    case 'BMP':
      return 'image/bmp';

    case 'BZ':
      return 'application/x-bzip';

    case 'BZ2':
      return 'application/x-bzip2';

    case 'CDA':
      return 'application/x-cdf';

    case 'CSH':
      return 'application/x-csh';

    case 'CSS':
      return 'text/css';

    case 'CSV':
      return 'text/csv';

    case 'DOC':
      return 'application/msword';

    case 'DOCX':
      return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';

    case 'EOT':
      return 'application/vnd.ms-fontobject';

    case 'EPUB':
      return 'application/epub+zip';

    case 'GZ':
      return 'application/gzip';

    case 'GIF':
      return 'image/gif';

    case 'HTML':
      return 'text/html';

    case 'ICO':
      return 'image/vnd.microsoft.icon';

    case 'ICS':
      return 'text/calendar';

    case 'JAR':
      return 'application/java-archive';

    case 'JPG':
      return 'image/jpeg';

    case 'JS':
      return 'text/javascript';

    case 'JSON':
      return 'application/json';

    case 'JSONLD':
      return 'application/ld+json';

    case 'MID':
      return 'audio/midi';

    case 'MIDI':
      return 'audio/x+midi';

    case 'MP3':
      return 'audio/mpeg';

    case 'MP4':
      return 'video/mp4';

    case 'MPEG':
      return 'video/mpeg';

    case 'MPKG':
      return 'application/vnd.apple.installer+xml';

    case 'ODP':
      return 'application/vnd.oasis.opendocument.presentation';

    case 'ODS':
      return 'application/vnd.oasis.opendocument.spreadsheet';

    case 'ODT':
      return 'application/vnd.oasis.opendocument.text';

    case 'OGA':
      return 'audio/ogg';

    case 'OGV':
      return 'video/ogg';

    case 'OGX':
      return 'application/ogg';

    case 'OPUS':
      return 'audio/ogg';

    case 'OTF':
      return 'font/otf';

    case 'PNG':
      return 'image/png';

    case 'PDF':
      return 'application/pdf';

    case 'PHP':
      return 'application/x-httpd-php';

    case 'PPT':
      return 'application/vnd.ms-powerpoint';

    case 'PPTX':
      return 'application/vnd.openxmlformats-officedocument.presentationml.presentation';

    case 'RAR':
      return 'application/vnd.rar';

    case 'RTF':
      return 'application/rtf';

    case 'SH':
      return 'application/x-sh';

    case 'SVG':
      return 'image/svg+xml';

    case 'TAR':
      return 'application/x-tar';

    case 'TIFF':
      return 'image/tiff';

    case 'TS':
      return 'video/mp2t';

    case 'TTF':
      return 'font/ttf';

    case 'TXT':
      return 'text/plain';

    case 'VSD':
      return 'application/vnd.visio';

    case 'WAV':
      return 'audio/wav';

    case 'WEBA':
      return 'audio/webm';

    case 'WEBP':
      return 'video/webm';

    case 'WOFF':
      return 'font/woff';

    case 'WOFF2':
      return 'font/woff2';

    case 'XHTML':
      return 'application/xhtml+xml';

    case 'XLS':
      return 'application/vnd.ms-excel';

    case 'XLSX':
      return 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';

    case 'XML':
      return 'application/atom+xml,application/xml,text/xml';

    case 'XUL':
      return 'application/vnd.mozilla.xul+xml';

    case 'ZIP':
      return 'application/x-zip-compressed,application/zip';

    case '3GP':
      return 'audio/3gpp,video/3gpp';

    case '3G2':
      return 'audio/3gpp2,video/3gpp2';

    case '7Z':
      return 'application/x-7z-compressed';
  }
}

export function convertByteToMegabyte(value: number): number {
  return value / (1024 * 1024);
}
