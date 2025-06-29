'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'

const MobileSignUpType = () => {
  const router = useRouter()

  const options = [
    {
      label: 'Bác sĩ',
      description: 'Cung cấp dịch vụ tư vấn y tế',
      icon: <i className="fa-solid fa-user-doctor"></i>,
      route: '/sign-up-doctor',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      label: 'Bệnh nhân',
      description: 'Nhận tư vấn từ bác sĩ',
      icon: <i className="fa-solid fa-user"></i>,
      route: '/signup',
      color: 'bg-green-500 hover:bg-green-600'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-sm mx-auto pt-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Chào mừng đến với
          </h1>
          <h2 className="text-3xl font-extrabold text-primary mb-4">
            TalkToDoc
          </h2>
          <p className="text-gray-600 text-sm">
            Chọn loại tài khoản để bắt đầu
          </p>
        </div>

        {/* Options */}
        <div className="space-y-4 mb-8">
          {options.map((option, index) => (
            <Link
              key={index}
              href={option.route}
              className="block"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full ${option.color} flex items-center justify-center text-white text-xl`}>
                    {option.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      {option.label}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {option.description}
                    </p>
                  </div>
                  <div className="text-gray-400">
                    <i className="fa-solid fa-chevron-right"></i>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-4">
            Đã có tài khoản?
          </p>
          <Link
            href="/signin"
            className="inline-block bg-primary hover:bg-primary/80 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Đăng nhập ngay
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MobileSignUpType 