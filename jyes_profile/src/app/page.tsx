'use client'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="flex flex-col items-center text-justify justify-center min-h-screen bg-gradient-to-br from-red-500 via-red-400 to-pink-400 text-white px-4 ">
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        👋 Xin chào, đây là profile của <span className="underline decoration-white/40">Jye</span>
      </motion.h1>

      <motion.p
        className="max-w-xl text-lg md:text-xl text-white/90 mb-6 " 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Đây là profile của mình dành cho bạn bè, người quen và cả những người chưa quen biết. Nếu bạn có điều gì muốn hỏi thêm, đừng ngần ngại liên hệ ở phần Contact nhé!
      </motion.p>

     
    </main>
  )
}
