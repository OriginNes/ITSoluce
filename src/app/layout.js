// RootLayout.js ou _app.js
import './globals.css';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import GaInitializer from './components/GaInitializer'; // Assurez-vous que le chemin est correct

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'IT Soluce',
  description: 'Votre professionnel local en solutions informatiques et bureautiques',
};

export default function RootLayout({ children }) {
  return (
      <html lang="fr">
      <body className={inter.className}>
      {children}
      <Analytics mode={'production'} />
      <GaInitializer /> {/* Marquez ce composant pour exécution côté client */}
      </body>
      </html>
  );
}
