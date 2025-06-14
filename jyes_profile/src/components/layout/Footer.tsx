// components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="w-full text-center py-2 bg-red-400 text-white shadow-sm border-2 border-red-500">
      © {new Date().getFullYear()} Jye's Profile
    </footer>
  )
}
