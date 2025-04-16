import React from "react";

const Pricing = () => {
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

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border border-gray-300 px-4 py-2 w-1/2">Hạng mục</th>
                <th className="border border-gray-300 px-4 py-2">Chi tiết</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">💼 Phí nền tảng</td>
                <td className="border border-gray-300 px-4 py-2 font-semibold">50.000đ (áp dụng cố định)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">🩺 Phí khám bác sĩ</td>
                <td className="border border-gray-300 px-4 py-2">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Bác sĩ hạng 4 (Thực tập): từ 100.000đ</li>
                    <li>Bác sĩ hạng 3 (Cơ bản): từ 150.000đ</li>
                    <li>Bác sĩ hạng 2 (Chuyên khoa): từ 200.000đ</li>
                    <li>Bác sĩ hạng 1 (Chuyên gia): từ 300.000đ trở lên</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">👀 Hiển thị giá trước</td>
                <td className="border border-gray-300 px-4 py-2">Người dùng sẽ được xem chi tiết giá trước khi thanh toán</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">⚙️ Tính linh hoạt</td>
                <td className="border border-gray-300 px-4 py-2">Chọn bác sĩ theo nhu cầu và ngân sách cá nhân</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">🎁 Mã khuyến mãi</td>
                <td className="border border-gray-300 px-4 py-2">Có thể nhập mã để nhận ưu đãi trực tiếp</td>
              </tr>
            </tbody>
          </table>

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