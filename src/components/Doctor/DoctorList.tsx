import { useEffect, useState } from 'react';
import DoctorCard from './DoctorCard';
import { getDoctor } from '@/app/api/data';
import { DoctorCardProps } from './DoctorCard';
import DoctorModal from './DoctorDetail';

function normalizeDoctor(doc: any): DoctorCardProps {
  return {
    name: doc.fullName || doc.name || 'Không rõ tên',
    specialty: Array.isArray(doc.specialty)
      ? doc.specialty.map((s: any) => s.name).join(', ')
      : doc.specialty || 'Chuyên khoa chưa xác định',
    location: doc.city?.name || 'Việt Nam',
    price: doc.rank?.base_price ? doc.rank.base_price / 1000 : doc.price || 300,
    rating: doc.rating || 4.5,
    reviews: doc.reviews || 20,
    hospital: doc.hospital,
    rank: doc.rank,
    city: doc.city,
    experience: doc.experienceYears || doc.experience || 0,
    avatar: doc.avatarUrl || doc.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(doc.fullName || doc.name)}&background=random`,
  };
}

export default function DoctorList() {
  const [doctors, setDoctors] = useState<DoctorCardProps[]>([]);
  const [favoriteDoctors, setFavoriteDoctors] = useState<DoctorCardProps[]>([]);
  const [selectedDoctor, setSelectedDoctor] = useState<DoctorCardProps | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [filterSpecialty, setFilterSpecialty] = useState<string | null>(null);
  const [filterRank, setFilterRank] = useState<string | null>(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      const data = await getDoctor();
      const formatted = data.map(normalizeDoctor);
      setDoctors(formatted);
    };
    fetchDoctors();
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem('favorite_doctors');
    const parsed = stored ? JSON.parse(stored) : [];
    const formatted = parsed.map(normalizeDoctor);
    setFavoriteDoctors(formatted);
  }, []);

  const handleOpen = (doctor: DoctorCardProps) => {
    setSelectedDoctor(doctor);
    setOpenModal(true);
  };

  const handleClose = () => {
    setSelectedDoctor(null);
    setOpenModal(false);
  };

  const filteredDoctors = doctors.filter((doc) => {
    const matchSpecialty = !filterSpecialty || doc.specialty?.split(',').map(s => s.trim()).includes(filterSpecialty);
    const matchRank = !filterRank || doc.rank?.name === filterRank;
    return matchSpecialty && matchRank;
  });

  const doctorsBySpecialty: Record<string, DoctorCardProps[]> = {};
  filteredDoctors.forEach((doc) => {
    const specialties = doc.specialty?.split(',').map(s => s.trim()) || [];
    specialties.forEach((s) => {
      if (!doctorsBySpecialty[s]) doctorsBySpecialty[s] = [];
      doctorsBySpecialty[s].push({ ...doc, specialty: s });
    });
  });

  const allSpecialties = Array.from(
    new Set(doctors.flatMap((doc) => doc.specialty?.split(',').map((s) => s.trim()) || []))
  );

  const allRanks = Array.from(
    new Set(doctors.map((doc) => doc.rank?.name).filter(Boolean))
  );

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
          <option value="">Tất cả cấp bậc</option>
          {allRanks.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>

      <h2 className="text-xl font-bold mb-4 text-gray-700">Bác Sĩ Yêu Thích</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {favoriteDoctors.map((doc, idx) => (
          <DoctorCard handleOpen={handleOpen} onClick={() => handleOpen(doc)} key={`favorite-${idx}`} {...doc} />
        ))}
      </div>

      {Object.entries(doctorsBySpecialty).map(([specialty, doctorList]) => (
        <div key={specialty}>
          <h2 className="text-xl font-bold mb-4 text-gray-700">{specialty}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctorList.map((doc, idx) => (
              <DoctorCard handleOpen={handleOpen} onClick={() => handleOpen(doc)} key={`${specialty}-${idx}`} {...doc} />
            ))}
          </div>
        </div>
      ))}

      <DoctorModal open={openModal} doctor={selectedDoctor} onClose={handleClose} />
    </div>
  );
}