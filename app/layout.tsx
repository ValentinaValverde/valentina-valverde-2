import type { Metadata } from 'next';
import { Bricolage_Grotesque, Public_Sans } from 'next/font/google';
import Navbar from '@/components/Navbar';
import './globals.css';

const bricolageGrotesque = Bricolage_Grotesque({
  variable: '--font-bricolage-grotesque',
  subsets: ['latin'],
});

const publicSans = Public_Sans({
  variable: '--font-public-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Valentina Valverde',
  description: 'Design Engineer professionally, creative at heart. ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolageGrotesque.variable} ${publicSans.variable} antialiased `}
      >
        <Navbar />
        <div className="px-12 md:px-32 lg:px-64">{children}</div>
      </body>
    </html>
  );
}
