"use client"
import Image from 'next/image'
import Link from 'next/link'
import { FeaturesData } from '@/app/api/data'
import { Icon } from "@iconify/react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Features = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    speed: 500,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: "60px"
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          centerMode: false,
          centerPadding: "20px"
        }
      },
      {
        breakpoint: 450,
        settings: {
          centerMode: false,
          slidesToShow: 2,
        }
      }
    ]
  }

  return (
    <section id="specialty-section" className='sm:px-2'>
      <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md'>
        <div className='text-center mb-14'>
          <p className='text-primary text-lg font-normal mb-4 tracking-widest uppercase'>Chuyên Khoa</p>
          <h2 className='text-3xl lg:text-4xl font-semibold text-black dark:text-white lg:max-w-60% mx-auto'>TalkToDoc hỗ trợ đa dạng các chuyên khoa</h2>
        </div>
        <div className="px-4">
          <Slider {...settings}>
            {FeaturesData.map((items, i) => (
              <div className='sm:p-2 md:p-4 p-4 rounded-3xl bg-gradient-to-b work-item-wrapper flex flex-col justify-between specialty-item' key={i}>
                <div className='work-img-bg rounded-full flex justify-center'>
                  <Image 
                    unoptimized
                    src={items?.imgSrc} 
                    alt={items?.imgSrc} 
                    width={80} 
                    height={80} 
                  />
                </div>
                <h3 className='text-xl lg:text-2xl text-black dark:text-white font-semibold text-center md:mt-6'>{items.heading}</h3>
                <p className='min-h-[48px] text-md md:text-lg lg:text-xl font-normal text-black/50 dark:text-white/50 text-center mt-2'>{items.subheading}</p>
                <div className='flex items-center justify-center'>
                  <Link 
                    href='/' 
                    className='text-center text-md md:text-lg lg:text-xl group duration-300 ease-in-out font-medium text-primary mt-2 overflow-hidden flex items-center relative after:absolute after:w-full after:h-px after:bg-primary after:bottom-0 after:right-0 after:translate-x-full hover:after:translate-x-0'
                  >
                    Đặt Lịch Khám
                    <Icon
                      icon="tabler:chevron-right"
                      width="24"
                      height="24"
                      className="text-primary"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Features
