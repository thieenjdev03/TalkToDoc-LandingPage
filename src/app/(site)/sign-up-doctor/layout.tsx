import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TalkToDoc - Đăng Ký Làm Bác Sĩ',
  description: 'Gia nhập đội ngũ bác sĩ chuyên nghiệp tại TalkToDoc. Đăng ký để trở thành bác sĩ tư vấn trực tuyến và mở rộng sự nghiệp của bạn.',
  keywords: 'TalkToDoc, đăng ký bác sĩ, ứng tuyển, việc làm y tế, tư vấn trực tuyến',
  openGraph: {
    title: 'TalkToDoc - Đăng Ký Làm Bác Sĩ',
    description: 'Gia nhập đội ngũ bác sĩ chuyên nghiệp tại TalkToDoc và mở rộng sự nghiệp.',
    type: 'website',
  }
}

export default function SignUpDoctorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 