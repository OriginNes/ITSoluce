import './globals.css'
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IT Soluce',
  description: 'Votre professionnel local en solutions informatiques et bureautiques',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
      <Analytics mode={'production'} />;
    </html>
  )
}
