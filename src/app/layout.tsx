import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
import { Metadata } from "next";

const font = Noto_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: {
    default: "TalkToDoc - Nền tảng tư vấn y tế trực tuyến",
    template: "%s | TalkToDoc"
  },
  description: "TalkToDoc - Nền tảng tư vấn y tế trực tuyến hàng đầu Việt Nam. Kết nối bạn với bác sĩ chuyên nghiệp mọi lúc, mọi nơi.",
  keywords: "TalkToDoc, tư vấn y tế, bác sĩ trực tuyến, khám bệnh online, chăm sóc sức khỏe",
  authors: [{ name: "TalkToDoc Team" }],
  creator: "TalkToDoc",
  publisher: "TalkToDoc",
  metadataBase: new URL('https://talktodoc.online'),
  icons: {
    icon: [
      { url: '/images/logo/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logo/icon.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/images/logo/icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/images/logo/icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://talktodoc.online',
    siteName: 'TalkToDoc',
    title: 'TalkToDoc - Nền tảng tư vấn y tế trực tuyến',
    description: 'Kết nối với bác sĩ chuyên nghiệp mọi lúc, mọi nơi',
    images: [
      {
        url: '/images/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'TalkToDoc Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TalkToDoc - Nền tảng tư vấn y tế trực tuyến',
    description: 'Kết nối với bác sĩ chuyên nghiệp mọi lúc, mọi nơi',
    images: ['/images/logo/logo.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/logo/icon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/images/logo/icon.png" />
        <meta name="theme-color" content="#3B82F6" />
      </head>
      <body className={`${font.className}`}>
          <ThemeProvider
            attribute="class"
            enableSystem={true}
            defaultTheme="light"
          >
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </ThemeProvider>
      </body>
      <script src="https://kit.fontawesome.com/0607d6f524.js" crossOrigin="anonymous" async></script>
    </html>
  );
}
