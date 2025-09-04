"use client"
import Image from "next/image";
import './style.scss'
import Breadcrumb from "@/components/Breadscum";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';
import 'sweetalert2/dist/sweetalert2.min.css';
import { Metadata } from "next";

const contactData = {
    phone: "+84 1234567890",
    address: "69/68 Đặng Thùy Trâm, Phường 13, Quận Bình Thạnh",
    email: "talktodoc.vlu@gmail.com"
};
export default function ContactUs() {
    const MySwal = withReactContent(Swal);

    return (
        <>
            <Breadcrumb title="Liên Hệ Chúng Tôi" />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl md:max-w-screen-md py-10 about-us-page contact-us-page flex flex-col gap-8">
                <div className="contact-us-content flex flex-col md:flex-row gap-8">
                    <div className="contact-us-content-left flex flex-col gap-4 w-full md:w-1/2">
                        <p className="font-semibold sub-title text-lg sm:text-xl">Liên hệ với chúng tôi</p>
                        <h2 className="text-gray-600 main-title text-2xl sm:text-3xl">
                            Bạn có câu hỏi?
                        </h2>
                        <div className="contact-list flex flex-col gap-4">
                            <div className="contact-item flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                <div className="contact-item-icon text-blue-500 text-xl">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <div className="contact-item-content flex flex-col gap-1">
                                    <p className="contact-item-content-title text-sm sm:text-base font-medium">
                                        Điện thoại
                                    </p>
                                    <p className="contact-item-content-value text-sm sm:text-base">
                                        {contactData.phone}
                                    </p>
                                </div>
                            </div>
                            <div className="contact-item flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                <div className="contact-item-icon text-blue-500 text-xl">
                                    <i className="fa-solid fa-map-marker-alt"></i>
                                </div>
                                <div className="contact-item-content flex flex-col gap-1">
                                    <p className="contact-item-content-title text-sm sm:text-base font-medium">
                                        Địa chỉ
                                    </p>
                                    <p className="contact-item-content-value text-sm sm:text-base">
                                        {contactData.address}
                                    </p>
                                </div>
                            </div>
                            <div className="contact-item flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                <div className="contact-item-icon text-blue-500 text-xl">
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                                <div className="contact-item-content flex flex-col gap-1">
                                    <p className="contact-item-content-title text-sm sm:text-base font-medium">
                                        Email
                                    </p>
                                    <p className="contact-item-content-value text-sm sm:text-base">
                                        {contactData.email}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-us-content-right w-full md:w-1/2">
                        <form 
                        className="contact-us-form bg-white p-6 rounded-lg shadow-md"
                        onSubmit={async (e) => {
                            e.preventDefault();
                          
                            const formData = new FormData(e.currentTarget);
                            const value = Object.fromEntries(formData.entries());
                          
                            const formattedMessage = `📞 Số điện thoại: ${value.phoneNumber}
                        💼 Dịch vụ quan tâm: ${value.service}
                        📝 Nội dung: ${value.message}
                        `;
                          
                            try {
                              const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({
                                  name: value.name,
                                  email: value.email,
                                  message: formattedMessage,
                                }),
                              });
                          
                              if (!res.ok) {
                                throw new Error("Không thể gửi liên hệ. Vui lòng thử lại sau.");
                              }
                          
                              await MySwal.fire({
                                title: 'Gửi thành công!',
                                text: 'Cảm ơn bạn đã liên hệ với TalkToDoc. Chúng tôi sẽ phản hồi sớm nhất có thể.',
                                icon: 'success',
                                confirmButtonText: 'Đóng',
                                allowOutsideClick: false,
                                allowEscapeKey: false,
                                customClass: {
                                  popup: 'rounded-xl shadow-lg px-6 py-8',
                                  title: 'text-xl font-semibold text-gray-800',
                                  htmlContainer: 'text-sm text-gray-600',
                                  confirmButton: 'bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none',
                                },
                                buttonsStyling: false,
                              });
                          
                              (e.target as HTMLFormElement).reset();
                          
                            } catch (err: any) {
                              await MySwal.fire({
                                title: 'Lỗi',
                                text: err.message || 'Có lỗi xảy ra. Vui lòng thử lại sau.',
                                icon: 'error',
                                confirmButtonText: 'Đóng',
                                allowOutsideClick: false,
                                allowEscapeKey: false,
                              });
                            }
                          }}
                        >
                            <div className="contact-us-form-title text-xl font-semibold mb-6 text-center"> Đặt câu hỏi bên dưới <i className="fa-solid fa-arrow-down"></i></div>
                            <div className="contact-us-form-group space-y-4">
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <div className="flex flex-col gap-1 w-full">
                                        <label htmlFor="name" className="text-sm sm:text-base">Họ và tên</label>
                                        <input type="text" id="name" name="name" placeholder="Nhập họ và tên của bạn" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    </div>
                                    <div className="flex flex-col gap-1 w-full">
                                        <label htmlFor="email" className="text-sm sm:text-base">Email</label>
                                        <input type="email" id="email" name="email" placeholder="Nhập email của bạn" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <div className="flex flex-col gap-1 w-full">
                                        <label htmlFor="phoneNumber" className="text-sm sm:text-base">Số điện thoại</label>
                                        <input id="phoneNumber" name="phoneNumber" placeholder="Nhập số điện thoại" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    </div>
                                    <div className="flex flex-col gap-1 w-full">
                                        <label htmlFor="service" className="text-sm sm:text-base">Dịch vụ</label>
                                        <input id="service" name="service" placeholder="Nhập dịch vụ bạn quan tâm" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label htmlFor="message" className="text-sm sm:text-base">Nội dung</label>
                                    <textarea id="message" name="message" placeholder="Nhập nội dung bạn muốn gửi" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32" />
                                </div>
                                <div className="flex justify-center">
                                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md transition duration-300">Gửi Ngay</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="contact-us-map w-full h-full rounded-lg overflow-hidden shadow-md">
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