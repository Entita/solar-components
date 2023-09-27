import './globals.css'
import Preloader from '@/components/Preloader'
export const metadata = {
  title: 'Solar components',
  description: 'Nabízíme kvalitní úchytné díly pro solární panely na šikmé taškové střechy. Získejte nejlepší montážní systémy pro vaši solární energii.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Preloader>{children}</Preloader>
      </body>
    </html>
  )
}
