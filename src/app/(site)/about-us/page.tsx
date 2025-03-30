import Image from "next/image";
import "./styles.scss";
import WhyChoseUsItem from "@/components/AboutUs/WhyChoseUsItem";
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
    <main className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md py-10 about-us-page">
      <h1 className="text-3xl lg:text-4xl font-semibold text-center mb-8">
        Về Chúng Tôi
      </h1>

      <div className="grid gap-6">
        <section className="about-us-section">
          <div className="image-gallery flex flex-col md:flex-row gap-4 items-center">
            <div className="image-gallary-left flex flex-col gap-4">
              <Image style={{ backgroundColor: "#f0f0f0" }} src="https://doccure.dreamstechnologies.com/react/template/5de17f17b6648e45f683.jpg" alt="about-us" width={290} height={380} className="picture-1" />
              <Image style={{ backgroundColor: "#f0f0f0" }} src="https://doccure.dreamstechnologies.com/react/template/081db868a01ff2b11273.jpg" alt="about-us" width={290} height={200} className="picture-2" />
            </div>
            <div className="image-gallary-right">
              <Image style={{ backgroundColor: "#f0f0f0" }} src="https://doccure.dreamstechnologies.com/react/template/5646226f781fd38ecd1b.jpg" alt="about-us" width={290} height={380} className="picture-3" />
            </div>
            <div className="about-us-content flex flex-col gap-1 w-2/5">
              <h2 className="text-2xl font-semibold sub-title">Thông tin của Talk To Doc</h2>
              <p className="text-gray-600 main-title">
                Talk to Doc – Kết nối bạn với bác sĩ mọi lúc, mọi nơi
              </p>
              <p className="text-gray-600 content-text content-text-1">
                Chúng tôi mang đến giải pháp tư vấn y tế trực tuyến an toàn, nhanh chóng và đáng tin cậy, giúp bạn chăm sóc sức khỏe dễ dàng hơn bao giờ hết.              </p>
              <p className="text-gray-600 content-text content-text-2">
                Tại Talk to Doc, chúng tôi mong muốn tạo ra một hệ sinh thái y tế số hiện đại, nơi mọi người đều có thể tiếp cận dịch vụ chăm sóc sức khỏe chất lượng cao – dù ở bất kỳ đâu, vào bất kỳ thời điểm nào.
              </p>
              <div className="flex items-center gap-4">
                <div className="icon-phone text-center flex items-center justify-center">P</div>
                <div className="flex flex-col gap-1">
                  <div className="contact-now-text">Liên hệ ngay</div>
                  <div className="contact-phone-number">+84 1234567890</div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-us-content-why-chose-us py-10 flex flex-col gap-8">
            <h2 className="text-2xl font-semibold sub-title text-center w-full ml-auto mr-auto">Tại sao chọn Talk To Doc?</h2>
            <div className="why-chose-us-items flex flex-col md:flex-row gap-2 md:gap-4">
              {
                items.map((item, index) => (
                  <WhyChoseUsItem key={index} item={item} />
                ))
              }
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}