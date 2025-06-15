import './globals.css';
import { Inter } from 'next/font/google';
import Providers from '../components/PrivyProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Monad Chain',
  description: 'Next generation blockchain infrastructure',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
