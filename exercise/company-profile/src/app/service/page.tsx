import { Metadata } from "next";
import Image from 'next/image';
import { Pricing } from "@/components/Pricing";


export const metadata: Metadata = {
    title: "Aditya | Service",
    description: "Service Page"
}

export default function ServicePage() {
    return (
        <>
            <section className="w-full  lg:bg-[#0C0C0C]">
                <div className="mx-auto bg-[#000000] lg:-z-0 -z-10">
                    <div><Image src="/server.jpg" alt="me" width="2466" height="2466" decoding="async" data-nimg="1" className='w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] 2xl:h-[900px] object-cover opacity-80 ' /></div>
                    <div className="absolute top-44 px-10 md:top-[250px] lg:top-80 pl-10 lg:px-[280px] w-full">
                        <h2 className="text-2xl lg:text-4xl lg:text-left text-gray-200 font-semibold text-center drop-shadow-[1px_1px_1px_black]">Uptime Guaranteed</h2>
                        <h1 className="text-2xl sm:text-5xl lg:text-7xl lg:w-[605px] lg:text-left font-bold text-white text-center drop-shadow-[1px_1px_1px_black]">Peace of Mind Delivered</h1>
                        <a className="flex justify-center z-50 mt-[20px] lg:mt-11 lg:justify-start  cursor-pointer" href="#produk2">
                            <button type="button" className="flex items-center bg-transparent  backdrop-blur-lg border gap-1 border-red-600 px-3 py-1 text-[12px] text-white lg:text-sm  rounded-full font-bold hover:shadow-[0_1px_10px_blue] hover:opacity-80 transition-all duration-200">Our Products
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                                </span>
                            </button>
                        </a>
                    </div>
                </div>
            </section>
            <section className="flex justify-center items-center w-full px-[26px] lg:px-[200px] xl:px-[0px] pt-[60px]">
                <div className="flex flex-wrap justify-center items-center xl:space-x-10">
                    <div className="w-full xl:w-[500px]">
                        <h1 className="text-black font-semibold text-center text-2xl pb-10 lg:text-5xl lg:text-left">Site Guard Pro: The flagship product for your website needs</h1>
                        <p className="text-sm text-center text-black pb-3 lg:pb-5 lg:text-base lg:text-left">Designed to offer comprehensive website monitoring and protection for businesses of all sizes. With a focus on uptime, security, and performance, SiteGuard Pro provides real-time monitoring, detailed analytics, and instant alerts, ensuring your website remains operational, secure, and optimized at all times</p>
                        <div className="lg:flex hidden gap-3">
                            <button type="button" className=" text-black font-bold border border-blue-600 px-3 py-2 text-[12px]  lg:text-sm  rounded-full hover:shadow-[0_1px_10px_blue] hover:opacity-80 transition-all duration-200">Order Now</button><button type="button" className=" text-black font-bold border border-blue-600 px-3 py-2 text-[12px]  lg:text-sm  rounded-full">$100</button>
                        </div>
                    </div>
                    <div className="justify-center">
                        <Image src="/office.jpg" alt="me" width="1000" height="1000" decoding="async" data-nimg="1" className='hidden xl:flex object-cover w-full h-[300px] rounded-2xl' />
                    </div>
                </div>
            </section>
            <section className="w-full px-[20px] lg:container lg:px-20 mx-auto">
                <Pricing/>
            </section>
        </>
    )
}