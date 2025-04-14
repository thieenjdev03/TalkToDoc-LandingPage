'use client';

import Breadcrumb from '@/components/Breadscum';
import Pricing from '@/components/ServicesPrice/servicesPriceTable';
const pricingData = [
  {
    category: 'Khám bệnh tổng quát',
    services: [
      { name: 'Tư vấn với bác sĩ chuyên khoa', price: '200.000đ / lần' },
      { name: 'Khám trực tiếp tại phòng khám liên kết', price: '300.000đ / lần' },
    ],
  },
  {
    category: 'Tư vấn từ xa',
    services: [
      { name: 'Tư vấn qua video call (15 phút)', price: '150.000đ / lần' },
      { name: 'Tư vấn nhanh qua chat (5 câu hỏi)', price: '100.000đ / phiên' },
    ],
  },
  {
    category: 'Gói dịch vụ ưu đãi',
    services: [
      { name: 'Gói 5 lần tư vấn video', price: '700.000đ / 5 lần' },
      { name: 'Gói 10 lần khám tổng quát', price: '2.500.000đ / 10 lần' },
    ],
  },
];

export default function ServicePricingPage() {
  return (
    <>
      <Breadcrumb title="Bảng giá dịch vụ" />
      {/* <Pricing></Pricing> */}
      <section className="py-10">
        <div className="container mx-auto max-w-screen-lg px-4">
          <p className="text-center text-gray-600 mb-10">
            Tham khảo chi tiết các dịch vụ và mức giá hiện có của TalkToDoc. Mọi chi phí đều được công khai và minh bạch.
          </p>

          <div className="space-y-10">
            {pricingData.map((group, index) => (
              <div key={index}>
                <h2 className="text-2xl font-semibold mb-4 text-primary">{group.category}</h2>
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <table className="w-full text-left">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-3 px-4">Dịch vụ</th>
                        <th className="py-3 px-4">Giá</th>
                      </tr>
                    </thead>
                    <tbody>
                      {group.services.map((service, i) => (
                        <tr key={i} className="border-t">
                          <td className="py-3 px-4">{service.name}</td>
                          <td className="py-3 px-4 font-medium text-green-600">{service.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}