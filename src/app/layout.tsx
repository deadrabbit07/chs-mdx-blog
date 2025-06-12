import type { Metadata } from 'next';

import Footer from './footer';
import './globals.css';
import Header from './header';

export const metadata: Metadata = {
  title: 'CHS BLOG',
  description: 'CHS BLOG',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body>
        <div className='flex flex-col min-h-screen'>
          <Header />
          <main className='flex-grow'>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
