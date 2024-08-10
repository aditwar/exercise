import Image from "next/image";
import Logo from "../../public/svg/Logo.svg";
import Facebook from "../../public/svg/Facebook.svg";
import Twitter from "../../public/svg/X.svg";
import Feed from "../../public/svg/Feed.svg";
import Link from "next/link";

export function Footer() {
  return (
    <div className="pt-[80px] pb-[40px]">
      <div className="flex items-center justify-center gap-x-[12px]">
        <Image src={Logo} alt="Logo" width={150} />        
      </div>

      <ul className="flex flex-col items-center gap-y-[32px] pt-[56px] text-[#36485C] sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5">
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/about-us'}>About Us</Link></li>
        <li><Link href={'/service'}>Service</Link></li>
        <li><Link href={'/teams'}>Teams</Link></li>
      </ul>

      <p className="pt-[56px] text-center text-[14px] font-medium text-[#5F7896] sm:pt-5">
        © Copyright 2024. That&apos;s All. Thanks for your visit.
      </p>

      <div className="flex items-center justify-center gap-x-[56px] pt-[40px]">
        <Image src={Feed} alt="Facebook" />
        <Image src={Facebook} alt="Feed" />
        <Image src={Twitter} alt="Twitter" />
      </div>
    </div>
  );
}
