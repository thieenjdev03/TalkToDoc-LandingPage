'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface NavButtonProps {
  href: string
  label: string
  icon?: React.ReactNode
  mobile?: boolean
  collapsed?: boolean
}

const NavButton: React.FC<NavButtonProps> = ({ href, label, icon, mobile = false, collapsed = false }) => {
  const pathname = usePathname()
  const isActive = pathname === href

  const baseClass = `
    flex items-center gap-2
    px-3 py-2 rounded border border-white
    hover:bg-red-100 hover:text-red-600
    transition duration-200 ease-in-out
    transform hover:scale-105 active:scale-95
    focus:outline-none focus:ring-2 focus:ring-white
    ${mobile ? 'w-full' : ''}
    ${collapsed ? 'justify-center' : ''}
  `

  const activeClass = `
    bg-red-100 text-red-600 font-semibold shadow-inner
  `

  return (
    <Link
      href={href}
      className={`${baseClass} ${isActive ? activeClass : ''}`}
    >
      {icon}
      {!collapsed && <span className="truncate">{label}</span>}
    </Link>
  )
}

export default NavButton
