import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStar,
  faLocationDot,
  faCalendarCheck,
  faHeart,
} from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import router from 'next/router'

export type DoctorCardProps = {
  _id: string
  name: string
  avatar: string
  reviews: number
  avgScore: number
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
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-full sm:max-w-[280px] md:max-w-sm border hover:shadow-lg transition h-[400px] sm:h-[420px] flex flex-col">
      <div className="relative h-32 sm:h-40 md:h-48 flex-shrink-0">
        <Image
          width={100}
          height={100}
          unoptimized
          src={doctor?.avatarUrl || ''}
          alt={doctor.fullName}
          className="w-full h-full object-cover object-center"
        />
        <span className="absolute top-2 left-2 bg-primary text-white text-xs sm:text-sm font-semibold p-1 px-2 rounded-md flex items-center">
          <FontAwesomeIcon icon={faStar} className="mr-1 text-xs sm:text-sm" /> {doctor?.avgScore || 0}
        </span>
        <span
          onClick={toggleFavoriteDoctor}
          className="absolute top-2 right-2 text-xs sm:text-sm font-semibold bg-white opacity-80 rounded-xl p-1 cursor-pointer"
          title={isFavorite ? 'Xóa khỏi yêu thích' : 'Thêm vào yêu thích'}
        >
          <FontAwesomeIcon
            icon={faHeart}
            className={`text-lg sm:text-xl ${isFavorite ? 'text-pink-600' : 'text-gray-400 hover:text-pink-600'} transition-colors duration-200`}
          />
        </span>
      </div>

      <div className="flex flex-col flex-1 p-2 sm:p-3 md:p-4 justify-between">
        <div>
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 line-clamp-1">{doctor.fullName}</h3>
          {doctor?.isActive && (
            <span className="text-xs sm:text-sm bg-green-100 text-green-700 px-2 py-1 rounded-full mt-1 inline-block">
              ● Trực tuyến
            </span>
          )}
          <div className="flex items-center flex-wrap text-xs sm:text-sm md:text-base text-gray-500 mt-2 gap-1">
            <span className="line-clamp-1 flex items-center">
              <FontAwesomeIcon icon={faLocationDot} className="text-blue-500 mr-1" />
              {doctor?.hospital?.name || 'Không rõ bệnh viện'}
            </span>
            <li className="text-xs sm:text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded mx-1 line-clamp-1">{specialtyName}</li>
          </div>
        </div>

        <div className="mt-auto border-t border-gray-200 pt-3 sm:pt-4 flex items-center justify-between">
          <div>
            <p className="text-md sm:text-lg md:text-xl text-gray-500">Giá Tư Vấn:</p>
            <p className="text-base sm:text-lg md:text-xl font-bold text-red-600">
              {doctor?.rank?.base_price?.toLocaleString('vi-VN') || doctor?.price?.toLocaleString('vi-VN') || '---'}đ
            </p>
          </div>
          <button
            onClick={() => router.push(`/doctor/${doctor._id}`)}
            className="w-full sm:w-auto text-sm md:text-base bg-blue-700 hover:bg-blue-800 text-white px-3 py-2 rounded-md flex items-center justify-center gap-2 transition-all"
          >
            <FontAwesomeIcon icon={faCalendarCheck} className="text-base md:text-lg" />
            <span className="hidden sm:inline">Đặt Lịch</span>
          </button>
        </div>
      </div>
    </div>
  )
}