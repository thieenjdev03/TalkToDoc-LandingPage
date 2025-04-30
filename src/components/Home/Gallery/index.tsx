"use client"
import Image from 'next/image';
import { galleryImages } from '@/app/api/data';
import Masonry from 'react-masonry-css';
import Link from 'next/link';
import 'aos/dist/aos.css'
import AOS from 'aos'
import { useEffect } from 'react'
import { ProcessStepsData } from './constant'

const Gallery = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true }) // Hiệu ứng kéo dài 800ms, chỉ xuất hiện 1 lần
    }, [])

    return (
        <section id="process-section">
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md' id='gallery-section'>
                <div className="text-center">
                    <p className='text-primary text-lg font-normal mb-4 tracking-widest uppercase'>Quy Trình</p>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-black dark:text-white">
                    Không xếp hàng, không chờ đợi – Khám bệnh chỉ với vài cú click
                    </h2>
                </div>
                <div className="my-16 px-6">
                    <Masonry
                        breakpointCols={{ 'default': 2, '700': 2, '500': 1 }}
                        className="flex gap-6"
                        columnClassName="masonry-column"
                    >
                    </Masonry>
                </div>
                <div className="process-step-list">
                    {ProcessStepsData.map((step, index) => (
                        <div className="flex items-center gap-6" key={index}>
                            <div
                                className="process-step-item"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="step-image">
                                    <Image
                                        unoptimized
                                        src={step.imgSrc}
                                        alt={`step${index + 1}`}
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="step-name">{step.title}</div>
                                <div className="step-description">{step.description}</div>
                            </div>

                            {/* 👉 Chỉ hiển thị mũi tên nếu không phải bước cuối */}
                            {index < ProcessStepsData.length - 1 && (
                                <i className="fa-solid fa-arrow-right text-2xl text-black/50"></i>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Gallery;
