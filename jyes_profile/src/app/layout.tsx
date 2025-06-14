// app/layout.tsx
import '../styles/globals.css'
import { Be_Vietnam_Pro } from 'next/font/google'
import MainLayout from '@/components/layout/MainLayout' 

const beVietnam = Be_Vietnam_Pro({
  subsets: ['vietnamese'],
  weight: ['300', '500', '700'],
  display: 'swap',
})

export const metadata = {
  title: "Jye's Profile",
  description: 'Hồ sơ cá nhân trực tuyến của Jye',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
          <link rel="icon" href="/Jye.jpg" type="image/jpeg" />
      </head>
      <body className={beVietnam.className}>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  )
}
