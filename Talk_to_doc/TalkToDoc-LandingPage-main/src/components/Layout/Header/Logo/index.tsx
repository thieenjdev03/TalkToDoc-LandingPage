import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  width?: number
  height?: number
}

const Logo: React.FC<LogoProps> = ({ width = 200, height = 100 }) => {
  return (
    <Link 
      href="/" 
      className="flex items-center text-black dark:text-white text-2xl font-semibold gap-4 logo-image"
    >
      <Image
        unoptimized
        src="https://res.cloudinary.com/dut4zlbui/image/upload/v1746087113/r8fxpcrmefstk2jn90a3.png"
        alt="TalkToDoc Logo"
        width={width}
        height={height}
        priority
      />
    </Link>
  )
}

export default Logo
