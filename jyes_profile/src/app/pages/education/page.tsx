'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'

const educationTimeline = [
  { time: '2012 - 2017', title: 'Tiểu học Bế Văn Đàn', color: 'bg-blue-600' },
  { time: '2017 - 2019', title: 'THCS Nguyễn Văn Bé', color: 'bg-indigo-600' },
  { time: '2019 - 2021', title: 'THCS Đỗ Văn Dậy', color: 'bg-purple-600' },
  { time: '2021 - 2024', title: 'THPT Hồ Thị Bi', color: 'bg-pink-600' },
  { time: '27–28/6/2024', title: 'Thi THPTQG 2024', color: 'bg-red-600' },
  {
    time: 'Tháng 7/2024',
    title:
      'Đỗ nguyện vọng 1\nTổ hợp A01: 23.8 điểm\nToán: 8 - Anh: 8.6 - Lý: 7.2',
    color: 'bg-rose-500',
  },
  {
    time: 'Tháng 9/2024',
    title: 'Nhập học Đại học Văn Lang\n(Chọn VLU thay vì HCMUE)',
    color: 'bg-teal-600',
  },
  {
    time: '2024 - 2028',
    title: 'Sinh viên Đại học Văn Lang',
    color: 'bg-yellow-500 text-black',
  },
]

export default function EducationPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const arrowControls = useAnimation()

  useEffect(() => {
    const animateArrow = () => {
      const width = containerRef.current?.offsetWidth || 3000

      arrowControls.start({
        x: [ -50, width ],
        transition: {
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        },
      })
    }

    animateArrow()
    window.addEventListener('resize', animateArrow)
    return () => window.removeEventListener('resize', animateArrow)
  }, [arrowControls])

  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 text-white overflow-x-auto pr-10 pt-10 pl-40">
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold tracking-tight mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🎓 Hành trình học vấn
      </motion.h1>

      {/* Timeline Section */}
      <div className="flex space-x-10 relative py-10 min-w-[950px]">
        {/* Neon line */}
        <div className="absolute top-1/2 left-0 w-full h-[3px] bg-white opacity-70 shadow-[0_0_20px_white] z-[-1]" />

        {educationTimeline.map((item, i) => (
          <motion.div
            key={i}
            className={`rounded-xl p-4 w-60 text-sm whitespace-pre-line shadow-xl ${item.color} transition hover:scale-105`}
            animate={{
              y: i % 2 === 0 ? [0, -20, 0, 20, 0] : [0, 20, 0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="font-bold text-lg mb-2">{item.time}</div>
            <p>{item.title}</p>
          </motion.div>
        ))}
      </div>

      {/* Sine Wave + Arrow */}
      <div
        ref={containerRef}
        className="relative mt-10 w-full max-w-6xl h-20 overflow-hidden"
      >
        {/* Sine Wave Path */}
        <svg
          viewBox="0 0 1000 100"
          className="absolute top-1/2 left-0 w-full h-auto text-white opacity-40"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 Q125,0 250,50 T500,50 T750,50 T1000,50"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
        </svg>

        {/* Moving Arrow */}
        <motion.div
          className="absolute top-[36px] text-2xl"
          animate={arrowControls}
        >
          <span className="text-white drop-shadow">========➡️</span>
        </motion.div>
      </div>
    </main>
  )
}
