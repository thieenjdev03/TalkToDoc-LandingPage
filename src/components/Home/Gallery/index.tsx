"use client"
import Image from 'next/image'
import { galleryImages } from '@/app/api/data'
import Masonry from 'react-masonry-css'
import Link from 'next/link'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { useEffect } from 'react'
import { ProcessStepsData } from './constant'

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
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
        <div className="process-step-list flex flex-col md:flex-row items-center justify-center gap-6 mt-10">
          {ProcessStepsData.map((step, index) => (
            <div className="flex flex-col md:flex-row items-center gap-6" key={index}>
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
                <div className="step-description md:text-lg">{step.description}</div>
              </div>

              {index < ProcessStepsData.length - 1 && (
                <div className='flex items-center justify-center'>
                  <svg className="w-6 h-6 text-black/50 hidden md:block lg:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <svg className="w-6 h-6 text-black/50 block md:hidden lg:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
