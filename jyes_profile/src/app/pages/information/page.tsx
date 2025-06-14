'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// Ngày sinh
const birthday = new Date('2006-09-09T00:00:00')

function calculateAgeComponents(from: Date, to: Date) {
  const diff = to.getTime() - from.getTime()

  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const weeks = Math.floor(days / 7)
  const months = Math.floor(days / 30.4375)
  const years = Math.floor(months / 12)

  return {
    seconds,
    minutes,
    hours,
    days,
    weeks,
    months,
    years,
  }
}

export default function InformationPage() {
  const [age, setAge] = useState(calculateAgeComponents(birthday, new Date()))

  useEffect(() => {
    const interval = setInterval(() => {
      setAge(calculateAgeComponents(birthday, new Date()))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-500 via-red-400 to-pink-400 text-white p-4 text-center">
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🧠 Thông tin cá nhân
      </motion.h1>

      {/* Ảnh đại diện */}
      <motion.img
        src="/Pic1.jpg" // Thay bằng đường dẫn thực tế hoặc tải ảnh lên
        alt="Ảnh đại diện"
        className="w-40 h-40 rounded-full border-4 border-white shadow-lg mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />

    <motion.div
        className="bg-white/10 rounded-xl p-6 shadow-lg backdrop-blur-lg text-white text-base md:text-lg space-y-4 w-full max-w-4xl text-justify"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        >
        <p><strong>Họ tên:</strong> Nguyễn Việt Duy Khoa</p>
        <p><strong>Quốc tịch / Dân tộc:</strong> Việt Nam / Kinh</p>
        <p><strong>Quê quán:</strong> Hóc Môn, TP HCM</p>
        <p><strong>Nơi sinh:</strong> Bình Thạnh, TP HCM</p>
        <p><strong>Ngày sinh:</strong> 09/09/2006</p>
        <p>
            <strong>Tuổi hiện tại:</strong> {age.years} năm, {age.months % 12} tháng, {age.weeks % 4} tuần, {age.days % 7} ngày, {age.hours % 24} giờ, {age.minutes % 60} phút, {age.seconds % 60} giây
        </p>
        <p><strong>Trạng thái hôn nhân:</strong> Độc thân</p>

        <hr className="border-white my-5" />

        <p><strong>Học vấn:</strong> 12/12</p>
        <p><strong>Đại học:</strong> Văn Lang - Công nghệ thông tin</p>
        <p><strong>Năm học:</strong> Sinh viên năm nhất</p>

        <hr className="border-white my-5" />

        <p><strong>Chuyên ngành / vị trí:</strong> Kĩ sư phần mềm / Fullstack Developer</p>
        <p><strong>Kỹ năng chuyên môn:</strong> React, Next, TypeScript, SCSS, Python, HTML, JavaScript</p>
        <p><strong>Kỹ năng mềm:</strong> Làm việc nhóm, giao tiếp, xử lý tình huống linh hoạt</p>

        <hr className="border-white my-5" />

        <p><strong>Nhắn nhủ:</strong> Mình là một lập trình viên mới vào nghề, đam mê và ham học hỏi. Đây là nơi mình chia sẻ những gì mình đã học và đang phát triển.</p>
        <p><strong>Màu sắc yêu thích:</strong> Máu đỏ, da vàng 🇻🇳</p>
        </motion.div>
    </main>
  )
}
