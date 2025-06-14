'use client'

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  PhoneIcon,
  FilmIcon,
  AcademicCapIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline'
import NavButton from '@/components/ui/NavButton'
import { usePathname } from 'next/navigation'
import React from 'react'

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const links = [
  { href: '/', label: 'Main', icon: <HomeIcon className="h-5 w-5" /> },
  { href: '/pages/information', label: 'Information', icon: <UserIcon className="h-5 w-5" /> },
  { href: '/pages/project', label: 'Project', icon: <BriefcaseIcon className="h-5 w-5" /> },
  { href: '/pages/contact', label: 'Contact', icon: <PhoneIcon className="h-5 w-5" /> },
  { href: '/pages/entertain', label: 'Entertain', icon: <FilmIcon className="h-5 w-5" /> },
  { href: '/pages/education', label: 'Education', icon: <AcademicCapIcon className="h-5 w-5" /> },
  { href: '/pages/setting', label: 'Setting', icon: <Cog6ToothIcon className="h-5 w-5" /> },
]

export default function Sidebar({ collapsed, setCollapsed }: SidebarProps) {
  const pathname = usePathname()

  return (
    <aside
      className={`hidden md:flex flex-col transition-all duration-300 b ${
        collapsed ? 'w-20' : 'w-60'
      } h-screen p-4 border-2 border-red-500 bg-gradient-to-b from-red-600 to-red-400 text-white shadow-lg overflow-y-auto overflow-x-hidden`}
    >
      {/* Title */}
      <h2
        className={`text-center text-2xl font-bold mb-6 transition-opacity duration-300 ${
          collapsed ? 'opacity-0' : 'opacity-100'
        }`}
      >
        Jye&apos;s Profile
      </h2>

      {/* Nav Items */}
      <nav className="flex flex-col gap-2 flex-grow">
        {links.map(({ href, label, icon }) => (
          <NavButton
            key={href}
            href={href}
            label={label}
            icon={icon}
            collapsed={collapsed}
          />
        ))}
      </nav>

      {/* Collapse Toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className={`mt-auto flex items-center gap-2 text-sm hover:bg-white hover:text-red-600 text-white border border-white rounded py-2 px-3 transition cursor-pointer ${
          collapsed ? 'justify-center px-2' : 'justify-start'
        }`}
      >
        {collapsed ? (
          <ChevronRightIcon className="h-5 w-5" />
        ) : (
          <>
            <ChevronLeftIcon className="h-5 w-5" />
            <span className="truncate ">Thu gọn</span>
          </>
        )}
      </button>
    </aside>
  )
}
