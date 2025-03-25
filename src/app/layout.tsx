import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Muhamad Erzie Aldrian Nugraha',
  description: 'My Portofolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-backgroundLight text-textLight dark:bg-backgroundDark dark:text-textDark">
        {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-blue-500`}
      > */}
        {children}
      </body>
    </html>
  );
}
