"use client"
import Image from 'next/image';


const Cook = () => {

    return (
        <section className='relative bg-secondary' id="about-section">
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
                <div className='flex flex-col lg:flex-row my-16 space-x-5'>
                    <div className='flex justify-start'>
                        <Image 
                    unoptimized
                    style={{ objectFit: 'cover' }} src="https://res.cloudinary.com/dut4zlbui/image/upload/v1744206007/g4rtf669er3mbanpfoay.png" alt="nothing" width={1200} height={1000} />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <p className='text-primary text-lg font-normal mb-4 tracking-widest uppercase text-start'>Tư Vấn Với Chúng Tôi</p>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-black dark:text-white text-start">
                            Vì sao bạn nên chọn TalkToDoc?
                        </h2>
                        <p className='text-black/50 dark:text-white/50 md:text-lg font-normal mb-10 text-start mt-2'>TalkToDoc là nền tảng tư vấn y tế trực tuyến giúp bạn kết nối nhanh chóng với bác sĩ chuyên khoa mọi lúc, mọi nơi. Với sự hỗ trợ của AI thông minh, người dùng có thể nhận tư vấn ban đầu, hướng dẫn dinh dưỡng, vật lý trị liệu và chăm sóc sức khỏe chỉ trong vài bước đơn giản. Tiết kiệm thời gian, chi phí và đặc biệt phù hợp cho người bận rộn, người ở xa hoặc cần theo dõi sức khỏe thường xuyên. TalkToDoc – chăm sóc sức khỏe dễ dàng hơn bao giờ hết.</p>
                        <a href="/about-us">
                            <button className='text-xl font-medium rounded-full text-white py-5 px-6 bg-primary lg:px-10 mr-6 w-fit border border-primary hover:bg-transparent'>Xem Thêm</button>
                        </a>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Cook;
