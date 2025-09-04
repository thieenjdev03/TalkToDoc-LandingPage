import React from "react";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <section className="bg-white min-h-screen flex items-center py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-row items-center justify-center gap-8 md:gap-12">
        <div className="w-full md:w-5/12 lg:w-6/12 flex justify-center mb-8 md:mb-0">
            <div className="relative w-48 h-48 sm:w-72 sm:h-72 md:w-full md:max-w-[357px] aspect-[129/138]">
              <Image
                unoptimized
                src="http://res.cloudinary.com/dut4zlbui/image/upload/v1751218017/gh009kni2mtqxxc3b4yh.png"
                alt="404 Not Found"
                fill
                quality={100}
                className="object-contain"
                priority
                sizes="(max-width: 768px) 80vw, 357px"
              />
            </div>
          </div>
          <div className="w-full md:w-7/12 lg:w-6/12 xl:w-5/12 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-primary mb-4 md:mb-6">404</h1>
            <h3 className="mb-3 md:mb-4 text-lg sm:text-2xl md:text-3xl font-semibold text-dark dark:text-white">
              Không tìm thấy trang
            </h3>
            <p className="mb-6 text-sm sm:text-base md:text-lg text-body-color dark:text-dark-6">
              Oops! Trang bạn đang tìm kiếm không tồn tại.<br className="hidden sm:block" /> Có thể nó đã bị di chuyển hoặc xóa.
            </p>
            <Link
              href="/"
              className="rounded-md px-6 py-3 text-base font-medium text-white transition hover:bg-blue-700 bg-primary w-full sm:w-auto text-center shadow-md"
            >
              Về trang chủ
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;