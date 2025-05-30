import React, { useEffect, useState } from 'react'
import { DoctorCardProps } from './DoctorCard'
import { faComments, faHeart, faPhone, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  open: boolean
  onClose: () => void
  doctor: DoctorCardProps | null
}

export default function DoctorModal({ open, onClose, doctor }: Props) {
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    if (!doctor) return
    const storedList = localStorage.getItem('favorite_doctors')
    const wishlist = storedList ? JSON.parse(storedList) : []
    const exists = wishlist.some((d: any) => d.name === doctor.name)
    setIsFavorite(exists)
  }, [doctor])

  if (!open || !doctor) return null

  const toggleWishlist = () => {
    if (!doctor) return
    const storedList = localStorage.getItem('favorite_doctors')
    let wishlist = storedList ? JSON.parse(storedList) : []

    const exists = wishlist.some((d: any) => d.name === doctor.name)

    if (exists) {
      wishlist = wishlist.filter((d: any) => d.name !== doctor.name)
      setIsFavorite(false)
    } else {
      wishlist.push(doctor)
      setIsFavorite(true)
    }

    localStorage.setItem('favorite_doctors', JSON.stringify(wishlist))
  }

  const specialties = doctor.specialty
    ?.split(',')
    .map((s) => s.trim())
    .filter((s) => s)

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl p-4 sm:p-6 max-w-4xl w-full shadow-lg relative overflow-y-auto max-h-[90vh]">
        <button
          className="absolute top-3 right-4 text-gray-500 hover:text-red-600 text-xl"
          onClick={onClose}
        >
          ×
        </button>

        <div className="flex flex-col md:flex-row gap-4 items-start">
          {/* Left: Avatar + Wish */}
          <div className="flex flex-col gap-2 items-center w-full md:w-auto">
            <Image
              src={doctor.avatar}
              unoptimized
              alt={doctor.name}
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg object-cover object-center"
              width={150}
              height={150}
            />
            <div
              className={`add-wish-list-label px-3 py-1 rounded-lg flex items-center gap-1 cursor-pointer transition w-full justify-center ${
                isFavorite ? 'bg-red-100' : 'bg-slate-200 hover:bg-red-100'
              }`}
              onClick={toggleWishlist}
            >
              <FontAwesomeIcon icon={faHeart} className={`${isFavorite ? 'text-red-600' : 'bg-slate-200'}`} />
              <span className="text-sm text-black">
                {isFavorite ? 'Đã yêu thích' : 'Thêm vào yêu thích'}
              </span>
            </div>
          </div>

          {/* Center: Info */}
          <div className="flex-1 space-y-2 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800">{doctor.name}</h2>
              <span className="text-xs text-green-600 font-semibold">● Đang hoạt động</span>
            </div>

            {specialties?.length > 0 && (
              <div className="flex flex-wrap gap-1 text-sm text-gray-600">
                <span className="whitespace-nowrap">Chuyên khoa:</span>
                {specialties.map((s, index) => (
                  <span
                    key={index}
                    className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded"
                  >
                    {s}
                  </span>
                ))}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <p className="text-sm text-gray-600">Bệnh viện: {doctor.hospital?.name}</p>
              <p className="text-sm text-gray-600">Chức vụ: {doctor.position}</p>
              <p className="text-sm text-gray-600">Địa điểm: {doctor.location}</p>
              <p className="text-sm text-gray-600">Kinh nghiệm: {doctor.experience} năm</p>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <p className="text-lg text-gray-600">
              Giá khám: {(doctor.price*1000)?.toLocaleString('vi-VN')} VNĐ
            </p>
            <Link 
              href={process.env.NEXT_PUBLIC_DASHBOARD_URL || "/"} 
              className="bg-blue-600 hover:bg-blue-700 text-white text-center px-4 py-2 rounded text-sm w-full md:w-auto"
            >
              Đặt lịch hẹn
            </Link>

            <div className="flex items-center gap-1">
              <span className="text-yellow-500">⭐</span>
              <span className="text-sm font-semibold">{doctor.rating}</span>
              <span className="text-sm text-gray-500">
                ({doctor.reviews} đánh giá)
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-sm text-gray-500">Hỗ trợ qua:</span>
              <div className="flex gap-2 flex-wrap">
                <button className="flex items-center gap-1 text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded flex-1 md:flex-none">
                  <FontAwesomeIcon icon={faComments} /> Chat
                </button>
                <button className="flex items-center gap-1 text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded flex-1 md:flex-none">
                  <FontAwesomeIcon icon={faPhone} /> Gọi âm thanh
                </button>
                <button className="flex items-center gap-1 text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded flex-1 md:flex-none">
                  <FontAwesomeIcon icon={faVideo} /> Video
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}