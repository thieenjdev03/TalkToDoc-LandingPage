"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { messages } from "./constant/data"
import { ChevronsRight } from "lucide-react"

const Advices = () => {
    const [index, setIndex] = useState(0)
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false)
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % messages.length)
                setIsVisible(true)
            }, 500)
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    return (
        <section 
            className="relative h-screen p-6 sm:p-10 bg-gradient-to-b from-[#9AC5FF] to-[#DBEAFE]" 
            id="about-section"
        >
            <div className="w-full px-2 sm:px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-8">
                
                {/* Cột ảnh */}
                <div className="w-full lg:w-1/2 lg:translate-x-20 translate-x-0 sm:translate-x-4">
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                        <Image 
                            unoptimized
                            src="/images/Gallery/AI.png" 
                            alt="TalkToDoc platform illustration"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Cột chữ */}
                <div className="w-full lg:w-1/2 px-1 lg:-translate-x-20 -translate-x-0 sm:-translate-x-4">
                    <h2 className="text-2xl sm:text-3xl lg:text-3xl font-semibold mb-4 sm:mb-5 text-black dark:text-white text-center lg:text-left">
                        Công nghệ AI <br/>
                        Hỗ trợ & Giải đáp về sức khỏe
                    </h2>
                    
                    <p className="text-black/60 dark:text-white/60 text-base sm:text-lg font-normal mb-6">
                        Các vấn đề chăm sóc sức khỏe và chế độ dinh dưỡng
                    </p>

                    {/* Text xoay với fade-out/fade-in */}
                    <h2
                        className={`text-2xl sm:text-3xl lg:text-3xl font-semibold mb-4 sm:mb-5 
                                    text-blue-600 dark:text-white text-center lg:text-right
                                    transition-opacity duration-500 ease-in-out 
                                    ${isVisible ? "opacity-100" : "opacity-0"}`}
                    >
                        {messages[index]}
                    </h2>
                    
                    <div className="text-black/60 dark:text-white/60 text-sm sm:text-base font-thin mb-6 text-end">
                        Bạn có thể trò chuyện với AICare miễn phí về Đặt lịch khám, Xét nghiệm, <br/>
                        Phân tích toa thuốc bằng hình ảnh, Chế độ dinh dưỡng phù hợp,...  
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-end">
                        <a href="/about-us" className="inline-block">
                            <button className="text-base sm:text-lg font-medium rounded-full text-white py-3 sm:py-4 px-6 sm:px-8 bg-primary border border-primary hover:bg-transparent hover:text-primary transition-colors duration-300 flex items-center">
                                Kết nối ngay với AICare 
                                <ChevronsRight className="w-5 h-5 ml-2" />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advices
