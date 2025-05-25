import React, { FC } from "react";
import Link from "next/link";
import { headerData } from "../Header/Navigation/menuData";
import { Icon } from "@iconify/react";
import Logo from "../Header/Logo";

const Footer: FC = () => {
  return (
    <footer className="pt-16 bg-darkmode border-spacing-1">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="grid grid-cols-1 sm:grid-cols-5 lg:gap-20 md:gap-6 sm:gap-12 gap-6  pb-16">
          <div className="col-span-2">
            <Logo />
            <p className="text-md font-medium text-grey dark:text-white/50 mt-5 mb-16 max-w-70% text-left">TalkToDoc – Kết nối sức khỏe thông minh. Tư vấn y khoa trực tuyến, chăm sóc sức khỏe mọi lúc, mọi nơi.
            </p>
            <div className="flex gap-6 items-center">
              <Link href="#" className="group bg-white hover:bg-primary rounded-full shadow-xl p-3">
                <Icon
                  icon="fa6-brands:facebook-f"
                  width="16"
                  height="16"
                  className=" group-hover:text-white text-black"
                />
              </Link>
              <Link href="#" className="group bg-white hover:bg-primary rounded-full shadow-xl p-3">
                <Icon
                  icon="fa6-brands:instagram"
                  width="16"
                  height="16"
                  className=" group-hover:text-white text-black"
                />
              </Link>
              <Link href="#" className="group bg-white hover:bg-primary rounded-full shadow-xl p-3">
                <Icon
                  icon="fa6-brands:x-twitter"
                  width="16"
                  height="16"
                  className=" group-hover:text-white text-black"
                />
              </Link>
            </div>
          </div>
          <div className="text-left">
            <h4 className="text-black dark:text-white mb-9 font-semibold text-xl border-b-4 border-primary inline-block pb-1 px-2">
              Về chúng tôi
            </h4>
            <ul className="list-disc list-inside marker:text-primary">
              <li className="pb-5">
                <Link
                  href="/about-us"
                  className="text-black/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                >
                  Giới thiệu
                </Link>
              </li>
              <li className="pb-5">
                <Link
                  href="/doctor-list"
                  className="text-black/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                >
                  Đội ngũ bác sĩ
                </Link>
              </li>
              <li className="pb-5">
                <Link
                  href="#process-section"
                  className="text-black/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                >
                  Quy trình làm việc?
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-left">
            <h4 className="text-black dark:text-white mb-9 font-semibold text-xl border-b-4 border-primary inline-block pb-1 whitespace-nowrap">
              Hỗ trợ người dùng</h4>
            <ul className="list-disc list-inside marker:text-primary">
              <li className="pb-5">
                <Link
                  href="/privacy-policy"
                  className="text-black/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                >
                  Chính sách bảo mật
                </Link>
              </li>
              <li className="pb-5">
                <Link
                  href="/privacy-policy#terms-of-service"
                  className="text-black/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                >
                  Điều khoản dịch vụ

                </Link>
              </li>
              <li className="pb-5">
                <Link
                  href="/sign-up-doctor"
                  className="text-black/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                >
                  Liên Kết & Hợp Tác
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-left">
            <h4 className="text-black dark:text-white mb-9 font-semibold text-xl border-b-4 border-primary inline-block pb-1 px-2">
              Xem Thêm</h4>
            <ul className="list-disc list-inside marker:text-primary">
              {headerData.map((item, index) => (
                <li key={index} className="pb-4">
                  <Link
                    href={item.href}
                    className="text-black/70 dark:text-white/70 dark:hover:text-primary hover:text-primary text-base"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-grey/15 dark:border-white/15 py-10 flex justify-between items-center">
          <p className="text-sm text-black/70 dark:text-white/70">
            @2025 - TalkToDoc. All Rights Reserved by TalkToDoc
          </p>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <Link
              href="#"
              className="text-sm text-black/70 dark:text-white/70 px-5 border-r border-grey/15 dark:border-white/15 hover:text-primary dark:hover:text-primary"
            >
              Chính sách bảo mật
            </Link>
            <Link
              href="#"
              className="text-sm text-black/70 dark:text-white/70 px-5 hover:text-primary dark:hover:text-primary"
            >
              Điều khoản và điều kiện
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
