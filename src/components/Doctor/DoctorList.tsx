import { useEffect, useState, useMemo } from 'react'
import DoctorCard from './DoctorCard'
import { getDoctor } from '@/app/api/data'
import DoctorModal from './DoctorDetail'
import { DoctorCardProps } from '../Home/Expert/DoctorCard'

function normalizeDoctor(doc: any): DoctorCardProps {
  return {
    _id: doc._id,
    fullName: doc.fullName || doc.name || 'Không rõ tên',
    name: doc.fullName || doc.name || 'Không rõ tên',
    specialty: Array.isArray(doc.specialty)
      ? doc.specialty.map((s: any) => s.name).join(', ')
      : doc.specialty || 'Chuyên khoa chưa xác định',
    location: doc.hospital?.address || 'Việt Nam',
    price: doc.rank?.base_price ? doc.rank.base_price / 1000 : doc.price || 300,
    rating: doc.rating || 4.5,
    reviews: doc.reviews || 20,
    hospital: doc.hospital,
    rank: doc.rank,
    avgScore: doc.avgScore || 0,
    city: doc.city,
    position: doc.position,
    experience: doc.experienceYears || doc.experience || 0,
    avatar: doc.avatarUrl || doc.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(doc.fullName || doc.name)}&background=random`,
  }
}

export default function DoctorList() {
  const [doctors, setDoctors] = useState<DoctorCardProps[]>([])
  const [favoriteDoctors, setFavoriteDoctors] = useState<DoctorCardProps[]>([])
  const [selectedDoctor, setSelectedDoctor] = useState<DoctorCardProps | null>(null)
  const [openModal, setOpenModal] = useState(false)
  const [filterSpecialty, setFilterSpecialty] = useState<string | null>(null)
  const [filterRank, setFilterRank] = useState<string | null>(null)
  const [visibleDoctors, setVisibleDoctors] = useState(8)

  useEffect(() => {
    const fetchDoctors = async () => {
      const data = await getDoctor()
      const formatted = data.map(normalizeDoctor)
      setDoctors(formatted)
    }
    fetchDoctors()
  }, [])

  useEffect(() => {
    const stored = localStorage.getItem('favorite_doctors')
    const parsed = stored ? JSON.parse(stored) : []
    const formatted = parsed.map(normalizeDoctor)
    if(parsed && parsed.length > 0) { 
      setFavoriteDoctors(formatted)
    } else { 
      setFavoriteDoctors([])
    }

  }, [])

  const handleOpen = (doctor: DoctorCardProps) => {
    setSelectedDoctor(doctor)
    setOpenModal(true)
  }

  const handleClose = () => {
    setSelectedDoctor(null)
    setOpenModal(false)
  }

  const handleLoadMore = () => {
    setVisibleDoctors(prev => prev + 8)
  }

  const filteredDoctors = doctors.filter((doc) => {
    const matchSpecialty = !filterSpecialty || doc?.specialty?.split(',').map((s: string) => s.trim()).includes(filterSpecialty)
    const matchRank = !filterRank || doc?.rank?.base_price == filterRank
    return matchSpecialty && matchRank
  })

  const doctorsBySpecialty = useMemo(() => {
    const result: Record<string, DoctorCardProps[]> = {}
    filteredDoctors.forEach((doc) => {
      const specialties = doc?.specialty?.split(',').map((s: string) => s.trim()) || []
      specialties.forEach((s: string) => {
        if (!result[s]) result[s] = []
        result[s].push({ ...doc, specialty: s })
      })
    })
    return result
  }, [filteredDoctors])

  const allSpecialties = Array.from(
    new Set(doctors.flatMap((doc) => doc?.specialty?.split(',').map((s: string) => s.trim())))
  )

  const allRanks = Array.from(
    new Set(doctors.map((doc) => doc.rank?.base_price).filter(Boolean))
  )

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap items-center justify-end gap-4 mb-6">
        Lọc Theo:
        <select
          className="px-4 py-2 border rounded-md"
          onChange={(e) => setFilterSpecialty(e.target.value || null)}
          value={filterSpecialty || ''}
        >
          <option value="">Tất cả chuyên khoa</option>
          {allSpecialties.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>

        <select
          className="px-4 py-2 border rounded-md"
          onChange={(e) => setFilterRank(e.target.value || null)}
          value={filterRank || ''}
        >
          <option value="">Tất cả giá</option>
          {allRanks.map((r) => (
            <option key={r} value={r}>{r.toLocaleString('vi-VN')}đ</option>
          ))}
        </select>
      </div>

      {!filterSpecialty && !filterRank && favoriteDoctors.length > 0 && (
        <>
          <h2 className="text-xl font-bold mb-4 text-gray-700">Bác Sĩ Yêu Thích</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
            {favoriteDoctors.map((doc, idx) => (
              <DoctorCard handleOpen={() => handleOpen(doc)} onClick={() => handleOpen(doc)} key={`favorite-${idx}`} {...doc} />
            ))}
          </div>
        </>
      )}

      {filterSpecialty ? (
        <div>
          <h2 className="text-xl font-bold mb-4 text-gray-700">{filterSpecialty}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
            {doctorsBySpecialty[filterSpecialty]?.slice(0, visibleDoctors).map((doc, idx) => (
              <DoctorCard handleOpen={() => handleOpen(doc)} onClick={() => handleOpen(doc)} key={`${filterSpecialty}-${idx}`} {...doc} />
            ))}
          </div>
          {doctorsBySpecialty[filterSpecialty]?.length > visibleDoctors && (
            <div className="text-center mt-8">
              <button
                onClick={handleLoadMore}
                className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
              >
                Xem thêm
              </button>
            </div>
          )}
        </div>
      ) : (
        Object.entries(doctorsBySpecialty).map(([specialty, doctorList]) => (
          <div key={specialty}>
            <h2 className="text-xl font-bold mb-4 text-gray-700">{specialty}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
              {doctorList.slice(0, visibleDoctors).map((doc, idx) => (
                <DoctorCard handleOpen={() => handleOpen(doc)} onClick={() => handleOpen(doc)} key={`${specialty}-${idx}`} {...doc} />
              ))}
            </div>
            {doctorList.length > visibleDoctors && (
              <div className="text-center mt-8">
                <button
                  onClick={handleLoadMore}
                  className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                >
                  Xem thêm
                </button>
              </div>
            )}
          </div>
        ))
      )}

      <DoctorModal open={openModal} doctor={selectedDoctor as any} onClose={handleClose} />
    </div>
  )
}