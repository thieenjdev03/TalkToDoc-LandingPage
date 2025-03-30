import Image from "next/image";
import './style.scss'
export default function ContactUs() {
    return (
        <main className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md py-10 about-us-page contact-us-page">
            <h1 className="text-3xl lg:text-4xl font-semibold text-center mb-8">
                Liên Hệ Chúng Tôi
            </h1>
            <div className="contact-us-content flex flex-col md:flex-row gap-8">
                <div className="contact-us-content-left flex flex-col gap-4">
                    <p className="font-semibold sub-title">Liên hệ với chúng tôi</p>
                    <h2 className="text-gray-600 main-title">
                        Bạn có câu hỏi?
                    </h2>
                    <div className="contact-list flex flex-col">
                        <div className="contact-item flex items-center gap-2">
                            <div className="contact-item-icon">
                                {/* <Image src="/images/contact-us/phone.svg" alt="phone" width={24} height={24} /> */}
                                <i className="fa-solid fa-phone">Icon</i>
                            </div>
                            <div className="contact-item-content flex flex-col gap-1">
                                <p className="contact-item-content-title">
                                    Điện thoại
                                </p>
                                <p className="contact-item-content-value">
                                    +84 1234567890
                                </p>
                            </div>
                        </div>
                        <div className="contact-item flex items-center gap-2">
                            <div className="contact-item-icon">
                                {/* <Image src="/images/contact-us/phone.svg" alt="phone" width={24} height={24} /> */}
                                <i className="fa-solid fa-phone">I</i>
                            </div>
                            <div className="contact-item-content flex flex-col gap-1">
                                <p className="contact-item-content-title">
                                    Điện thoại
                                </p>
                                <p className="contact-item-content-value">
                                    +84 1234567890
                                </p>
                            </div>
                        </div>
                        <div className="contact-item flex items-center gap-2">
                            <div className="contact-item-icon">
                                {/* <Image src="/images/contact-us/phone.svg" alt="phone" width={24} height={24} /> */}
                                <i className="fa-solid fa-phone">Icon</i>
                            </div>
                            <div className="contact-item-content flex flex-col gap-1">
                                <p className="contact-item-content-title">
                                    Điện thoại
                                </p>
                                <p className="contact-item-content-value">
                                    +84 1234567890
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-us-content-right">
                    <form className="contact-us-form">
                        <div className="contact-us-form-group">
                            <div className="flex gap-4">
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="name">Họ và tên</label>
                                    <input type="text" id="name" name="name" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" />
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="phoneNumber">Số điện thoại</label>
                                    <input id="phoneNumber" name="phoneNumber"></input>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="service">Dịch vụ</label>
                                    <input id="service" name="service"></input>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="message">Nội dung</label>
                                <textarea id="message" name="message"></textarea>
                            </div>
                            <div className="flex justify-center">
                                <button type="submit">Gửi Ngay</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}