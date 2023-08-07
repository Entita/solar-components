import './globals.css'
import Preloader from '@/components/Preloader'

export const metadata = {
  title: 'Solar components',
  description: 'Business website for company called "Solar components".',
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
