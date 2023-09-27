import Head from 'next/head'
import './globals.css'
import Preloader from '@/components/Preloader'
export const metadata = {
  title: 'Solar components',
  description: 'Nabízíme kvalitní úchytné díly pro solární panely na šikmé taškové střechy. Získejte nejlepší montážní systémy pro vaši solární energii, zvyšují výkon vašeho solárního systému. Objednejte si ještě dnes pro efektivní solární energii.',

}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light">
      <Head>
        <meta name="keywords" content="Úchytné díly pro solární panely, Solární montáž na šikmé střechy, Šikmé taškové střechy, Montáž solárních panelů, Solární montážní systémy, Maximální výkon solárního systému, Ekologická energie, Investice do solárního systému, Snížení nákladů na elektřinu" />
      </Head>
      <body>
        <Preloader>{children}</Preloader>
      </body>
    </html>
  )
}
