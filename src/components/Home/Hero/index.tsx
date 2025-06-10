"use client"
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section 
      style={{ 
        backgroundImage: 'url(https://doccure.dreamstechnologies.com/react/template/4268674dd279fd08bb06.png)',
        objectFit: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} 
      id="home-section"
      className="min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="col-span-1 lg:col-span-6">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold mb-4 sm:mb-5 text-black dark:text-white text-center lg:text-left">
              Talk to a Doctor,
              Anytime, Anywhere
            </h1>
            <p className="text-base sm:text-xl lg:text-2xl text-black/55 dark:text-white/50 font-normal mb-8 sm:mb-10 text-center lg:text-left">
              Nền tảng tư vấn y tế trực tuyến 24/7, kết nối bác sĩ và AI chăm sóc sức khỏe của bạn.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link 
                href="#cook-section" 
                className="w-full sm:w-auto text-lg sm:text-xl font-medium rounded-full py-3 sm:py-4 px-6 sm:px-8 lg:px-14  border border-primary hover:bg-transparent hover:text-primary transition-colors duration-300 text-center button-primary"
              >
                Tư Vấn Ngay
              </Link>
              <Link 
                href="#specialty-section" 
                className="w-full sm:w-auto text-lg sm:text-xl font-medium rounded-full py-3 sm:py-4 px-6 sm:px-8 lg:px-10 border border-primary  hover:bg-primary hover:text-white transition-colors duration-300 text-center button-outline"
              >
                Khám Phá Thêm
              </Link>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-6 flex justify-center relative">
            <Image 
              unoptimized
              src="https://res.cloudinary.com/dut4zlbui/image/upload/v1742739624/klp4ifzgckkmhcxtyuab.png" 
              alt="Doctor consultation illustration"
              width={1000}
              height={805}
              className="w-full max-w-lg lg:max-w-none"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
