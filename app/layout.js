import { Fraunces, Inter } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-fraunces',
  display: 'swap'
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap'
});

export const metadata = {
  title: 'Breeze Financial, LLC | Independent advice for the life you’re building',
  description:
    'Boutique financial planning, investments, and insurance from Patty M. Breeze, CFP®, CLU. Serving Kentucky and Florida since 2002.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
