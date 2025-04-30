import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  width?: number
  height?: number
}

const Logo: React.FC<LogoProps> = ({ width = 120, height = 60 }) => {
  return (
    <Link 
      href="/" 
      className="flex items-center text-black dark:text-white text-2xl font-semibold gap-4 logo-image"
    >
      <Image
        unoptimized
        src="/images/logo.png"
        alt="TalkToDoc Logo"
        width={width}
        height={height}
        priority
        className="w-auto h-auto"
      />
    </Link>
  )
}

export default Logo
