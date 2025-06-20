import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TalkToDoc - Bảng Giá Dịch Vụ',
  description: 'Xem bảng giá chi tiết các dịch vụ tư vấn y tế trực tuyến tại TalkToDoc. Giá cả minh bạch, dịch vụ chất lượng cao.',
  keywords: 'TalkToDoc, bảng giá, dịch vụ y tế, tư vấn trực tuyến, giá khám bệnh',
  openGraph: {
    title: 'TalkToDoc - Bảng Giá Dịch Vụ',
    description: 'Bảng giá minh bạch các dịch vụ tư vấn y tế trực tuyến tại TalkToDoc.',
    type: 'website',
  }
}

export default function ServicesPriceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 