'use client';

import Breadcrumb from '@/components/Breadscum';
import DoctorList from '@/components/Doctor/DoctorList';
export default function PrivacyPolicy() {
  return (
    <>
      <Breadcrumb title="Đội Ngũ Bác Sĩ" />
      <section className="privacy-policy-section pt-0">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md py-10 px-4 space-y-6">
        <DoctorList />
        </div>
      </section>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mt-6">{title}</h2>
      <div className="mt-2 text-base leading-relaxed">{children}</div>
    </div>
  );
}