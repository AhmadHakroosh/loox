import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ArticlesProvider } from '@/providers'
import { FC, PropsWithChildren } from 'react'
import { classNames } from '@/utils/helpers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Loox Library',
    default: 'Home | Loox Library',
  },
  description: 'Read amazing articles about the latest technologies and trends in the software industry.',
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className={classNames(inter.className, "h-screen lg:overflow-hidden")}>
        <ArticlesProvider>
          {children}
        </ArticlesProvider>
      </body>
    </html>
  )
};

export default RootLayout;
