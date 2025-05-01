import React, { useEffect, useState } from "react";

const Pricing = () => {
  const [doctorLevels, setDoctorLevels] = useState([]);

  useEffect(() => {
    fetch("https://api.talktodoc.online/api/v1/doctor_levels", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const active = data.filter((item: any) => item.isActive);
        setDoctorLevels(active);
      })
      .catch((err) => {
        console.error("Lỗi khi lấy danh sách cấp bậc bác sĩ:", err);
      });
  }, []);

  return (
    <section className="relative z-10 overflow-hidden bg-white pb-12 pt-0">
      <div className="container mt-0 mx-auto lg:max-w-screen-xl md:max-w-screen-md">
        <div className="-mx-4 flex flex-wrap mb-10">
          <div className="w-full px-4 text-center">
            <p className="text-primary text-lg font-normal mb-4 tracking-widest uppercase">
              Chi phí tư vấn
            </p>
            <h2 className="mb-3 text-3xl font-bold leading-[1.208] text-dark sm:text-4xl md:text-[40px]">
              Bảng chi phí tư vấn
            </h2>
            <p className="text-base text-body-color">
              TalkToDoc áp dụng mô hình chi phí minh bạch và linh hoạt, tùy theo cấp bậc bác sĩ và dịch vụ lựa chọn.
            </p>
          </div>
        </div>

        {/* Bảng giá theo cấp bậc */}
        <div className="overflow-x-auto mb-10">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border border-gray-300 px-4 py-2">Hạng bác sĩ</th>
                <th className="border border-gray-300 px-4 py-2">Mô tả</th>
                <th className="border border-gray-300 px-4 py-2">Chi phí / lần khám</th>
              </tr>
            </thead>
            <tbody>
              {doctorLevels.map((level: any) => (
                <tr key={level?._id}>
                  <td className="border border-gray-300 px-4 py-2">{level?.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{level?.description}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {level?.base_price?.toLocaleString("vi-VN")}đ
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bảng mô tả thêm */}
        <div className="overflow-x-auto">
        

          <div className="mt-6 text-center">
            <a
              href="/doctor-list"
              className="inline-block rounded-md border border-primary bg-primary px-6 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
            >
              Tìm bác sĩ phù hợp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;