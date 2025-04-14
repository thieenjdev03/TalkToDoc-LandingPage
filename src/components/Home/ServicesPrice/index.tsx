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
      <Pricing></Pricing>
    </>
  );
}