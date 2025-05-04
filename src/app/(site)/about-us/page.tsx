"use client"
import Image from "next/image"
import "./styles.scss"
import WhyChoseUsItem from "@/components/AboutUs/WhyChoseUsItem"
import Testimonials from "@/components/Testimonials"
import { motion } from 'framer-motion'
import Breadcrumb from "@/components/Breadscum"
import DoctorList from "@/components/Doctor/DoctorList"

export default function AboutUs() {
  const items = [
    {
      image: "https://res.cloudinary.com/dut4zlbui/image/upload/v1743353835/yrc2avrjyniftkjdaaap.svg",
      title: "Tư vấn 24/7:",
      description: "Dù bạn cần tư vấn giữa đêm khuya hay buổi sáng sớm, đội ngũ bác sĩ được cấp phép của chúng tôi luôn sẵn sàng hỗ trợ bạn mọi lúc."
    },
    {
      image: "https://res.cloudinary.com/dut4zlbui/image/upload/v1743353835/yrc2avrjyniftkjdaaap.svg",
      title: "Bảo mật và An toàn:",
      description: "Chúng tôi áp dụng các tiêu chuẩn bảo mật cao, mã hóa thông tin và quy trình kiểm soát nghiêm ngặt, đảm bảo luôn được bảo vệ."
    },
    {
      image: "https://res.cloudinary.com/dut4zlbui/image/upload/v1743353835/bdkkpyj00o3maeimz9ur.svg",
      title: "Dịch vụ chuyên nghiệp:",
      description: "Mỗi bác sĩ tại TalkToDoc đều được tuyển chọn kỹ lưỡng với chuyên môn cao và tinh thần đồng hành."
    },
    {
      image: "https://res.cloudinary.com/dut4zlbui/image/upload/v1743353836/z8luiffqvrhxkneonnca.svg",
      title: "Hệ thống quản lý thông minh:",
      description: "Giao diện thân thiện và hệ thống quản lý thông minh dễ dàng đặt lịch, theo dõi lịch sử tư vấn và quản lý hồ sơ sức khỏe chỉ với vài thao tác."
    }
  ]
  return (
    <>
      <Breadcrumb title="Về Chúng Tôi" />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-10 about-us-page"
      >
        <section className="about-us-section">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
            <div className="image-gallery w-full lg:w-1/2 md:w-1/2 xl:w-1/2 2xl:w-1/2 flex flex-col gap-4">
              <div className="image-gallary-left flex flex-row gap-4 w-full">
                <div className="relative w-full aspect-[3/4]">
                  <Image 
                    unoptimized
                    src="https://res.cloudinary.com/dut4zlbui/image/upload/v1744530750/shsnkjrh5mp1hmdmznhh.avif" 
                    alt="about-us" 
                    fill
                    className="object-cover rounded-lg picture-1"
                  />
                </div>
                <div className="relative w-full aspect-[3/4]">
                  <Image 
                    unoptimized
                    src="https://res.cloudinary.com/dut4zlbui/image/upload/v1743433538/sh5zkgwit4wlfkqkqsgd.jpg" 
                    alt="about-us" 
                    fill
                    className="object-cover rounded-lg picture-2"
                  />
                </div>
              </div>
              <div className="image-gallary-right w-full flex justify-center items-center">
                <div className="relative w-[380px] h-[240px] aspect-[3/4]">
                  <Image 
                    unoptimized
                    src="https://res.cloudinary.com/dut4zlbui/image/upload/v1743433817/nxtv0xwv6yzpuqhrmtni.jpg" 
                    alt="about-us" 
                    fill
                    className="object-cover rounded-lg picture-3"
                  />
                </div>
              </div>
            </div>
            <div className="about-us-content w-full lg:w-1/2 flex flex-col gap-4">
              <h2 className="text-xl sm:text-2xl font-semibold sub-title">Thông tin của TalkToDoc</h2>
              <p className="text-gray-600 text-lg sm:text-xl main-title">
                Talk to Doc – Kết nối bạn với bác sĩ mọi lúc, mọi nơi
              </p>
              <p className="text-gray-600 text-base sm:text-lg content-text content-text-1">
                Chúng tôi mang đến giải pháp tư vấn y tế trực tuyến an toàn, nhanh chóng và đáng tin cậy, giúp bạn chăm sóc sức khỏe dễ dàng hơn bao giờ hết.
              </p>
              <p className="text-gray-600 text-base sm:text-lg content-text content-text-2">
                Tại Talk to Doc, chúng tôi mong muốn tạo ra một hệ sinh thái y tế số hiện đại, nơi mọi người đều có thể tiếp cận dịch vụ chăm sóc sức khỏe chất lượng cao – dù ở bất kỳ đâu, vào bất kỳ thời điểm nào.
              </p>
              <div className="flex items-center gap-4 mt-4">
                <div className="icon-phone text-center flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl">P</div>
                <div className="flex flex-col gap-1">
                  <div className="contact-now-text text-sm sm:text-base">Liên hệ ngay</div>
                  <div className="contact-phone-number text-lg sm:text-xl font-semibold">+84 1234567890</div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-us-content-why-chose-us py-12 sm:py-20 flex flex-col gap-8">
            <h2 style={{lineHeight: 'normal'}} className="text-xl sm:text-2xl font-semibold sub-title text-center">Tại sao chọn TalkToDoc?</h2>
            <div className="why-chose-us-items grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.2 }}
                >
                  <WhyChoseUsItem item={item} />
                </motion.div>
              ))}
            </div>
          </div>
          <Testimonials />
        </section>
      </motion.main>
    </>
  )
}