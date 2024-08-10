"use client";

import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import Logo from "../../public/svg/Logo.svg";
import User from "../../public/svg/User.svg";
import hamburger from "../../public/svg/hamburger.svg";
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from "react"; // untuk menggunakan HOOK

export function Navbar() {

  // Ini agar bisa buka Navbar Samping
  const [menuOpen, setMenuOpen] = useState(false)
  const handleNav = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <nav className="fixed flex w-screen bg-[#ffffff40] shadow-xl backdrop-blur-md z-10">
        <div className="flex px-[50px] items-center">

          {/* Logo NavBar Default */}
          <Link href={'/'}>
            <Image src={Logo} alt="Logo" width={50} className="m-8 hover:drop-shadow-[0_0_0.3rem_#ffffff70]" />
          </Link>

          {/* Navbar Inline */}
          <div className=''>
            <ul className='hidden justify-self-auto md:flex gap-x-[100px] p-[50px]'>
              <Link href={'/'}>
                <li className="text-black hover:text-purple-600 hover:drop-shadow-[0_0_0.3rem_#ffffff70] font-extrabold size-fit cursor-pointer">Home</li>
              </Link>
              <Link href={'/about-us'}>
                <li className="text-black hover:text-purple-600 hover:drop-shadow-[0_0_0.3rem_#ffffff70] font-extrabold size-fit cursor-pointer">About Us</li>
              </Link>
              <Link href={'/service'}>
                <li className="text-black hover:text-purple-600 hover:drop-shadow-[0_0_0.3rem_#ffffff70] font-extrabold size-fit cursor-pointer">Service</li>
              </Link>
              <Link href={'/teams'}>
                <li className="text-black hover:text-purple-600 hover:drop-shadow-[0_0_0.3rem_#ffffff70] font-extrabold size-fit cursor-pointer">Teams</li>
              </Link>
            </ul>            
          </div>

          {/* Icon User Profile */}
          <div className="hidden lg:flex absolute right-0 items-center p-[50px] mx-5 hover:drop-shadow-[0_0_0.3rem_#ffffff70] cursor-pointer gap-x-[20px]">
            <Link href={'/login'} className='flex'>
              <p className="text-black font-extrabold size-fit hover:text-purple-600 p-5">
                Sign In
              </p>
              <Image src={User} alt="User Profile" />
            </Link>            
          </div>          
        </div>               
      </nav>

      {/* Hamburger Menu */}
      <div onClick={handleNav} className="fixed items-center md:hidden right-[10%] cursor-pointer p-[50px] z-10">
          <Image src={hamburger} alt="hamburger" width={25} className="hover:drop-shadow-[0_0_0.3rem_#ffffff70]" />        
      </div>

      <div className='fixed w-full z-10'>
        {/* Ini agar bisa Buka Navbar Samping */}
        <div className={
            menuOpen
            ? "fixed left-0 top-0 w-[40%] backdrop-blur-md md:hidden h-screen bg-gradient-to-r from-cyan-500 ease-in duration-500"
            : "fixed left-[-100%] w-[40%] backdrop-blur-md h-screen bg-gradient-to-r from-cyan-500 ease-in duration-500"
          }>

          {/* Icon Close Samping */}
          <div className='flex w-full items-center justify-end p-[50px]'>
            <div onClick={handleNav} className='cursor-pointer hover:drop-shadow-[0_0_0.3rem_#ffffff70]'>
              <AiOutlineClose size={25} />
            </div>
          </div>

          {/* Navbar Samping */}
          <div className='flex-col py-4 p-10'>
            <ul>
              <Link href={'/'}>
                <li onClick={() => setMenuOpen(false)}
                  className='py-4 font-extrabold size-fit cursor-pointer hover:text-purple-800 hover:drop-shadow-[0_0_0.3rem_#ffffff70]'>Home</li>
              </Link>
              <Link href={'/about-us'}>
                <li onClick={() => setMenuOpen(false)}
                  className='py-4 font-extrabold size-fit cursor-pointer hover:text-purple-800 hover:drop-shadow-[0_0_0.3rem_#ffffff70]'>About Us</li>
              </Link>
              <Link href={'/service'}>
                <li onClick={() => setMenuOpen(false)}
                  className='py-4 font-extrabold size-fit cursor-pointer hover:text-purple-800 hover:drop-shadow-[0_0_0.3rem_#ffffff70]'>Service</li>
              </Link>
              <Link href={'/teams'}>
                <li onClick={() => setMenuOpen(false)}
                  className='py-4 font-extrabold size-fit cursor-pointer hover:text-purple-800 hover:drop-shadow-[0_0_0.3rem_#ffffff70]'>Teams</li>
              </Link>
              <Link href={'/login'}>
                <li onClick={() => setMenuOpen(false)}
                  className='py-4 font-extrabold size-fit cursor-pointer hover:text-purple-800 hover:drop-shadow-[0_0_0.3rem_#ffffff70]'>Login</li>
              </Link>
            </ul>            
          </div>

          {/* Logo Navbar Samping */}
          <Link href={'/'} className="flex absolute bottom-0 down-[-100%] p-[50px] justify-center w-full hover:drop-shadow-[0_0_0.3rem_#ffffff70]">
            <Image src={Logo} alt="Logo" width={50} className="" />
          </Link>
        </div>
      </div>
    </>
  );
}
