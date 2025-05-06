"use client";

import { useEffect, useState } from "react";
import Breadcrumb from "@/components/Breadscum";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Select from "react-select";
import "../contact-us/style.scss"
import DoctorLevelTable from "./doctor-level";

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
    const [specialitySelected, setSpecialitySelected] = useState<Specialty[]>([]);
    const [levels, setLevels] = useState<DoctorLevel[]>([]);
    const [loading, setLoading] = useState(false);
    const [cities, setCities] = useState<any[]>([]);
    const [loadingCities, setLoadingCities] = useState(false);
    const [selectedCity, setSelectedCity] = useState('');
    const specialtyOptions = specialties.map((s: Specialty) => ({
        value: s?._id,
        label: s?.name,
    }));
    const cityOptions = cities.map((city) => ({
        value: city.name,
        label: city.name,
    }));

    useEffect(() => {
        const fetchCities = async () => {
            setLoadingCities(true);
            try {
                const response = await fetch('https://provinces.open-api.vn/api/').then(res => res.json())
                setCities(response);
            } catch (error) {
                console.error(error);
            } finally {
                setLoadingCities(false);
            }
        };
        fetchCities();

        fetch("https://api.talktodoc.online/api/v1/hospitals")
            .then((res) => res.json())
            .then(setHospitals)
            .catch(console.error);

        fetch("https://api.talktodoc.online/api/v1/specialities")
            .then((res) => res.json())
            .then(setSpecialties)
            .catch(console.error);

        fetch("https://api.talktodoc.online/api/v1/doctor_levels")
            .then((res) => res.json())
            .then(setLevels)
            .catch(console.error);
    }, []);
    const customComponents = {
        IndicatorSeparator: () => null, // ⛔️ Ẩn thanh gạch |
    };
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
        <>
            <Breadcrumb title="Đăng Ký Làm Bác Sĩ Tại TalkToDoc" />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl md:max-w-screen-md py-10 contact-us-page flex flex-col gap-16">
                <div className="contact-us-content flex flex-col md:flex-row gap-8">
                    <div className="contact-us-content-left w-full md:w-1/3 space-y-4">
                        <p className="font-semibold sub-title text-lg sm:text-xl">Tham gia TalkToDoc</p>
                        <h2 className="text-gray-600 main-title text-2xl sm:text-3xl">
                            Vì sao bạn nên tham gia TalkToDoc?
                        </h2>
                        <ul className="text-gray-600 list-disc pl-5 text-sm sm:text-base space-y-1">
                            <li>Tiếp cận hàng nghìn bệnh nhân mỗi tháng</li>
                            <li>Chủ động lịch khám, tăng thu nhập</li>
                            <li>Hệ thống hỗ trợ đặt lịch và tư vấn online</li>
                        </ul>
                    </div>

                    <div className="contact-us-content-right w-full md:w-2/3">
                        <form
                            onSubmit={handleSubmit}
                            className="contact-us-form bg-white p-6 rounded-lg shadow-md space-y-4"
                        >
                            <h2 className="text-xl font-semibold text-center">📋 Đăng ký làm bác sĩ</h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input name="fullName" placeholder="Họ và tên" required className="input" />
                                <input name="email" type="email" placeholder="Email" required className="input" />
                                <input name="phoneNumber" placeholder="Số điện thoại" required className="input" />
                                <input name="username" placeholder="Tài khoản đăng nhập" required className="input" />
                                <input name="password" type="password" placeholder="Mật khẩu" required className="input" />

                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Select
                                    components={customComponents}
                                    name="hospital"
                                    options={hospitals.map(h => ({ value: h._id, label: h.name }))}
                                    className="basic-select"
                                    placeholder="Chọn bệnh viện"
                                    classNamePrefix="select"
                                    required
                                />

                                <Select
                                    components={customComponents}
                                    name="city"
                                    options={cities.map(city => ({ value: city.name, label: city.name }))}
                                    className="basic-select"
                                    placeholder="Chọn tỉnh/thành"
                                    classNamePrefix="select"
                                    required
                                />
                                <Select
                                    components={customComponents}
                                    name="rank"
                                    options={levels.map(l => ({ value: l._id, label: l.name }))}
                                    className="basic-select"
                                    placeholder="Chọn cấp bậc"
                                    classNamePrefix="select"
                                    required
                                />

                                <Select
                                    components={customComponents}
                                    required
                                    isMulti
                                    value={specialtyOptions.filter((option: any) =>
                                        specialitySelected.includes(option.value)
                                    )}
                                    name="specialty"
                                    options={specialtyOptions}
                                    className="basic-multi-select"
                                    placeholder="Chọn chuyên khoa"
                                    classNamePrefix="select"
                                    onChange={(selected: any) => setSpecialitySelected(selected.map((item: any) => item.value))}
                                />
                                <input name="position" type="text" placeholder="Chức vụ" className="input" />
                                <input name="licenseNo" placeholder="Mã giấy phép hành nghề" required className="input" />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input name="experienceYears" type="number" min={0} placeholder="Năm kinh nghiệm" className="input" />
                                <input name="isActive" value="false" hidden />
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <input
                                    type="checkbox"
                                    name="agreePolicy"
                                    required
                                    className=" w-5 h-5"
                                />
                                <label htmlFor="agreePolicy">
                                    Tôi đồng ý với{' '}
                                    <a
                                        href="/privacy-policy#terms-of-service"
                                        target="privacy-policy#terms-of-service"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 underline hover:text-blue-800"
                                    >
                                        chính sách và điều khoản của TalkToDoc
                                    </a>
                                </label>

                            </div>
                            <p className="text-gray-600 text-sm">
                                Việc đăng ký đồng nghĩa bạn chấp nhận tuân thủ các quy định của TalkToDoc như xác minh giấy phép hành nghề, bảo mật thông tin bệnh nhân và cam kết cung cấp dịch vụ khám chữa bệnh chất lượng.
                            </p>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md transition duration-300"
                                >
                                    {loading ? "Đang gửi..." : "Gửi yêu cầu"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <DoctorLevelTable data={levels} />
            </main>
        </>
    );
}