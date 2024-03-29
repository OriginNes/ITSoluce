"use client";
import './globals.css';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { useEffect } from 'react';
import { initGA, logPageView } from './lib/ga-init'; // Assurez-vous que le chemin est correct

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'IT Soluce',
    description: 'Votre professionnel local en solutions informatiques et bureautiques',
};

export default function RootLayout({ children }) {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (!window.GA_INITIALIZED) {
                initGA();
                window.GA_INITIALIZED = true;
            }
            logPageView();
        }
    }, []);

    return (
        <html lang="fr">
        <body className={inter.className}>
        {children}
        <Analytics mode={'production'} />
        </body>
        </html>
    );
}
