import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStar,
  faLocationDot,
  faCalendarCheck,
  faHeart,
} from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export type DoctorCardProps = {
  _id: string
  name: string
  avatar: string
  reviews: number
  avatarUrl?: string
  fullName: string
  rating: number
  specialty: any
  isActive?: boolean
  location?: string
  city?: string
  experience?: number
  profession?: string
  position?: string
  duration?: string
  price?: number
  hospital?: {
    name: string
  }
  rank?: any
}

export default function DoctorCard({ doctor }: { doctor: DoctorCardProps }) {
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorite_doctors') || '[]')
    const found = favorites.some((doc: any) => doc._id === doctor._id)
    setIsFavorite(found)
  }, [doctor._id])

  const toggleFavoriteDoctor = () => {
    const favorites = JSON.parse(localStorage.getItem('favorite_doctors') || '[]')
    const exists = favorites.some((doc: any) => doc._id === doctor._id)
    let updated

    if (exists) {
      updated = favorites.filter((doc: any) => doc._id !== doctor._id)
      setIsFavorite(false)
    } else {
      updated = [...favorites, doctor]
      setIsFavorite(true)
    }

    localStorage.setItem('favorite_doctors', JSON.stringify(updated))
  }

  const specialtyName =
    typeof doctor.specialty === 'string'
      ? doctor.specialty
      : doctor.specialty?.[0]?.name || ''

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-[280px] sm:max-w-sm border hover:shadow-lg transition h-[380px] sm:h-[420px]">
      <div className="relative">
        <Image
          width={100}
          height={100}
          unoptimized
          src={doctor?.avatarUrl || ''}
          alt={doctor.fullName}
          className="w-full h-40 sm:h-48 object-cover object-center"
        />
        <span className="absolute top-2 left-2 bg-primary text-white text-xs font-semibold p-1 rounded-md">
          <FontAwesomeIcon icon={faStar} className="mr-1" /> {doctor?.rating || 0}
        </span>
        <span
          onClick={toggleFavoriteDoctor}
          className="absolute top-2 right-2 text-xs font-semibold bg-white opacity-80 rounded-xl p-1 cursor-pointer"
          title={isFavorite ? 'Xóa khỏi yêu thích' : 'Thêm vào yêu thích'}
        >
          <FontAwesomeIcon
            icon={faHeart}
            className={`text-lg ${isFavorite ? 'text-pink-600' : 'text-gray-400 hover:text-pink-600'} transition-colors duration-200`}
          />
        </span>
      </div>

      <div className="p-3 sm:p-4 flex flex-col justify-between h-[calc(100%-160px)] sm:h-[calc(100%-208px)]">
        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-base sm:text-lg font-bold text-gray-800 line-clamp-1">{doctor.fullName}</h3>
          </div>
          <div className="flex items-center gap-2 mt-1">
            {doctor?.isActive && (
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                ● Trực tuyến
              </span>
            )}
          </div>
          <div className="flex items-center flex-wrap text-xs sm:text-sm text-gray-500 mt-2 gap-1 h-[50px] sm:h-[60px]">
            
            <span className="line-clamp-2"><FontAwesomeIcon icon={faLocationDot} className="text-blue-500 mr-1" />{doctor?.hospital?.name || 'Không rõ bệnh viện'}</span>
            <li className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded mx-1 line-clamp-1">{specialtyName}</li>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-3 sm:mt-4 pt-3 sm:pt-4 flex items-center justify-between">
          <div>
            <p className="text-xs sm:text-sm text-gray-500 mb-1">Giá Tư Vấn:</p>
            <p className="text-base sm:text-lg font-bold text-red-600">
              {doctor?.rank?.base_price?.toLocaleString('vi-VN') || doctor?.price?.toLocaleString('vi-VN') || '---'}đ
            </p>
          </div>
          <button className="text-xs sm:text-sm bg-blue-700 hover:bg-blue-800 text-white px-1 sm:px-4 py-1 sm:py-2 rounded-md flex items-center gap-1 sm:gap-2">
            <FontAwesomeIcon icon={faCalendarCheck} />
            <span className="hidden lg:inline">Đặt Lịch</span>
            <span className="lg:hidden">Đặt</span>
          </button>
        </div>
      </div>
    </div>
  )
}