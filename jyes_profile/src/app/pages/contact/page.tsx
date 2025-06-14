'use client'

import { DndContext, closestCenter } from '@dnd-kit/core'
import { useState } from 'react'
import { useDraggable, useDroppable } from '@dnd-kit/core'
import { motion } from 'framer-motion'

const contacts = [
  {
    id: 'facebook',
    title: 'Facebook',
    link: 'https://facebook.com/Jyeeeeeeeeee',
    color: 'bg-blue-600',
  },
  {
    id: 'instagram',
    title: 'Instagram',
    link: 'https://instagram.com/jyeee_3/',
    color: 'bg-pink-500',
  },
  {
    id: 'github',
    title: 'Github',
    link: 'https://github.com/Jye-a-dev',
    color: 'bg-gray-800',
  },
  {
    id: 'email',
    title: 'Email',
    link: 'mailto:omkhoa@gmail.com',
    color: 'bg-red-500',
  },
   {
    id: 'outlook',
    title: 'Outlook',
    link: 'mailto:khoa.2474802010195@vanlanguni.vn',
    color: 'bg-blue-600',
  },
  {
    id: 'discord',
    title: 'Discord',
    link: 'https://discordapp.com/users/jye_here',
    color: 'bg-indigo-600',
  },
]

function DraggableItem({ id, children }: { id: string; children: React.ReactNode }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id })

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.div>
  )
}

export default function ContactPage() {
  const [items, setItems] = useState(contacts)

  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-br from-red-500 via-red-400 to-pink-400 text-white p-6">
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold tracking-tight mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        📬 Liên hệ với mình
      </motion.h1>

      <DndContext collisionDetection={closestCenter}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {items.map((item) => (
            <DraggableItem key={item.id} id={item.id}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`block ${item.color} rounded-xl p-6 shadow-lg text-white text-lg font-semibold text-center hover:brightness-110 transition duration-300 cursor-grab active:cursor-grabbing`}
              >
                {item.title}
              </a>
            </DraggableItem>
          ))}
        </div>
      </DndContext>
    </main>
  )
}
