"use client"
import Image from "next/image";
import { Icon } from "@iconify/react";

const Newsletter = () => {
    return (
        <section className='relative'>
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md ">
                <div className="bg-primary rounded-Newsletter grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-12 xl:gap-x-8">
                    <div className="col-span-7">
                        <div className="m-10 lg:ml-32 lg:mt-20 lg:mb-20">
                            <p className="text-lg font-normal text-white mb-3 ls-51"> Thông Báo  </p>
                            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8">
                                Nhận thông báo mới nhất
                            </h2>

                            <div>
                                <div className="relative text-white focus-within:text-white flex flex-row-reverse shadow-fi rounded-full">
                                    <input type="Email address" name="q" className="py-6 sm:py-8 text-sm w-full text-black dark:text-white rounded-full pl-4 par-87 focus:outline-none focus:text-black" placeholder="@ Nhập địa chỉ email của bạn" autoComplete="off" />
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                                        <button type="submit" className="p-2 bg-primary hover:scale-110 duration-300 rounded-full">
                                            <Icon
                                                icon="tabler:arrow-narrow-right"
                                                width="32"
                                                height="32"
                                                className="text-white "
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-5 relative hidden md:block">
                        <div>
                            <Image 
                        unoptimized
                        src={'https://res.cloudinary.com/dut4zlbui/image/upload/v1742922826/hp91mv2b4bcxdw3m99e8.webp'} alt="soup-image" width={300} height={300} className='mt-14 ml-10' />
                        </div>
                        {/* <div className="absolute top-[78%]">
                            <Image src={'/images/Newsletter/onion.svg'} alt="onion-image" width={300} height={122} />
                        </div> */}
                        {/* <div className="absolute top-[30%] right-[-23%] hidden lg:block">
                            <Image src={'/images/Newsletter/lec.png'} alt="lettuce-image" width={300} height={122} />
                        </div> */}
                        <div className="absolute bottom-[10%] left-[0%]">
                            <Image 
                            unoptimized
                            src={'/images/Newsletter/yellow.svg'} alt="yellow-image" width={59} height={59} />
                        </div>
                        <div className="absolute bottom-[20%] right-[20%]">
                            <Image 
                            unoptimized
                            src={'/images/Newsletter/blue.svg'} alt="blue-image" width={25} height={25} />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Newsletter;