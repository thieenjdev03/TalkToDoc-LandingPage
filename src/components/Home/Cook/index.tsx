"use client"
import Image from 'next/image';


const Cook = () => {

    return (
        <section className='relative' id="cook-section">
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
                <div className='absolute right-0 bottom-[-18%] hidden lg:block'>
                    <Image src='/images/Cook/burger.png' alt="burger-image" width={463} height={622} />
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5'>
                    <div className='col-span-6 flex justify-start'>
                        <Image src="/images/Cook/cook.png" alt="nothing" width={636} height={808} />
                    </div>
                    <div className='col-span-6 flex flex-col justify-center'>
                        <p className='text-primary text-lg font-normal mb-3 tracking-widest uppercase text-start'>Tư Vấn Với Chúng Tôi</p>
                        <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white text-start">
                            Vì sao bạn nên chọn TalkToDoc?
                        </h2>
                        <p className='text-black/50 dark:text-white/50 md:text-lg font-normal mb-10 text-start mt-2'>TalkToDoc là nền tảng tư vấn y tế trực tuyến giúp bạn kết nối nhanh chóng với bác sĩ chuyên khoa mọi lúc, mọi nơi. Với sự hỗ trợ của AI thông minh, người dùng có thể nhận tư vấn ban đầu, hướng dẫn dinh dưỡng, vật lý trị liệu và chăm sóc sức khỏe chỉ trong vài bước đơn giản. Tiết kiệm thời gian, chi phí và đặc biệt phù hợp cho người bận rộn, người ở xa hoặc cần theo dõi sức khỏe thường xuyên. TalkToDoc – chăm sóc sức khỏe dễ dàng hơn bao giờ hết.</p>
                        <button className='text-xl font-medium rounded-full text-white py-5 px-6 bg-primary lg:px-10 mr-6 w-fit border border-primary hover:bg-transparent hover:text-primary'>Xem Thêm</button>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Cook;
