"use client"
import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ExpertData, getDoctor } from "@/app/api/data";
import DoctorCard from "./DoctorCard";
import Link from "next/link";
const Expert = () => {
    const [doctors, setDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        const fetchDoctors = async () => {
            const data = await getDoctor();
            if(data && data.length > 0) { 
                setDoctors(data);
            } else { 
                setDoctors([]);
            }
        };
        fetchDoctors();
    }, []);
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 500,
        cssEase: "linear",
        centerMode: true,
        centerPadding: "60px",
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
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
            <div className='mx-auto lg:max-w-screen-xl md:max-w-screen-md'>
                <div className="text-center flex justify-between flex-col mb-10">
                    <p className='text-primary text-lg font-normal mb-4 tracking-widest uppercase'>TOP Bác Sĩ Hàng Đầu</p>
                    <h2 className="text-3xl lg:text-4xl font-semibold` text-black dark:text-white">
                        Gặp Gỡ Bác Sĩ Hàng Đầu Của Chúng Tôi
                    </h2>

                </div>
                <Slider {...settings}>
                    {
                        doctors.map((doctor: any, index: any) => (
                            <DoctorCard key={index} doctor={doctor} />
                        ))
                    }
                </Slider>
                <Link
                    href="/doctor-list"
                    className="mt-10 hidden ml-auto mr-auto lg:block bg-primary w-[160px] text-center text-white hover:bg-secondary hover:text-white font-medium text-lg py-4 px-8 rounded-full "
                >
                    Xem tất cả
                </Link>
            </div>
        </section>
    )
}

export default Expert;