import Image from "next/image";
import BlurArrow from "../../public/svg/blue-button.svg";
import Gradient from "../../public/svg/Gradient.svg";
import Google from "../../public/svg/Google.svg";
import Slack from "../../public/svg/Slack.svg";
import Truspilot from "../../public/svg/Trustpilot.svg";
import Cnn from "../../public/svg/CNN.svg";
import Cluth from "../../public/svg/Clutch.svg";

export function Hero() {
  return (
    <div className="pt-[180px]">
      <div className="px-[20px] lg:px-[280px]">
        <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[64px] lg:leading-[72px]">
          The World&apos;s Leading Monitoring Service</h1>
        <p className="text-center pt-6 text-[#36485C] lg:text-[18px] lg:leading-7">Experience the pinnacle of reliability with The World&apos;s Leading Monitoring Service. Our state-of-the-art technology and unparalleled expertise ensure you receive the most accurate and timely insights. Trust us to safeguard your operations with comprehensive monitoring solutions that keep you informed and ahead of the curve. Discover the peace of mind that comes with knowing you&apos;re backed by the best in the industry.</p>
        <div className="flex w-full pt-8 justify-center gap-x-6 ">
          <button className="bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded-[4px] lg:w-fit">Try Now for free</button>
          <button className="w-1/2 text-[#4328EB] flex items-center justify-center gap-x-2 lg:w-fit">View Pricing<span><Image src={BlurArrow} alt="Learn more" /></span>
          </button>
        </div>
      </div>
      <div className="relative flex h-full w-full justify-center">
        <Image
          src={Gradient}
          alt="Gradient"
          className="min-h-[500px] w-full object-cover lg:h-auto"
        />
        <div className="absolute bottom-10 flex w-full flex-col items-center">
          <Image
            src="/Image.svg"
            alt="hero image"
            width="1000"
            height="50"
            className="mb-[-50px] xl:mb-[-190px] lg:mb-[-150px] md:mb-[-50px] sm:mb-[-80px] sm:h-[400px] lg:h-auto xl:w-[80%]"/>
          <div className="flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:px-20">
            <p className="text-[#FFFFFF] text-center lg:text-[18px]">Trusted by these companies</p>
            <div className="grid grid-cols-3 items-center justify-center justify-items-center px-[20px] align-middle  lg:grid-cols-5">
              <Image src={Google} alt="" />
              <Image src={Cnn} alt="" />
              <Image src={Truspilot} alt="" />
              <Image src={Cluth} alt="" />
              <Image src={Slack} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
