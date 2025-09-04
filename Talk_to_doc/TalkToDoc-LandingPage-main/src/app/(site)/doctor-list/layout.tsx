import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TalkToDoc - Đội Ngũ Bác Sĩ',
  description: 'Khám phá đội ngũ bác sĩ chuyên nghiệp tại TalkToDoc. Các bác sĩ được cấp phép hành nghề với nhiều năm kinh nghiệm trong lĩnh vực y tế.',
  keywords: 'TalkToDoc, bác sĩ, đội ngũ y tế, chuyên gia, tư vấn sức khỏe',
  openGraph: {
    title: 'TalkToDoc - Đội Ngũ Bác Sĩ',
    description: 'Đội ngũ bác sĩ chuyên nghiệp với nhiều năm kinh nghiệm tại TalkToDoc.',
    type: 'website',
  }
}

export default function DoctorListLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 