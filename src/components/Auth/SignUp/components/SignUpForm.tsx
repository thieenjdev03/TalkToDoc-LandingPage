import React, { useEffect, useState } from 'react'
import Loader from '@/components/Common/Loader'
import Swal from 'sweetalert2'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import axios from 'axios'

interface BasePayload {
  fullName: string
  username: string
  password: string
  email: string
  phoneNumber: string
  birthDate: string
  isActive: boolean
  isVerified: boolean
  avatarUrl: string | null
}

interface PatientPayload extends BasePayload {
  address: string
  gender: string
  status: string
}

interface DoctorPayload extends BasePayload {
  specialties: string[]
  status: string
}

interface SignUpFormProps {
  type: 'doctor' | 'patient'
  email: string
  setEmail: (email: string) => void
  loading: boolean
  setLoading: (loading: boolean) => void
}

interface ValidationErrors {
  fullName?: string
  phoneNumber?: string
  birthday?: string
  username?: string
  password?: string
  confirmPassword?: string
  email?: string
  gender?: string
  otp?: string
}

const SignUpForm: React.FC<SignUpFormProps> = ({
  type,
  email,
  setEmail,
  loading,
  setLoading
}) => {
  const [otpSent, setOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);  
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [otpCooldown, setOtpCooldown] = useState(0);
  const [otp, setOtp] = useState('');
  const router = useRouter();
  const title = type === 'doctor' ? 'Đăng ký tài khoản Bác sĩ' : 'Đăng ký tài khoản Bệnh nhân'
  const description =
    type === 'doctor'
      ? 'Dành cho bác sĩ có giấy phép hành nghề, đăng ký để quản lý hồ sơ và tư vấn cho bệnh nhân.'
      : 'Dành cho bệnh nhân muốn đặt lịch hẹn và theo dõi sức khoẻ qua nền tảng.'
  const [errors, setErrors] = useState<ValidationErrors>({})

  const validateFields = (formValues: Record<string, FormDataEntryValue>): boolean => {
    const newErrors: ValidationErrors = {}
    
    // Validate fullName
    if (!formValues.fullName) {
      newErrors.fullName = 'Vui lòng nhập họ và tên'
    } else if ((formValues.fullName as string).length < 2) {
      newErrors.fullName = 'Họ và tên phải có ít nhất 2 ký tự'
    }

    // Validate phoneNumber
    const phoneRegex = /^(0|84|\+84)(3|5|7|8|9)[0-9]{8}$/
    if (!formValues.phoneNumber) {
      newErrors.phoneNumber = 'Vui lòng nhập số điện thoại'
    } else if (!phoneRegex.test(formValues.phoneNumber as string)) {
      newErrors.phoneNumber = 'Số điện thoại không hợp lệ'
    }

    // Validate birthday
    if (!formValues.birthday) {
      newErrors.birthday = 'Vui lòng chọn ngày sinh'
    } else {
      const birthDate = new Date(formValues.birthday as string)
      const today = new Date()
      const age = today.getFullYear() - birthDate.getFullYear()
      if (age < 16) {
        newErrors.birthday = 'Bạn phải đủ 16 tuổi để đăng ký'
      }
    }

    // Validate username
    const usernameRegex = /^[a-zA-Z0-9_]{4,20}$/
    if (!formValues.username) {
      newErrors.username = 'Vui lòng nhập tên đăng nhập'
    } else if (!usernameRegex.test(formValues.username as string)) {
      newErrors.username = 'Tên đăng nhập phải từ 4-20 ký tự, chỉ bao gồm chữ cái, số và dấu gạch dưới'
    }

    // Validate password
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    if (!formValues.password) {
      newErrors.password = 'Vui lòng nhập mật khẩu'
    }

    // Validate confirmPassword
    if (!formValues.confirmPassword) {
      newErrors.confirmPassword = 'Vui lòng nhập lại mật khẩu'
    } else if (formValues.password !== formValues.confirmPassword) {
      newErrors.confirmPassword = 'Mật khẩu nhập lại không khớp'
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formValues.email) {
      newErrors.email = 'Vui lòng nhập email'
    } else if (!emailRegex.test(formValues.email as string)) {
      newErrors.email = 'Email không hợp lệ'
    }

    // Validate gender for patient
    if (type === 'patient' && !formValues.gender) {
      newErrors.gender = 'Vui lòng chọn giới tính'
    }

    // Validate OTP
    if (!otp) {
      newErrors.otp = 'Vui lòng nhập mã OTP'
    } else if (otp.length !== 6) {
      newErrors.otp = 'Mã OTP phải có 6 số'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSendOtp = async () => {
    // Validate email
    if (!email) {
      toast.error('Vui lòng nhập email')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      toast.error('Email không hợp lệ')
      return
    }

    try {
      setIsSendingOtp(true)
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/otp/send`,
        { email },
        { headers: { 'Content-Type': 'application/json' } }
      )

      if (res.status === 200) {
        toast.success('OTP đã được gửi đến email!')
        setOtpSent(true)
        setOtpCooldown(60)
      } else {
        throw new Error(res.data?.message || 'Không thể gửi OTP')
      }
    } catch (err: any) {
      console.error('Send OTP Error:', err)
      Swal.fire({
        title: 'Lỗi gửi OTP!',
        text: err?.response?.data?.message || 'Có lỗi xảy ra khi gửi OTP',
        icon: 'error',
      })
      toast.error(err.message || 'Có lỗi xảy ra khi gửi OTP')
    } finally {
      setIsSendingOtp(false)
    }
  }

  const verifyOtp = async () => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/otp/verify`,
        { email, otp },
        { headers: { 'Content-Type': 'application/json' } }
      )

      if (res.status === 200) {
        setIsOtpVerified(true)
        toast.success('Xác thực OTP thành công!')
        return true
      }
      return false
    } catch (err) {
      console.error('Verify OTP Error:', err)
      toast.error('Mã OTP không hợp lệ')
      return false
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const formData = new FormData(e.currentTarget)
    const formValues = Object.fromEntries(formData.entries())

    // Validate all fields first
    if (!validateFields(formValues)) {
      toast.error('Vui lòng kiểm tra lại thông tin')
      return
    }

    setLoading(true)

    try {
      // Verify OTP first
      if (!isOtpVerified) {
        const verified = await verifyOtp()
        if (!verified) {
          toast.error('Vui lòng xác thực OTP trước khi đăng ký')
          return
        }
      }

      // Prepare payload
      const basePayload: BasePayload = {
        fullName: formValues.fullName as string,
        username: formValues.username as string,
        password: formValues.password as string,
        email: formValues.email as string,
        phoneNumber: formValues.phoneNumber as string,
        birthDate: formValues.birthday as string || '1990-01-01',
        isActive: true,
        isVerified: true,
        avatarUrl: null,
      }

      const payload = type === 'doctor'
        ? {
          ...basePayload,
          specialties: [],
          status: 'pending',
        } as DoctorPayload
        : {
          ...basePayload,
          address: 'Chưa cập nhật',
          gender: formValues.gender as string || 'other',
          status: 'active',
        } as PatientPayload

      // Call API
      const endpoint = type === 'doctor' ? '/api/v1/doctors' : '/api/v1/patients'
      const registerRes = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`,
        payload,
        { headers: { 'Content-Type': 'application/json' } }
      )

      if (registerRes.status === 200 || registerRes.status === 201) {
        const successMessage = type === 'doctor'
          ? 'Đăng ký thành công! Chúng tôi sẽ xem xét và phê duyệt tài khoản của bạn trong thời gian sớm nhất.'
          : 'Bạn có thể đăng nhập ngay bây giờ.'

        await Swal.fire({
          title: 'Đăng ký thành công!',
          text: successMessage,
          icon: 'success',
          confirmButtonText: 'Đăng nhập ngay',
        })

        router.push('https://dashboard.talktodoc.online/')
      }
    } catch (err: any) {
      console.error('Registration Error:', err)
      const errorMessage = err.response?.data?.message || err.message || 'Đã xảy ra lỗi, vui lòng thử lại'
      toast.error(errorMessage)
      Swal.fire({
        title: 'Đã xảy ra lỗi !',
        text: errorMessage,
        icon: 'error',
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (otpCooldown > 0) {
      const timer = setTimeout(() => setOtpCooldown(prev => prev - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [otpCooldown])

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-primary">{title}</h2>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>

      <div className="mb-[12px]">
        <input
          type="text"
          placeholder="Họ và tên *"
          name="fullName"
          required
          onInvalid={e => e.currentTarget.setCustomValidity(errors.fullName || '')}
          onInput={e => {
            e.currentTarget.setCustomValidity('')
            setErrors(prev => ({ ...prev, fullName: undefined }))
          }}
          className={`w-full rounded-md border ${errors.fullName ? 'border-red-500' : 'border-dark_border'} bg-transparent px-5 py-3 text-base text-black placeholder:text-grey focus:border-primary`}
        />
        {errors.fullName && (
          <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
        )}
      </div>
      <div className="mb-[12px]">
        <input
          type="text"
          placeholder="Số điện thoại *"
          name="phoneNumber"
          required
          onInvalid={e => e.currentTarget.setCustomValidity(errors.phoneNumber || '')}
          onInput={e => {
            e.currentTarget.setCustomValidity('')
            setErrors(prev => ({ ...prev, phoneNumber: undefined }))
          }}
          className={`w-full rounded-md border ${errors.phoneNumber ? 'border-red-500' : 'border-dark_border'} bg-transparent px-5 py-3 text-base text-black placeholder:text-grey focus:border-primary`}
        />
        {errors.phoneNumber && (
          <p className="mt-1 text-sm text-red-500">{errors.phoneNumber}</p>
        )}
      </div>
      <div className="mb-[12px]">
        <input
          type="date"
          name="birthday"
          required
          onInvalid={e => e.currentTarget.setCustomValidity(errors.birthday || '')}
          onInput={e => {
            e.currentTarget.setCustomValidity('')
            setErrors(prev => ({ ...prev, birthday: undefined }))
          }}
          className={`w-full rounded-md border ${errors.birthday ? 'border-red-500' : 'border-dark_border'} bg-transparent px-5 py-3 text-base text-black placeholder:text-grey focus:border-primary`}
        />
        {errors.birthday && (
          <p className="mt-1 text-sm text-red-500">{errors.birthday}</p>
        )}
      </div>
      <div className="mb-[12px]">
        <input
          type="text"
          placeholder="Tài khoản đăng nhập *"
          name="username"
          required
          onInvalid={e => e.currentTarget.setCustomValidity(errors.username || '')}
          onInput={e => {
            e.currentTarget.setCustomValidity('')
            setErrors(prev => ({ ...prev, username: undefined }))
          }}
          className={`w-full rounded-md border ${errors.username ? 'border-red-500' : 'border-dark_border'} bg-transparent px-5 py-3 text-base text-black placeholder:text-grey focus:border-primary`}
        />
        {errors.username && (
          <p className="mt-1 text-sm text-red-500">{errors.username}</p>
        )}
      </div>
      <div className="mb-[12px]">
        <input
          type="password"
          placeholder="Mật khẩu *"
          name="password"
          required
          onInvalid={e => e.currentTarget.setCustomValidity(errors.password || '')}
          onInput={e => {
            e.currentTarget.setCustomValidity('')
            setErrors(prev => ({ ...prev, password: undefined }))
          }}
          className={`w-full rounded-md border ${errors.password ? 'border-red-500' : 'border-dark_border'} bg-transparent px-5 py-3 text-base text-black placeholder:text-grey focus:border-primary`}
        />
        {errors.password && (
          <p className="mt-1 text-sm text-red-500">{errors.password}</p>
        )}
      </div>
      <div className="mb-[12px]">
        <input
          type="password"
          placeholder="Nhập lại mật khẩu *"
          name="confirmPassword"
          required
          className={`w-full rounded-md border ${errors.confirmPassword ? 'border-red-500' : 'border-dark_border'} bg-transparent px-5 py-3 text-base text-black placeholder:text-grey focus:border-primary`}
        />
      </div>

      {/* {type === 'doctor' && (
        <>
          <div className="mb-[12px]">
            <input
              type="text"
              placeholder="Mã giấy phép hành nghề *"
              name="licenseNo"
              required
              className="w-full rounded-md border border-dark_border bg-transparent px-5 py-3 text-base text-black placeholder:text-grey focus:border-primary"
            />
          </div>
          <div className="mb-[12px]">
            <input
              type="text"
              placeholder="Bệnh viện/Phòng khám *"
              name="hospital"
              required
              className="w-full rounded-md border border-dark_border bg-transparent px-5 py-3 text-base text-black placeholder:text-grey focus:border-primary"
            />
          </div>
          <div className="mb-[12px]">
            <input
              type="text"
              placeholder="Chức vụ"
              name="position"
              className="w-full rounded-md border border-dark_border bg-transparent px-5 py-3 text-base text-black placeholder:text-grey focus:border-primary"
            />
          </div>
          <div className="mb-[12px]">
            <input
              type="number"
              min="0"
              placeholder="Số năm kinh nghiệm"
              name="experienceYears"
              className="w-full rounded-md border border-dark_border bg-transparent px-5 py-3 text-base text-black placeholder:text-grey focus:border-primary"
            />
          </div>
        </>
      )} */}

      {type === 'patient' && (
        <div className="mb-[12px]">
          <select
            name="gender"
            required
            className={`w-full rounded-md border ${errors.gender ? 'border-red-500' : 'border-dark_border'} bg-transparent px-5 py-3 text-base text-black focus:border-primary`}
          >
            <option value="">Chọn giới tính *</option>
            <option value="male">Nam</option>
            <option value="female">Nữ</option>
            <option value="other">Khác</option>
          </select>
        </div>
      )}

      <div className="flex gap-2 mb-4">
        <div className="flex-1">
          <input
            type="email"
            placeholder="Email *"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onInvalid={e => e.currentTarget.setCustomValidity(errors.email || '')}
            onInput={e => {
              e.currentTarget.setCustomValidity('')
              setErrors(prev => ({ ...prev, email: undefined }))
            }}
            className={`w-full rounded-md border ${errors.email ? 'border-red-500' : 'border-dark_border'} bg-transparent px-5 py-3 text-base text-black placeholder:text-grey focus:border-primary`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>
        <button
          type="button"
          onClick={handleSendOtp}
          disabled={isSendingOtp || otpCooldown > 0}
          className={`px-2 py-1 text-nowrap text-sm rounded-md text-white transition ${
            otpCooldown > 0 || isSendingOtp
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-black hover:bg-gray-800'
          }`}
        >
          {isSendingOtp
            ? 'Đang gửi...'
            : otpCooldown > 0
            ? `Gửi lại sau ${otpCooldown}s`
            : 'Gửi OTP'}
        </button>
      </div>
      <div className="mb-[12px]">
        <input
          type="text"
          placeholder="Nhập mã OTP *"
          name="otp"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className={`w-full rounded-md border ${errors.otp ? 'border-red-500' : 'border-dark_border'} bg-transparent px-5 py-3 text-base text-black placeholder:text-grey focus:border-primary`}
        />
        {errors.otp && (
          <p className="mt-1 text-sm text-red-500">{errors.otp}</p>
        )}
      </div>

      <div className="flex items-start gap-2 mb-4">
        <input
          id="terms"
          type="checkbox"
          required
          className="mt-1 accent-primary p-4"
        />
        <label htmlFor="terms" className="text-body-secondary text-black text-base">
          Tôi đồng ý với các điều khoản và điều kiện
        </label>
      </div>

      <div className="mb-9">
        <button
          type="submit"
          disabled={loading}
          className={`flex w-full text-white items-center justify-center text-base font-medium rounded-md px-5 py-3 transition duration-300 border 
            ${loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-primary hover:bg-transparent hover:text-white border-primary'
            }`}
        >
          {loading ? 'Đang xử lý...' : 'Đăng Ký'} {loading && <Loader />}
        </button>
      </div>
    </form>
  )
}

export default SignUpForm