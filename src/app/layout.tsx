import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { config } from 'dotenv';
import './globals.css';
config();

const poppins = Poppins({
  style: 'normal',
  weight: ['100', '400', '700', '900'],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
