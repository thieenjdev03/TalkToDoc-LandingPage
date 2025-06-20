import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TalkToDoc - Về Chúng Tôi',
  description: 'Tìm hiểu về TalkToDoc - nền tảng tư vấn y tế trực tuyến hàng đầu Việt Nam. Kết nối bạn với bác sĩ mọi lúc, mọi nơi.',
  keywords: 'TalkToDoc, về chúng tôi, tư vấn y tế, bác sĩ trực tuyến, chăm sóc sức khỏe',
  openGraph: {
    title: 'TalkToDoc - Về Chúng Tôi',
    description: 'Tìm hiểu về TalkToDoc - nền tảng tư vấn y tế trực tuyến hàng đầu Việt Nam.',
    type: 'website',
  }
}

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 