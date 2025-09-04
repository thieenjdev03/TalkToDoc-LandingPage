import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chọn loại tài khoản - TalkToDoc',
  description: 'Chọn loại tài khoản để đăng ký trên TalkToDoc',
}

export default function SignUpTypeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  )
} 