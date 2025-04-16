import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = (props) => {
  const { width = 120, height = 60 } = props;

  return (
    <Link href="/" className='flex items-center text-black dark:text-white text-2xl font-semibold gap-4 logo-image'>
      <Image
        src="https://res.cloudinary.com/dut4zlbui/image/upload/v1741615997/tuw1thbedrzcp17iv34p.png"
        alt="logo"
        width={width}
        height={height}
        style={{ width: 'auto', height: 'auto' }}
        quality={100}
      />
    </Link>
  );
};

export default Logo;
