"use client"
import Image from 'next/image';
import Link from 'next/link';


const Hero = () => {

    return (
        <section style={{ backgroundImage: 'url(https://doccure.dreamstechnologies.com/react/template/4268674dd279fd08bb06.png)', objectFit: 'cover', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }} id="home-section" className=''>
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20">
                <div className='grid grid-cols-1 lg:grid-cols-12 items-center'>
                    <div className='col-span-6'>
                        <h1 className="text-4xl lg:text-6xl font-semibold mb-5 text-black dark:text-white md:4px lg:text-start text-center">
                            Talk to a Doctor,
                            Anytime, Anywhere
                        </h1>
                        <p className='text-black/55 dark:text-white/50 lg:text-lg font-normal mb-10 lg:text-start text-center'>Nền tảng tư vấn y tế trực tuyến 24/7, kết nối bác sĩ và AI chăm sóc sức khỏe của bạn.</p>
                        <div className='md:flex align-middle justify-center lg:justify-start'>
                            <Link href='#cook-section' className='text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-primary lg:px-14 mr-6 border hover:text-white border-primary hover:bg-transparent'>Tư Vấn Ngay</Link>
                            <Link href='#specialty-section' className='flex border hover:text-black w-full md:w-auto mt-5 md:mt-0 border-primary justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-primary hover:bg-primary'>Khám Phá Thêm</Link>
                        </div>
                    </div>
                    <div className='col-span-6 flex justify-center relative'>
                        <Image src="https://res.cloudinary.com/dut4zlbui/image/upload/v1742739624/klp4ifzgckkmhcxtyuab.png" alt="nothing" width={1000} height={805} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
