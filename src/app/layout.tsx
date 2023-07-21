import './globals.css'
import type { Metadata } from 'next'
import { Bungee_Outline, Bebas_Neue, Montserrat } from 'next/font/google'

const bungeeOutline = Bungee_Outline({
  subsets: ['latin'],
  weight: '400',
  variable: '--title-primary',
})
const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--title-secondary',
})
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--default',
})

export const metadata: Metadata = {
  title: 'Robust Habit',
  description:
    'Robust Habit: Sua Academia para Transformação Física e Mental. Desenvolva hábitos saudáveis, fortaleça seu corpo e mente com nossa abordagem holística. Treinamento personalizado, nutrição balanceada e apoio psicológico. Junte-se a nós hoje!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${bungeeOutline.variable} ${bebasNeue.variable} ${montserrat.variable} bg-primary text-white`}
      >
        {children}
      </body>
    </html>
  )
}
