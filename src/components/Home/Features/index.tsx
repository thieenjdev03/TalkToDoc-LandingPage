"use client"
import Image from 'next/image'
import { FeaturesData } from '@/app/api/data'


const Features = () => {
  return (
    <section id="specialty-section" className='sm:px-2 flex items-center justify-center'>
      <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md'>
        <div className='text-center mb-14'>
          <p className='text-primary text-2xl font-semibold mb-4 tracking-widest uppercase'>Chuyên Khoa</p>
          <h2 className='text-3xl lg:text-4xl font-bold text-black dark:text-white lg:max-w-60% mx-auto'>
            TalkToDoc hỗ trợ đa dạng các chuyên khoa
          </h2>
        </div>

        {/* Render items thẳng ra */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 p-20 ">
          {FeaturesData.map((item, i) => (
            <div 
              key={i} 
              className='p-4 rounded-3xl bg-gradient-to-b flex flex-col justify-between specialty-item'
            >
              <div className='work-img-bg rounded-full flex justify-center mb-4'>
                <Image 
                  unoptimized
                  src={item?.imgSrc} 
                  alt={item?.heading} 
                  width={80} 
                  height={80} 
                />
              </div>
              <h3 className='text-xl lg:text-2xl text-black dark:text-white font-semibold text-center mb-2'>
                {item.heading}
              </h3>
              <p className='min-h-[48px] text-md md:text-lg lg:text-xl font-normal text-black/50 dark:text-white/50 text-center mb-4'>
                {item.subheading}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
