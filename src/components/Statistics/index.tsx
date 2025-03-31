"use client"
import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const statisticsData = [
    { number: 300, suffix: "+", label: "Bác Sĩ Khả Dụng" },
    { number: 18, suffix: "+", label: "Chuyên Ngành" },
    { number: 5000, suffix: "+", label: "Lượt Khám" },
    { number: 20, suffix: "+", label: "Bệnh Viện & Nhà Thuốc" },
]

const Statistics = () => {
    const { ref, inView } = useInView({ triggerOnce: true })

    return (
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8">
            {statisticsData.map((stat, index) => (
                <div key={index} className="text-center">
                    <h3 className="text-3xl font-bold text-primary mb-2">
                        {inView ? (
                            <CountUp end={stat.number} duration={2} suffix={stat.suffix} />
                        ) : (
                            `0${stat.suffix}`
                        )}
                    </h3>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
            ))}
        </div>
    )
}

export default Statistics