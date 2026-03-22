import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { config } from 'dotenv';
import './globals.css';
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
config();

const mainFont = Plus_Jakarta_Sans({
  style: 'normal',
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  fallback: ['sans-serif'],
});

const commonMetaData = {
  title: 'Tic Tac Toe',
  description: 'Game to be first one line',
  images: [`${process.env.NEXT_PUBLIC_BASE_URL}/tic-tac-toe-meta-image.jpg`],
};

export const metadata: Metadata = {
  title: commonMetaData.title,
  description: commonMetaData.description,
  keywords: ['tic tac toe', 'game', 'board'],
  twitter: { ...commonMetaData, card: 'summary_large_image' },
  openGraph: {
    url: process.env.NEXT_PUBLIC_BASE_URL,
    type: 'website',
    ...commonMetaData,
  },
};

const theme = createTheme({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={mainFont.className}>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
