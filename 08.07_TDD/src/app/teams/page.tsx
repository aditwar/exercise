import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Aditya | Teams',
  description: 'Teams Page',
}

export default function TeamPage() {       
    return (
        <>
            <section className="w-full pt-[180px]">
                <div className="max-w-7xl mx-auto lg:px-10">
                    <h1 className="text-center text-6xl text-black font-light pb-10">Meet Our <span className="font-bold text-blue-600">Team</span></h1>
                    <p className="text-center text-4xl font-bold pb-6 text-red-500">Our Leader</p>
                    <div className="flex flex-wrap justify-center gap-3 lg:gap-5">
                        <div className="bg-slate-700 rounded-md w-48 p-5">
                            <img alt="person" loading="lazy" width="150" height="150" decoding="async" data-nimg="1" className="mx-auto p-1" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                            <p className="text-lg w-40 text-center mx-auto font-bold text-white">Bambang</p>
                            <p className="text-center text-white">Vrindavan</p>
                        </div>
                        <div className="bg-slate-700 rounded-md w-48 p-5">
                            <img alt="person" loading="lazy" width="150" height="150" decoding="async" data-nimg="1" className="mx-auto p-1" src="https://randomuser.me/api/portraits/women/2.jpg"/>
                            <p className="text-lg w-40 text-center mx-auto font-bold text-white">Susi</p>
                            <p className="text-center text-white">Zimbabwe</p>
                        </div>
                        <div className="bg-slate-700 rounded-md w-48 p-5">
                            <img alt="person" loading="lazy" width="150" height="150" decoding="async" data-nimg="1" className="mx-auto p-1" src="https://randomuser.me/api/portraits/men/3.jpg"/>
                            <p className="text-lg w-40 text-center mx-auto font-bold text-white">Sumanto</p>
                            <p className="text-center text-white">Vrindavan</p>
                        </div>
                        <div className="bg-slate-700 rounded-md w-48 p-5">
                            <img alt="person" loading="lazy" width="150" height="150" decoding="async" data-nimg="1" className="mx-auto p-1" src="https://randomuser.me/api/portraits/women/4.jpg"/>
                            <p className="text-lg w-40 text-center mx-auto font-bold text-white">Sri</p>
                            <p className="text-center text-white">Canada</p>
                        </div>
                        <div className="bg-slate-700 rounded-md w-48 p-5">
                            <img alt="person" loading="lazy" width="150" height="150" decoding="async" data-nimg="1" className="mx-auto p-1" src="https://randomuser.me/api/portraits/men/5.jpg"/>
                            <p className="text-lg w-40 text-center mx-auto font-bold text-white">Sujarwo</p>
                            <p className="text-center text-white">Vrindavan</p>
                        </div>
                        <div className="bg-slate-700 rounded-md w-48 p-5">
                            <img alt="person" loading="lazy" width="150" height="150" decoding="async" data-nimg="1" className="mx-auto p-1" src="https://randomuser.me/api/portraits/women/6.jpg"/>
                            <p className="text-lg w-40 text-center mx-auto font-bold text-white">Sisil</p>
                            <p className="text-center text-white">Arab</p>
                        </div>
                        <div className="bg-slate-700 rounded-md w-48 p-5">
                            <img alt="person" loading="lazy" width="150" height="150" decoding="async" data-nimg="1" className="mx-auto p-1" src="https://randomuser.me/api/portraits/women/7.jpg"/>
                            <p className="text-lg w-40 text-center mx-auto font-bold text-white">Sri</p>
                            <p className="text-center text-white">Canada</p>
                        </div>
                        <div className="bg-slate-700 rounded-md w-48 p-5">
                            <img alt="person" loading="lazy" width="150" height="150" decoding="async" data-nimg="1" className="mx-auto p-1" src="https://randomuser.me/api/portraits/men/8.jpg"/>
                            <p className="text-lg w-40 text-center mx-auto font-bold text-white">Sujarwo</p>
                            <p className="text-center text-white">Vrindavan</p>
                        </div>
                        <div className="bg-slate-700 rounded-md w-48 p-5">
                            <img alt="person" loading="lazy" width="150" height="150" decoding="async" data-nimg="1" className="mx-auto p-1" src="https://randomuser.me/api/portraits/women/9.jpg"/>
                            <p className="text-lg w-40 text-center mx-auto font-bold text-white">Sisil</p>
                            <p className="text-center text-white">Arab</p>
                        </div>                        
                    </div>
                    <p className="text-center text-4xl font-bold pb-6 text-purple-600 pt-20">Our Friend</p>
                    <div className="flex flex-wrap justify-center gap-3 lg:gap-5">
                        <div className="bg-slate-700 rounded-md w-48 p-5">
                            <img alt="person" loading="lazy" width="150" height="150" decoding="async" data-nimg="1" className="mx-auto p-1" src="https://randomuser.me/api/portraits/women/10.jpg"/>
                            <p className="text-lg w-40 text-center mx-auto font-bold text-white">Sri</p>
                            <p className="text-center text-white">Canada</p>
                        </div>
                        <div className="bg-slate-700 rounded-md w-48 p-5">
                            <img alt="person" loading="lazy" width="150" height="150" decoding="async" data-nimg="1" className="mx-auto p-1" src="https://randomuser.me/api/portraits/men/11.jpg"/>
                            <p className="text-lg w-40 text-center mx-auto font-bold text-white">Sujarwo</p>
                            <p className="text-center text-white">Vrindavan</p>
                        </div>
                        <div className="bg-slate-700 rounded-md w-48 p-5">
                            <img alt="person" loading="lazy" width="150" height="150" decoding="async" data-nimg="1" className="mx-auto p-1" src="https://randomuser.me/api/portraits/women/12.jpg"/>
                            <p className="text-lg w-40 text-center mx-auto font-bold text-white">Sisil</p>
                            <p className="text-center text-white">Arab</p>
                        </div>
                        <div className="bg-slate-700 rounded-md w-48 p-5">
                            <img alt="person" loading="lazy" width="150" height="150" decoding="async" data-nimg="1" className="mx-auto p-1" src="https://randomuser.me/api/portraits/women/13.jpg"/>
                            <p className="text-lg w-40 text-center mx-auto font-bold text-white">Sri</p>
                            <p className="text-center text-white">Canada</p>
                        </div>
                        <div className="bg-slate-700 rounded-md w-48 p-5">
                            <img alt="person" loading="lazy" width="150" height="150" decoding="async" data-nimg="1" className="mx-auto p-1" src="https://randomuser.me/api/portraits/men/14.jpg"/>
                            <p className="text-lg w-40 text-center mx-auto font-bold text-white">Sujarwo</p>
                            <p className="text-center text-white">Vrindavan</p>
                        </div>
                        <div className="bg-slate-700 rounded-md w-48 p-5">
                            <img alt="person" loading="lazy" width="150" height="150" decoding="async" data-nimg="1" className="mx-auto p-1" src="https://randomuser.me/api/portraits/women/15.jpg"/>
                            <p className="text-lg w-40 text-center mx-auto font-bold text-white">Sisil</p>
                            <p className="text-center text-white">Arab</p>
                        </div>
                        <div className="bg-slate-700 rounded-md w-48 p-5">
                            <img alt="person" loading="lazy" width="150" height="150" decoding="async" data-nimg="1" className="mx-auto p-1" src="https://randomuser.me/api/portraits/women/16.jpg"/>
                            <p className="text-lg w-40 text-center mx-auto font-bold text-white">Sri</p>
                            <p className="text-center text-white">Canada</p>
                        </div>
                        <div className="bg-slate-700 rounded-md w-48 p-5">
                            <img alt="person" loading="lazy" width="150" height="150" decoding="async" data-nimg="1" className="mx-auto p-1" src="https://randomuser.me/api/portraits/men/17.jpg"/>
                            <p className="text-lg w-40 text-center mx-auto font-bold text-white">Sujarwo</p>
                            <p className="text-center text-white">Vrindavan</p>
                        </div>
                        <div className="bg-slate-700 rounded-md w-48 p-5">
                            <img alt="person" loading="lazy" width="150" height="150" decoding="async" data-nimg="1" className="mx-auto p-1" src="https://randomuser.me/api/portraits/women/18.jpg"/>
                            <p className="text-lg w-40 text-center mx-auto font-bold text-white">Sisil</p>
                            <p className="text-center text-white">Arab</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}