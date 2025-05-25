// ✅ Tối ưu style tương tự mẫu form ứng dụng membership
"use client";

import { useEffect, useState } from "react";
import Select from "react-select";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Breadcrumb from "@/components/Breadscum";
import DoctorLevelTable from "./doctor-level";
import { Container } from "postcss";

const MySwal = withReactContent(Swal);

interface Hospital {
    _id: string;
    name: string;
}

interface Specialty {
    _id: string;
    name: string;
}

interface DoctorLevel {
    _id: string;
    name: string;
    description: string;
    base_price: number;
}

export default function RegisterAsDoctor() {
    const [hospitals, setHospitals] = useState<Hospital[]>([]);
    const [specialties, setSpecialties] = useState<Specialty[]>([]);
    const [specialtySelected, setSpecialtySelected] = useState<Specialty[]>([]);
    const [levels, setLevels] = useState<DoctorLevel[]>([]);
    const [cities, setCities] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    const specialtyOptions = specialties?.map((s) => ({ value: s._id, label: s.name }));
    const cityOptions = cities?.map((c) => ({ value: c.name, label: c.name }));

    useEffect(() => {
        fetch("https://provinces.open-api.vn/api/")
          .then((res) => res.json())
          .then(setCities);
      
        fetch("http://localhost:3000/api/v1/hospitals/search?page=1&limit=100")
          .then((res) => res.json())
          .then((res) => setHospitals(res.data));
      
        fetch("http://localhost:3000/api/v1/specialties/search?query=&page=1&limit=10&sortOrder=desc&sortField=updatedAt")
          .then((res) => res.json())
          .then((res) => setSpecialties(res.data));
      
        fetch("http://localhost:3000/api/v1/doctor_levels")
          .then((res) => res.json())
          .then((res) => setLevels(res));
      }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/doctors`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!res.ok) throw new Error("Gửi yêu cầu thất bại.");

            await MySwal.fire({
                title: "Gửi thành công!",
                text: "Chúng tôi sẽ liên hệ với bạn sớm nhất.",
                icon: "success",
                confirmButtonText: "Đóng",
            });
        } catch (err: any) {
            await MySwal.fire({
                title: "Lỗi",
                text: err.message || "Đã xảy ra lỗi, vui lòng thử lại.",
                icon: "error",
                confirmButtonText: "Đóng",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section>
            <main className="container mx-auto max-w-screen-lg bg-white shadow-md rounded-md">
                <Breadcrumb title="Đăng Ký Làm Bác Sĩ Tại TalkToDoc" />
                <h1 className="text-2xl font-bold text-center mb-6">ĐƠN ỨNG TUYỂN</h1>

                <form onSubmit={handleSubmit} className="space-y-6 p-4">
                    {/* Personal Info */}
                    <div>
                        <h2 className="text-lg font-semibold border-b pb-1 mb-4">THÔNG TIN CÁ NHÂN</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                            <input name="fullName" required placeholder="Họ và tên" className="input w-full border-2 border-gray-300 rounded-md p-2" />
                            <input name="email" type="email" required placeholder="Email" className="input w-full border-2 border-gray-300 rounded-md p-2" />
                            <input name="phoneNumber" required placeholder="Số điện thoại" className="input w-full border-2 border-gray-300 rounded-md p-2" />
                            <input name="username" required placeholder="Tài khoản đăng nhập" className="input w-full border-2 border-gray-300 rounded-md p-2" />
                            <input name="password" required type="password" placeholder="Mật khẩu" className="input w-full border-2 border-gray-300 rounded-md p-2" />
                            <input name="passwordConfirm" required type="password" placeholder="Nhập lại mật khẩu" className="input w-full border-2 border-gray-300 rounded-md p-2" />
                        </div>
                    </div>

                    {/* Organization Info */}
                    <div>
                        <h2 className="text-lg font-semibold border-b pb-1 mb-4">THÔNG TIN VIỆC LÀM</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                            <Select name="hospital" required placeholder="Chọn bệnh viện" options={hospitals.map(h => ({ value: h._id, label: h.name }))} classNamePrefix="select" />
                            <Select name="specialty" isMulti placeholder="Chuyên khoa" options={specialtyOptions} classNamePrefix="select" onChange={(selected: any) => setSpecialtySelected(selected.map((s: any) => s.value))} />
                            <Select name="city" required placeholder="Tỉnh/Thành phố" options={cityOptions} classNamePrefix="select" />
                            <input name="position" placeholder="Chức vụ" className="input w-full border-2 border-gray-300 rounded-md p-2" />
                            <input name="licenseNo" placeholder="Mã giấy phép hành nghề" required className="input w-full border-2 border-gray-300 rounded-md p-2" />
                            <Select name="rank" required placeholder="Cấp bậc" options={levels.map(l => ({ value: l._id, label: l.name }))} classNamePrefix="select" />
                        </div>
                    </div>

                    {/* Emergency + Optional Fields */}
                    <div>
                        <h2 className="text-lg font-semibold border-b pb-1 mb-4">Kinh nghiệm làm việc</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input name="experienceYears" type="number" min={0} placeholder="Số năm kinh nghiệm" className="input w-full border-2 border-gray-300 rounded-md p-2" />
                            <input name="isActive" value="false" hidden readOnly />
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                        <input type="checkbox" required className="w-5 h-5" />
                        <label>
                            Tôi đồng ý với
                            <a href="/privacy-policy#terms-of-service" className="text-blue-600 underline ml-1">
                                chính sách và điều khoản
                            </a>
                            của TalkToDoc.
                        </label>
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md"
                        >
                            {loading ? "Đang gửi..." : "Gửi yêu cầu"}
                        </button>
                    </div>
                </form>

            </main>
            <div className="container mx-auto max-w-screen-lg px-4 mt-8 bg-white rounded-md shadow-md py-4">
                <DoctorLevelTable data={levels} />
            </div>
        </section>
    );
}
