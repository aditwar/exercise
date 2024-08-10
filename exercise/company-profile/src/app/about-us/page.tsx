import React from 'react';
import Image from 'next/image';

import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Aditya | About Us",
    description: "About Us Page"
}

export default function AboutUsPage() {
    return (
        <>
            <section className='w-full pt-[180px]'>
                <div className='max-w-7xl mx-auto px-10 flex flex-col items-center'>
                    <h1 className='tracking-[2px] text-black font-bold w-[400px] lg:w-[700px] text-2xl lg:text-4xl text-center mb-10'>
                    The main location is in Dallas-USA and there are other nodes in other countries/continents to verify down statuses.
                    </h1>
                    <div className='flex flex-wrap bg-slate-900 items-center mb-10'>

                        <Image src="/vila.png" alt="me" width="900" height="626" decoding="async" data-nimg="1" className='w-full justify-center items-center h-[385px] lg:w-[450px] object-cover color: transparent' />
                        <div className="text-gray-200 w-full lg:w-[500px] p-[20px] ">
                            <p className="pb-5 font-bold">Driven by purpose</p>
                            <p className="pb-5 text-sm w-full justify-center">Founded in 2012, Aditya Co. Ltd was born out of a simple yet powerful idea recognized the growing dependence on websites for business operations and customer engagement.</p>

                            <p className="pb-5 font-bold">Our Vision and Mission</p>

                            <p className="pb-5 text-sm w-full">Vission: To be the leading provider of innovative and reliable monitoring solutions, empowering businesses to operate with confidence, safety, and efficiency in an ever-evolving world</p>
                            <p className="pb-5 text-sm w-full">Mission: To deliver reliable monitoring solutions that enhance security, performance, and operational integrity, enabling our clients to focus on their core business with confidence.</p>
                        </div>
                    </div>
                </div>
             </section>

             <section className="w-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500">
                <div className="max-w-7xl mx-auto flex flex-col">
                    <div className='m-10'>
                        <h1 className="text-white text-3xl mx-auto text-center font-semibold pb-5 lg:text-5xl lg:w-[700px]">Innovating to Address global health challenges
                        </h1>
                        <p className="text-gray-200 text-center mx-auto pb-5 lg:w-[800px]">
                            We have a proud heritage of ground-breaking innovation that stretches back over 130 years. Meaningful innovation focused on our customers needs remains at the heart of everything we do.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center mx-auto gap-3.5 lg:gap-5 pb-20">
                        <div className=" w-[180px] h-[200px] lg:w-[360px] lg:h-[250px] lg:p-8 flex flex-col justify-center bg-[#ffffff40] bg-opacity-25 p-2 rounded-lg text-white">
                            <h1 className="text-4xl lg:text-5xl pb-2 font-bold">#1
                                <span className="text-2xl lg:text-3xl"> Best Company</span>
                            </h1>
                            <p className="lg:text-xl text-base font-semibold">for MedTech patent filings with European Patent Office in 2023</p>
                        </div>
                        <div className=" w-[180px] h-[200px] lg:w-[360px] lg:h-[250px] lg:p-8 flex flex-col justify-center bg-[#ffffff40] bg-opacity-25 p-2  rounded-lg text-white">
                            <h1 className="text-4xl pb-2 font-bold">~9% of sales</h1>
                            <p className="text-xl font-semibold">invested in R&amp;D in 2023</p>
                        </div>
                        <div className=" w-[180px] h-[200px] lg:w-[360px] lg:h-[250px] lg:p-8 flex flex-col justify-center bg-[#ffffff40] bg-opacity-25 p-2 rounded-lg text-white">
                            <h1 className="text-4xl pb-2 font-bold">~50% </h1>
                            <p className="text-xl font-semibold">software/data science focus in R&amp;D</p>
                        </div>
                        <div className=" w-[180px] h-[200px] lg:w-[360px] lg:h-[250px] lg:p-8 flex flex-col justify-center bg-[#ffffff40] bg-opacity-25 p-2 rounded-lg text-white">
                            <h1 className="text-4xl pb-2 font-bold ">53,000 </h1>
                            <p className="text-xl lg:text-2xl font-semibold">patent rights</p>
                        </div>
                        
                        <div className=" w-[180px] h-[200px] lg:w-[360px] lg:h-[250px] lg:p-8 flex flex-col justify-center bg-[#ffffff40] bg-opacity-25 p-2 rounded-lg text-white">
                            <h1 className="lg:text-3xl text-lg pb-2 font-bold">Clarivate Top 100 Global Innovator  </h1>
                            <p className="lg:text-xl text-base font-semibold">11th year in a row</p>
                        </div>
                    </div>    
                </div>
            </section>

            
        </>
    )
}