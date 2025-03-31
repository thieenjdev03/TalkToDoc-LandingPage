"use client";
import Image from "next/image";
import "./style.scss";
import Statistics from '@/components/Statistics'
import { motion } from "framer-motion";

const testimonialsData = [
  {
    ranking: "⭐⭐⭐⭐⭐",
    title: "Bác Sĩ tận tâm",
    name: "Phạm Hoài Nam",
    description:
      "Dịch vụ khám từ xa giúp tôi theo dõi sức khoẻ định kỳ cho bố mẹ lớn tuổi dễ dàng hơn. Đội ngũ bác sĩ rất tận tâm.",
    avatar:
      "https://res.cloudinary.com/dut4zlbui/image/upload/v1743438743/g9sf4ovjegun9sw9cfxl.jpg",
    city: "Đà Nẵng",
  },
  {
    ranking: "⭐⭐⭐⭐⭐",
    name: "Nguyễn Thị Minh Anh",
    title: "Ứng dụng tiện lợi",
    description:
      "Tiện lợi vô cùng. Tôi không cần xin nghỉ làm, chỉ cần đặt lịch và trao đổi trực tiếp với bác sĩ. Kết quả điều trị rất hiệu quả.",
    avatar:
      "https://res.cloudinary.com/dut4zlbui/image/upload/v1743438759/zgtgzdd5f4ps8rxv2yxd.jpg",
    city: "Đà Nẵng",
  },
  {
    ranking: "⭐⭐⭐⭐⭐",
    name: "Trần Văn A",
    title: "Bác sĩ chuyên nghiệp",
    description:
      "Lần đầu tiên tôi thử khám online, và thật sự bất ngờ với sự chuyên nghiệp. Bác sĩ tư vấn tận tình, rõ ràng như đi khám tại bệnh viện vậy!",
    avatar:
      "https://res.cloudinary.com/dut4zlbui/image/upload/v1743438759/qu587csbctd2rfsujc3t.webp",
    city: "Đà Nẵng",
  },
];

export default function Testimonials() {
  return (
    <div
      className="testimonials-container py-8 w-auto"
      style={{
        backgroundImage: `url(${'https://res.cloudinary.com/dut4zlbui/image/upload/v1743434581/elhu6yeqtmwphy5jgwq7.png'})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "500px",
      }}
    >
      <h1 className="testimonials-title">
        Hơn 1.500 Bệnh Nhân đã được chữa trị Trực Tuyến
      </h1>
      <div className="testimonials-content">
        <div className="testimonials-list">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonials-item flex flex-col gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="testimonials-item-quotes flex justify-between items-center gap-4">
                <div className="testimonials-item-ranking mb-4">
                  {testimonial.ranking}{" "}
                </div>
                <Image
                  src={
                    "https://res.cloudinary.com/dut4zlbui/image/upload/v1743437654/yvcegoiwrma8kpejzjjy.svg"
                  }
                  alt="quotes"
                  width={20}
                  height={20}
                />
              </div>
              <p className="testimonials-item-title mb-1">{testimonial.title}</p>
              <p className="testimonials-item-description mb-2">
                {testimonial.description}
              </p>
              <div className="user-section flex gap-4 items-center">
                <div className="user-avatar">
                  <Image
                    src={testimonial.avatar}
                    alt="user"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                </div>
                <div className="user-info">
                  <div className="user-name">
                    <h2 className="user-name-text">{testimonial.name}</h2>
                  </div>
                  <div className="user-city">
                    <h2 className="user-city-text">{testimonial.city}</h2>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <Statistics />
      </div>
    </div>
  );
}