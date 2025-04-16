import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
type DoctorCardProps = {
  name: string;
  specialty: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  avatar: string;
  onClick: () => void;
  hospital: any;
  rank: any;
  city: any;
  experience: number;
  handleOpen: () => void;
};

export default function DoctorCard({
  avatar,
  name,
  specialty,
  location,
  price,
  rating,
  reviews,
  onClick,
  hospital,
  rank,
  city,
  experience,
  handleOpen,
}: DoctorCardProps) {
  const formatPrice = (price: number) => {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  };
  return (
    <div
      className="bg-white rounded-xl border shadow-sm hover:shadow-lg transition overflow-hidden group relative cursor-pointer"
      onClick={onClick}
    >
      <div className="relative w-full h-48 sm:h-52 md:h-56">
        <img src={avatar} alt={name} className="object-cover w-full h-full" />
        <div className="absolute top-2 right-2 bg-blue-600 text-white text-sm font-semibold px-2 py-1 rounded-md shadow">
          {formatPrice(price * 1000)}
        </div>

        {/* Nút đặt lịch khi hover */}
        <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          <button
            className="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary text-white text-sm px-4 py-2 rounded-md shadow hover:bg-primary/80"
          >
            Đặt lịch ngay
          </button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800">{name}</h3>
        <div className="flex flex-wrap gap-1 text-sm text-gray-600">Chuyên khoa: {specialty
          ?.split(',')
          .map((s: string, index: number) => (
            <span
              key={index}
              className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded"
            >
              {s.trim()}
            </span>
          ))}</div>
        <div className="flex items-center gap-1 mt-2 text-yellow-500">
          <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm" />
          <span className="text-sm font-medium">{rating}</span>
          <span className="text-sm text-gray-400">({reviews})</span>
        </div>

        <div className="flex items-center gap-1 text-gray-500 text-sm mt-2">
          <FontAwesomeIcon icon={faLocationDot} className="text-gray-500" />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
}