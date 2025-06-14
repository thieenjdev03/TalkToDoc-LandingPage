'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const entertainments = [
  {
    emoji: '🎮',
    title: 'Chơi game',
    desc: 'Chơi thì gà mà giỏi dỗi game:\n \n- Cod mobile/warzone (Chơi ít) \n- League of Legends / TFT\n- Liên quân mobile\n- PUBG Mobile',
    color: 'bg-indigo-600',
  },
  {
    emoji: '🎬',
    title: 'Xem phim',
    desc: 'Phim hay, nhưng mà quên tên nhân vật chính ạ:\n \n - Khoa học viễn tưởng\n- Chiến tranh - lịch sử\n- Siêu anh hùng',
    color: 'bg-purple-500',
  },
  {
    emoji: '🎵',
    title: 'Nghe nhạc',
    desc: 'Nghe thì hay, còn mình hát thì dở:\n \n- US-UK\n- V-Pop\n- Nhạc xưa',
    color: 'bg-pink-500',
  },
  {
    emoji: '🗣️',
    title: 'Trò truyện & tâm sự',
    desc: 'Cái gì cũng nói được:\n\n- Tình cảm \n- Kiến thức\n- Đời sống\n- Ẩm thực',
    color: 'bg-rose-500',
  },
  {
    emoji: '🔠',
    title: 'Ngôn ngữ',
    desc: 'Tiếng gì cũng biết, tiếng được tiếng không:\n\n- Tiếng Anh, Việt lưu loát (tùy lúc)\n- Tiếng Nga, Pháp (vài câu)\n- Các tiếng khác (vài chữ): \nTrung, Đức, Ý, Tây Ban Nha, Ukraina, Belarus, Hàn, Nhật, Thái',
    color: 'bg-teal-600',
  },
  {
    emoji: '🛑',
    title: 'Văn hóa & chính trị',
    desc: 'Tìm hiểu thêm về các nền văn minh để tăng lực chiến:\n\n- Thế giới\n- Việt Nam\n- Hệ thống chính trị các quốc gia, đặc biệt CNXH',
    color: 'bg-red-600',
  },
  {
    emoji: '🕵️',
    title: 'Kĩ năng sáng tạo',
    desc: 'Khám thì ít mà phá thì nhiều:\n\n- Design, edit ảnh và video\n- Truyền thông & sự kiện\n- Dạy học và chỉ bài thêm\n- Ngôn ngữ và văn hóa',
    color: 'bg-yellow-600 text-black',
  },
]

function shuffleArray(array: any[]) {
  return [...array].sort(() => Math.random() - 0.5)
}

export default function EntertainPage() {
  const [shuffled, setShuffled] = useState(entertainments)

  useEffect(() => {
    const interval = setInterval(() => {
      setShuffled(shuffleArray)
    }, 10000) // 30 giây

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-br from-red-500 via-red-400 to-pink-400 text-white p-6">
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold tracking-tight mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        ✨ Giải trí & Sở thích cá nhân
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {shuffled.map((item, i) => (
          <motion.div
            key={i}
            className={`rounded-xl p-6 shadow-lg text-left whitespace-pre-line transition duration-300 hover:scale-[1.02] ${item.color}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="text-3xl mb-2">{item.emoji}</div>
            <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
            <p className="text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </main>
  )
}
