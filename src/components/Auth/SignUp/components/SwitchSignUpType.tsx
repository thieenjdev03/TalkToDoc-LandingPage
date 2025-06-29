import { useRouter } from "next/navigation";

const SwitchSignUpType = ({ setIsSignUpOpen, onSelectType }: { setIsSignUpOpen?: (isOpen: boolean) => void, onSelectType: (type: 'doctor' | 'patient' | null) => void }) => {
  const router = useRouter();
  const options = [
    {
      label: 'Đăng ký với tư cách Bác sĩ',
      description: 'Dành cho các bác sĩ muốn cung cấp dịch vụ tư vấn',
      icon: <i className="fa-solid fa-user-doctor"></i>,
      onClick: () => {
        router.push('/sign-up-doctor')
        if (setIsSignUpOpen) setIsSignUpOpen(false)
      },
    },
    {
      label: 'Đăng ký với tư cách Bệnh nhân',
      description: 'Dành cho bệnh nhân muốn nhận tư vấn từ bác sĩ',
      icon: <i className="fa-solid fa-user"></i>,
      onClick: () => onSelectType('patient'),
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-primary text-center">TRANG ĐĂNG KÝ</h2>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-6 sm:mb-8 text-gray-800 text-center">TÀI KHOẢN TALKTODOC</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {options.map((opt, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 sm:p-6 text-center flex flex-col items-center hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={opt.onClick}
            >
              <div className="text-3xl sm:text-4xl md:text-6xl mb-3 sm:mb-4 text-primary">{opt.icon}</div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-800">{opt.label}</h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 text-center">{opt.description}</p>
              <button
                className="bg-primary hover:bg-primary/80 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg w-full transition-colors duration-200 text-sm sm:text-base"
              >
                ĐĂNG KÝ
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SwitchSignUpType