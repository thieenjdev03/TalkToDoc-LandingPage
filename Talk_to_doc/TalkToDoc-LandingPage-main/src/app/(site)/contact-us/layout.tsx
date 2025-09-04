import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TalkToDoc - Liên Hệ Chúng Tôi',
  description: 'Liên hệ với TalkToDoc để được tư vấn và hỗ trợ. Chúng tôi luôn sẵn sàng lắng nghe và giải đáp mọi thắc mắc của bạn.',
  keywords: 'TalkToDoc, liên hệ, hỗ trợ, tư vấn y tế, đặt câu hỏi',
  openGraph: {
    title: 'TalkToDoc - Liên Hệ Chúng Tôi',
    description: 'Liên hệ với TalkToDoc để được tư vấn và hỗ trợ chuyên nghiệp.',
    type: 'website',
  }
}

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 