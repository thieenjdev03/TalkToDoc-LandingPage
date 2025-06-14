'use client'

import Sidebar from './Sidebar'
import Footer from './Footer'
import { useState } from 'react'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div
      className={`grid grid-rows-[1fr_auto] min-h-screen transition-all duration-300 ${
        collapsed ? 'grid-cols-[5rem_1fr]' : 'grid-cols-[15rem_1fr]'
      }`}
    >
      {/* Sidebar bên trái */}
      <div className="row-span-1 border-r bg-white text-white">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      </div>

      {/* Nội dung chính */}
      <main className="p-1 bg-gray-100 overflow-y-auto ">
        {children}
      </main>

      {/* Footer chiếm full width */}
      <div className="col-span-2">
        <Footer />
      </div>
    </div>
  )
}
