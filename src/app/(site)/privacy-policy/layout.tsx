import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TalkToDoc - Chính Sách Bảo Mật',
  description: 'Tìm hiểu về chính sách bảo mật của TalkToDoc. Chúng tôi cam kết bảo vệ thông tin cá nhân và dữ liệu y tế của bạn một cách an toàn nhất.',
  keywords: 'TalkToDoc, chính sách bảo mật, điều khoản dịch vụ, bảo vệ thông tin, quyền riêng tư',
  openGraph: {
    title: 'TalkToDoc - Chính Sách Bảo Mật',
    description: 'Chính sách bảo mật và điều khoản sử dụng dịch vụ TalkToDoc.',
    type: 'website',
  }
}

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 