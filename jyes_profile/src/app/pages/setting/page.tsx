'use client'

import { useEffect, useState } from 'react'

const themes = ['light', 'dark', 'system']
const fonts = ['sans', 'serif', 'mono']
const scrollbars = ['default', 'hidden', 'custom']

export default function SettingsPage() {
  const [theme, setTheme] = useState('system')
  const [font, setFont] = useState('sans')
  const [scroll, setScroll] = useState('default')

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('ui-settings')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setTheme(parsed.theme || 'system')
        setFont(parsed.font || 'sans')
        setScroll(parsed.scroll || 'default')
      } catch (e) {
        console.warn('Lỗi khi đọc localStorage:', e)
      }
    }
  }, [])

  // Save + Apply changes
  useEffect(() => {
    const root = document.documentElement

    // Save
    localStorage.setItem(
      'ui-settings',
      JSON.stringify({ theme, font, scroll })
    )

    // Theme
    if (theme === 'dark') {
      root.classList.add('dark')
    } else if (theme === 'light') {
      root.classList.remove('dark')
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      root.classList.toggle('dark', prefersDark)
    }

    // Font
    root.style.fontFamily =
      font === 'sans'
        ? 'ui-sans-serif, system-ui'
        : font === 'serif'
        ? 'Georgia, serif'
        : 'ui-monospace, SFMono-Regular'

    // Scrollbar
    root.classList.remove('scroll-hidden', 'scroll-custom')
    if (scroll === 'hidden') root.classList.add('scroll-hidden')
    if (scroll === 'custom') root.classList.add('scroll-custom')
  }, [theme, font, scroll])

  return (
    <main className="min-h-screen w-full px-6 py-12 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 text-white overflow-auto">
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg p-10 rounded-xl shadow-xl">
        <h1 className="text-4xl font-bold mb-8 text-center">⚙️ Tuỳ chỉnh Giao Diện</h1>

        <div className="space-y-10">
          {/* Theme */}
          <div>
            <label className="block mb-2 font-semibold">🎨 Giao diện:</label>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-white/20 backdrop-blur-md text-red-800"
            >
              {themes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Font */}
          <div>
            <label className="block mb-2 font-semibold">🔠 Font chữ:</label>
            <select
              value={font}
              onChange={(e) => setFont(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-white/20 backdrop-blur-md text-red-600"
            >
              {fonts.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </div>

          {/* Scrollbar */}
          <div>
            <label className="block mb-2 font-semibold">🖱️ Thanh cuộn:</label>
            <select
              value={scroll}
              onChange={(e) => setScroll(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-white/20 backdrop-blur-md text-red-400"
            >
              {scrollbars.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </main>
  )
}
