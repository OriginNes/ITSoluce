import './globals.css'
import { Inter } from 'next/font/google'
import GoogleAnalytics from 'next-ga';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IT Soluce',
  description: 'Votre professionnel local en solutions informatiques et bureautiques',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="GTM-M544XBK3" />
    </html>
  )
}
