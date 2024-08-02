export async function fileToBase64(
    file: File,
    progressFn?: (event: ProgressEvent<FileReader>) => void
  ): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      if (progressFn) {
        reader.onprogress = progressFn;
      }
  
      reader.onload = (): void => resolve(reader.result as string);
      reader.onerror = reject;
    });
  }