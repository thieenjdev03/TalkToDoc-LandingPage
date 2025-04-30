"use client"
import Image from 'next/image';
import Link from 'next/link';
import { FeaturesData } from '@/app/api/data';
import { Icon } from "@iconify/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Features = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 500,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <section id="specialty-section">
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md'>
                <div className='text-center mb-14' >
                    <p className='text-primary text-lg font-normal mb-4 tracking-widest uppercase'>Chuyên Khoa</p>
                    <h2 className='text-3xl lg:text-4xl font-semibold text-black dark:text-white lg:max-w-60% mx-auto'>TalkToDoc hỗ trợ đa dạng các chuyên khoa</h2>
                </div>
                <Slider {...settings}>
                    {FeaturesData.map((items, i) => (
                        <div className='p-8 rounded-3xl bg-gradient-to-b work-item-wrapper' key={i}>
                            <div className='work-img-bg rounded-full flex justify-center'>
                                <Image 
                                unoptimized
                                src={items?.imgSrc} alt={items?.imgSrc} width={80} height={80} />
                            </div>
                            <h3 className='text-xl text-black dark:text-white font-semibold text-center mt-6'>{items.heading}</h3>
                            <p className='text-md font-normal text-black/50 dark:text-white/50 text-center mt-2'>{items.subheading}</p>
                            <div className='flex items-center justify-center '>
                                <Link href='/' className='text-center text-lg group duration-300 ease-in-out font-medium text-primary mt-2 overflow-hidden flex items-center relative after:absolute after:w-full after:h-px after:bg-primary after:bottom-0 after:right-0 after:translate-x-full hover:after:translate-x-0'>
                                    Đặt Lịch Khám Ngay
                                    <Icon
                                        icon="tabler:chevron-right"
                                        width="24"
                                        height="24"
                                        className="text-primary "
                                    />
                                </Link>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default Features;
