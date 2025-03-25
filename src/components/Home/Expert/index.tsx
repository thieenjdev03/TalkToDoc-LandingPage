"use client"
import Slider from "react-slick";
import React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ExpertData } from "@/app/api/data";

const Expert = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
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
        <section className="bg-secondary">
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md'>
                <div className="text-center">
                    <p className='text-primary text-lg font-normal mb-4 tracking-widest uppercase'>TOP Bác Sĩ Hàng Đầu</p>
                    <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white">
                        Danh Sách Bác Sĩ Hàng Đầu Tại Nền Tảng
                    </h2>
                </div>
                <Slider {...settings}>
                    {ExpertData.map((items, i) => (
                        <div key={i}>
                            <div className='m-3 py-14 my-10 text-center'>
                                <div className="relative wrapper-image">
                                    <Image src={items.imgSrc} alt="gaby" width={180} height={180} className="inline-block m-auto" />
                                    <div className="absolute top-[50%] right-[2%] specialties-img">
                                        <Image src={'https://cdn.prod.website-files.com/6655ee718cb90bc71fc20518/66a0de06fa0eae55f3570e1c_mental-health%201.svg'} alt="specialties" width={180} height={180} />
                                    </div>
                                </div>
                                <h3 className='text-2xl font-semibold text-lightblack mt-2'>{items.name}</h3>
                                <h4 className='text-lg font-normal text-lightblack pt-4 pb-2 opacity-50'>{items.profession}</h4>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default Expert;