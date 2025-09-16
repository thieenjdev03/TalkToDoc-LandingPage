"use client"
import Image from 'next/image'

const Cook = () => {
  return (
    <section className='relative bg-secondary h-screen ' id="about-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-row items-center justify-center">
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 items-center'>
          <div className='w-full lg:w-1/2'>
            <div className='relative aspect-[4/3] w-full overflow-hidden rounded-lg'>
              <Image 
                unoptimized
                src="https://res.cloudinary.com/dut4zlbui/image/upload/v1744206007/g4rtf669er3mbanpfoay.png" 
                alt="TalkToDoc platform illustration"
                fill
                className='object-cover'
              />
            </div>
          </div>
          <div className='w-full lg:w-1/2'>
            <p className='text-primary text-2xl font-semibold mb-4 tracking-widest uppercase'>Tư Vấn Với Chúng Tôi</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black dark:text-white mb-4">
              Vì sao bạn nên chọn TalkToDoc?
            </h2>
            <div className='relative mb-8'>
              <p className='text-black/50 dark:text-white/50 text-base md:text-xl font-normal line-clamp-3'>
                TalkToDoc là nền tảng tư vấn y tế trực tuyến giúp bạn kết nối nhanh chóng với bác sĩ chuyên khoa mọi lúc, mọi nơi. Với sự hỗ trợ của AI thông minh, người dùng có thể nhận tư vấn ban đầu, hướng dẫn dinh dưỡng, vật lý trị liệu và chăm sóc sức khỏe chỉ trong vài bước đơn giản. Tiết kiệm thời gian, chi phí và đặc biệt phù hợp cho người bận rộn, người ở xa hoặc cần theo dõi sức khỏe thường xuyên. TalkToDoc – chăm sóc sức khỏe dễ dàng hơn bao giờ hết.
              </p>
              <button 
                onClick={() => {
                  const p = document.querySelector('.line-clamp-3')
                  if (p) {
                    p.classList.toggle('line-clamp-3')
                  }
                }}
                className='text-primary text-sm font-medium hover:underline'
              >
                Xem thêm
              </button>
            </div>
            <a href="/about-us" className='inline-block'>
              <button className='text-base md:text-lg font-medium rounded-full text-white py-3 md:py-4 px-6 md:px-8 bg-primary border border-primary hover:bg-transparent hover:text-primary transition-colors duration-300'>
                Thông tin chi tiết
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cook
