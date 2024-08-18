import Image from "next/image";
import Check from "../../public/svg/check.svg";

export function Pricing() {
  return (
    <div className="py-[48px] lg:py-[60px]">
      <h1 className="text-[#172026] text-center font-medium  text-2xl lg:text-[42px]">Flexible Plans for you</h1>
      <p className="pt-[16px] pb-[40px] text-center text-[#36485C] lg:text-[18px]">Money Back Guarantee</p>
      <div className="flex flex-col gap-y-6 gap-x-[24px] lg:flex-row">
        <div className="w-full rounded-[8px] bg-[#d4eaff] p-6 flex flex-col lg:justify-between">
          <div>
            <h3 className="font-medium text-[#4328EB] text-[18px] lg:text-xl">Free Trial</h3>
            <p className="pt-[12px] text-[#36485C] lg:text-[18px]">Perfect for testing the service</p>
            <h2 className="pt-4 text-2xl font-medium lg:text-[32px]">0$<span className="text-[#5F7896]">/mo</span></h2>
            <ul className="flex flex-col gap-y-2 pt-4 text-[#5F7896]">
              <li className="flex items-center gap-x-2">
                <span>
                  <Image alt="included"
                  src="/check.svg"                  
                  width="300"
                  height="200"
                  className="w-[16px]" />
                </span>5 min. Monitoring Interval
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                <Image alt="included"
                  src="/check.svg"                  
                  width="300"
                  height="200"
                  className="w-[16px]" />
                </span>
                SSL & Domain Ecp. Monitor
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                <Image alt="included"
                  src="/check.svg"                  
                  width="300"
                  height="200"
                  className="w-[16px]" />
                </span>
                Notify seats unavailable
              </li>
            </ul>
          </div>
          <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">Start Trial</button>
        </div>
        <div className="w-full rounded-[8px] bg-[#31d37a] p-6 flex flex-col">
          <div>
            <h3 className="font-medium text-white text-[18px] lg:text-xl">Business</h3>
            <p className="pt-[12px] text-[#F4F8FA] lg:text-[18px]">Perfect for small businesses</p>
            <h2 className="pt-4 text-2xl font-medium text-white lg:text-[32px]">50$<span className="text-[#F4F8FA]">/mo</span></h2>
            <ul className="flex flex-col gap-y-2 pt-4 text-[#F4F8FA]">
              <li className="flex items-center gap-x-2"><span><Image src={Check} alt="included" /></span>Only 9 integrations</li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image alt="included"
                    src="/check.svg"                  
                    width="300"
                    height="200"
                    className="w-[16px]" />
                </span>Basic status pages
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image alt="included"
                    src="/check.svg"                  
                    width="300"
                    height="200"
                    className="w-[16px]" />
                </span>No login seats available
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image alt="included"
                    src="/check.svg"                  
                    width="300"
                    height="200"
                    className="w-[16px]" />
                </span>60 sec. Monitoring Interval
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <Image alt="included"
                    src="/check.svg"                  
                    width="300"
                    height="200"
                    className="w-[16px]" />
                </span>Keyword monitor
              </li>
            </ul>
          </div>
          <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">Get Started</button>
        </div>
        <div className="w-full rounded-[8px] bg-[#ffd2f1] p-6 flex flex-col lg:justify-between">
          <div>
            <h3 className="font-medium text-[#4328EB] text-[18px] lg:text-xl">Enterprise</h3>
            <p className="pt-[12px] text-[#36485C] lg:text-[18px]">Perfect for big companies</p>
            <h2 className="pt-4 text-2xl font-medium lg:text-[32px]">As you need</h2>
            <p className="pt-4 text-[16px] text-[#36485C]">30 sec. Monitoring Interval</p>
            <p className="pt-2 text-[16px] text-[#36485C]">HTTP, port ping monitor</p>
          </div>
          <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">Contact Us</button>
        </div>
      </div>
    </div>
  );
}
