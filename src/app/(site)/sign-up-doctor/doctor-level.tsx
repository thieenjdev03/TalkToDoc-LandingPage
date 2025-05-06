'use client';

import React from 'react';

interface DoctorLevel {
  _id: string;
  name: string;
  description: string;
  base_price: number;
}

interface DoctorLevelTableProps {
  data: DoctorLevel[];
}

const DoctorLevelTable: React.FC<DoctorLevelTableProps> = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
      <h3 className="text-lg font-semibold mb-2 text-center">
        Bảng mô tả cấp bậc bác sĩ
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300 text-sm">
          <thead className="bg-blue-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 border">Cấp bậc</th>
              <th className="px-4 py-2 border">Mô tả</th>
              <th className="px-4 py-2 border text-center">Giá khám cơ bản (VNĐ)</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {data.map((level) => (
              <tr key={level._id}>
                <td className="px-4 py-2 border font-medium whitespace-nowrap">{level.name}</td>
                <td className="px-4 py-2 border">{level.description}</td>
                <td className="px-4 py-2 border text-center">
                  {level.base_price?.toLocaleString('vi-VN')}₫
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorLevelTable;