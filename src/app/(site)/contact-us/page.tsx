import Image from "next/image";
import './style.scss'
import Breadcrumb from "@/components/Breadscum";
const contactData = {
    phone: "+84 1234567890",
    address: "123 Đường ABC, Quận 1, TP.HCM",
    email: "contact@talktodoc.vn"
};

export default function ContactUs() {
    return (
        <>
            <Breadcrumb title="Liên Hệ Chúng Tôi" />
            <main className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md py-10 about-us-page contact-us-page flex flex-col gap-8">
                <div className="contact-us-content flex flex-col md:flex-row gap-8">
                    <div className="contact-us-content-left flex flex-col gap-4">
                        <p className="font-semibold sub-title">Liên hệ với chúng tôi</p>
                        <h2 className="text-gray-600 main-title">
                            Bạn có câu hỏi?
                        </h2>
                        <div className="contact-list flex flex-col">
                            <div className="contact-item flex items-center gap-2">
                                <div className="contact-item-icon">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <div className="contact-item-content flex flex-col gap-1">
                                    <p className="contact-item-content-title">
                                        Điện thoại
                                    </p>
                                    <p className="contact-item-content-value">
                                        {contactData.phone}
                                    </p>
                                </div>
                            </div>
                            <div className="contact-item flex items-center gap-2">
                                <div className="contact-item-icon">
                                    <i className="fa-solid fa-map-marker-alt"></i>
                                </div>
                                <div className="contact-item-content flex flex-col gap-1">
                                    <p className="contact-item-content-title">
                                        Địa chỉ
                                    </p>
                                    <p className="contact-item-content-value">
                                        {contactData.address}
                                    </p>
                                </div>
                            </div>
                            <div className="contact-item flex items-center gap-2">
                                <div className="contact-item-icon">
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                                <div className="contact-item-content flex flex-col gap-1">
                                    <p className="contact-item-content-title">
                                        Email
                                    </p>
                                    <p className="contact-item-content-value">
                                        {contactData.email}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-us-content-right">
                        <form className="contact-us-form">
                            <div className="contact-us-form-title"> Đặt câu hỏi bên dưới <i className="fa-solid fa-arrow-down"></i></div>
                            <div className="contact-us-form-group">
                                <div className="flex gap-4">
                                    <div className="flex flex-col gap-1">
                                        <label htmlFor="name">Họ và tên</label>
                                        <input type="text" id="name" name="name" placeholder="Nhập họ và tên của bạn" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" name="email" placeholder="Nhập email của bạn" />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex flex-col gap-1">
                                        <label htmlFor="phoneNumber">Số điện thoại</label>
                                        <input id="phoneNumber" name="phoneNumber" placeholder="Nhập số điện thoại" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label htmlFor="service">Dịch vụ</label>
                                        <input id="service" name="service" placeholder="Nhập dịch vụ bạn quan tâm" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="message">Nội dung</label>
                                    <textarea id="message" name="message" placeholder="Nhập nội dung bạn muốn gửi" />
                                </div>
                                <div className="flex justify-center">
                                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Gửi Ngay</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="contact-us-map w-full h-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.78786891905!2d106.6974508760549!3d10.827539589324394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528f4a62fce9b%3A0xc99902aa1e26ef02!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBWxINuIExhbmcgLSBDxqEgc-G7nyBjaMOtbmg!5e0!3m2!1svi!2s!4v1743441505797!5m2!1svi!2s"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </main>
        </>
    )
}