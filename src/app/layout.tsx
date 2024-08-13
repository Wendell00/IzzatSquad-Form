import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { twMerge } from 'tailwind-merge';
import './globals.css';
import { ThemeProvider } from '@/components/themeProvider';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'IZZATSQUAD',
  description: 'IZZATSQUAD DRAG RACE'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          roboto.className,
          'bg-[#1a1a1b] w-screen overflow-x-hidden pt-[120px]'
        )}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
