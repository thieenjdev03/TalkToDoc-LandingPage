'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Profile Website',
    description: 'Trang cá nhân được xây dựng bằng Reactjs, Typecript, antd. Bảng design đầu tay.',
    tech: ['Reactjs', 'Typecript', 'antd'],
    link: 'https://portfolio-six-jade-97.vercel.app',
  },
   {
    title: 'Profile 2.0',
    description: 'Trang cá nhân làm bằng Nextjs, headless.ui và Typescript',
    tech: ['Nextjs', 'headless.ui', 'Typescript'],
    link: '/',
  },
  {
    title: 'Study tracker app',
    description: 'Ứng dụng quản lý thời gian học với React và TypeScript. (chưa hoàn thành)',
    tech: ['React', 'TypeScript', 'SCSS','antd'],
    link: '',
  },
  {
    title: 'Deverloper study app',
    description: 'Trang web hữu ít để học làm kỉ sư phần mềm (chưa hoàn thành)',
    tech: ['React', 'TypeScript', 'antd'],
    link: '',
  },
]

export default function ProjectPage() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-br from-red-500 via-red-400 to-pink-400 text-white p-6 text-center">
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold tracking-tight mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🚀 Dự án cá nhân
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white/10 rounded-xl p-6 backdrop-blur-lg shadow-lg text-white text-left space-y-4 hover:scale-[1.02] transition-transform"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <p className="text-sm">{project.description}</p>
            <p className="text-sm font-light">
              <strong>Công nghệ:</strong> {project.tech.join(', ')}
            </p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm text-white hover:underline"
              >
                🔗 Xem dự án
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>
    </main>
  )
}
