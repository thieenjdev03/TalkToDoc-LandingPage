import { useRouter } from "next/navigation";

const SwitchSignUpType = ({ setIsSignUpOpen, onSelectType }: { setIsSignUpOpen: (isOpen: boolean) => void, onSelectType: (type: 'doctor' | 'patient' | null) => void }) => {
  const router = useRouter();
  const options = [
    {
      label: 'Đăng ký với tư cách Bác sĩ',
      icon: '🩺',
      onClick: () => {
        router.push('/sign-up-doctor')
        setIsSignUpOpen(false)
      },
    },
    {
      label: 'Đăng ký với tư cách Bệnh nhân',
      icon: '🧑‍⚕️',
      onClick: () => onSelectType('patient'),
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-6 text-primary">TRANG ĐĂNG KÝ</h2>
      <h1 className="text-3xl font-extrabold mb-10 text-gray-800">TÀI KHOẢN TALKTODOC</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {options.map((opt, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col items-center hover:shadow-lg transition-all duration-300"
          >
            <div className="text-6xl mb-4">{opt.icon}</div>
            <h3 className="text-lg font-semibold mb-1">{opt.label}</h3>
            <button
              onClick={opt.onClick}
              className="bg-primary hover:bg-primary/80 text-white font-bold py-2 px-6 rounded"
            >
              ĐĂNG KÝ
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SwitchSignUpType