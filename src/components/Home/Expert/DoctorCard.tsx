import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faLocationDot,
  faCalendarCheck,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import Image from 'next/image';
export type DoctorCardProps = {
  _id: string;
  name: string;
  avatar: string;
  reviews: number;
  avatarUrl?: string;
  fullName: string;
  rating: number;
  specialty: any;
  isActive?: boolean;
  location?: string;
  city?: string;
  experience?: number;
  profession?: string;
  position?: string;
  duration?: string;
  price?: number;
  hospital?: {
    name: string;
  };
  rank?: any;
};

export default function DoctorCard({ doctor }: { doctor: DoctorCardProps }) {
  const [isFavorite, setIsFavorite] = useState(false);

  // ✅ Check if doctor is in favorite list on mount
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorite_doctors') || '[]');
    const found = favorites.some((doc: any) => doc._id === doctor._id);
    setIsFavorite(found);
  }, [doctor._id]);

  // ✅ Toggle add/remove from localStorage
  const toggleFavoriteDoctor = () => {
    const favorites = JSON.parse(localStorage.getItem('favorite_doctors') || '[]');
    const exists = favorites.some((doc: any) => doc._id === doctor._id);
    let updated;

    if (exists) {
      updated = favorites.filter((doc: any) => doc._id !== doctor._id);
      setIsFavorite(false);
    } else {
      updated = [...favorites, doctor];
      setIsFavorite(true);
    }

    localStorage.setItem('favorite_doctors', JSON.stringify(updated));
  };

  // ✅ Handle specialty as string or array
  const specialtyName =
    typeof doctor.specialty === 'string'
      ? doctor.specialty
      : doctor.specialty?.[0]?.name || '';

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-sm border hover:shadow-lg transition h-[420px]">
      <div className="relative">
        <Image
          width={100}
          height={100}  
          src={doctor?.avatarUrl || ''}
          alt={doctor.fullName}
          className="w-full h-52 object-cover object-center"
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

      <div className="p-4 flex flex-col justify-between h-[calc(100%-208px)]">
        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-gray-800">{doctor.fullName}</h3>
            {doctor?.isActive && (
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                ● Trực tuyến
              </span>
            )}
          </div>

          <div className="flex items-start flex-wrap text-sm text-gray-500 mt-2 gap-1 h-[60px]">
            <FontAwesomeIcon icon={faLocationDot} className="text-blue-500" />
            {doctor?.hospital?.name || 'Không rõ bệnh viện'}
            <span className="mx-1">•</span>
            {specialtyName}
          </div>
        </div>

        <div className="border-t border-gray-200 mt-4 pt-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-1">Giá Tư Vấn:</p>
            <p className="text-lg font-bold text-red-600">
              {doctor?.rank?.base_price?.toLocaleString('vi-VN') || doctor?.price?.toLocaleString('vi-VN') || '---'}đ
            </p>
          </div>
          <button className="text-sm bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md flex items-center gap-2">
            <FontAwesomeIcon icon={faCalendarCheck} />
            Đặt Lịch
          </button>
        </div>
      </div>
    </div>
  );
}