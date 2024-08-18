import Image from "next/image";

export function Features() {
  return (
    <div className="flex flex-col gap-y-[56px] pt-[56px] lg:pt-[120px] lg:gap-y-[80px] ">
      <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
        <Image src="/feature.svg" alt="hero image" width="300" height="200" className="hidden w-1/2 sm:block" />
        <div className="sm:w-1/2 lg:pt-[56px] lg:pr-[56px]">
          <h3 className="font-medium text-[#0085FF] lg:text-[18px] ">Sales Monitoring</h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">Best for your Sales Monitoring</h1>
          <div className="">
            <Image src="/feature2.svg" alt="hero image" width="300" height="200" className="pt-[24px] hidden"/></div>
          <p className="py-[24px] text-[#36485C] lg:text-[18px]">Elevate your workflow and stay ahead of the curve with our game-changing feature. Imagine having a bird&apos;s eye view of your entire operation, effortlessly at your fingertips. Our customizable dashboard transforms how you manage tasks, offering unprecedented clarity and control. Discover a new level of efficiency and insight that propels your productivity to new heights.</p>
          <ul className="flex flex-col gap-y-3 lg:text-[18px]">
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span><Image alt="included"src="/check.svg" width="300" height="200" className="w-[16px]" /></span>Easy to Manage</li>
            <li className="flex items-center gap-x-2 text-[#36485C]"><span>
                <Image alt="included" src="/check.svg" width="300" height="200" className="w-[16px]" /></span>Faster than Ever</li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image alt="included"
                    src="/check.svg"                  
                    width="300"
                    height="200"
                    className="w-[16px]" />
              </span>
              Secure Guaranteed
            </li>
          </ul>
          <p className="flex items-center gap-x-2 pt-[24px] cursor-pointer font-medium text-[#0085FF] lg:text-[18px]">
            Learn More{" "}
            <span>              
              <Image alt="included"
                    src="/blue-button.svg"                  
                    width="28"
                    height="28"
                    className="w-[28px]" />
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-x-6 sm:flex-row">
        <Image
          src="/feature3.svg"
          alt="hero image"
          width="300"
          height="200"
          className="hidden w-1/2 sm:block" />        
        <div className="sm:w-1/2 lg:py-[56px] lg:pl-[56px]">
          <h3 className="font-medium text-[#00A424] lg:text-[18px] ">
            Customer Support
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
            Stay in Touch with Your Customers
          </h1>
          <Image            
            alt="feature 1 image"
            src="/feature2.svg"            
            width="100"
            height="200"
            className="pt-[24px] hidden " />
          <p className="py-[24px] text-[#36485C] lg:text-[18px]">Engage and connect with your customers like never before. With our cutting-edge website monitoring tools, youll gain invaluable insights into customer behavior, preferences, and interactions. Build lasting relationships that set you apart from the competition. Discover the power of truly understanding your customers, and watch your business thrive.</p>
          <ul className="flex flex-col gap-y-3 lg:text-[18px]">
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image alt="included"
                  src="/check.svg"                  
                  width="300"
                  height="200"
                  className="w-[16px]" />
              </span>
              Easy to Manage
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image alt="included"
                  src="/check.svg"                  
                  width="300"
                  height="200"
                  className="w-[16px]" />
              </span>
              Faster that Ever
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image alt="included"
                  src="/check.svg"                  
                  width="300"
                  height="200"
                  className="w-[16px]" />
              </span>
              Secure Guaranteed
            </li>
          </ul>
          <p className="flex items-center gap-x-2 pt-[24px] cursor-pointer font-medium text-[#00A424] lg:text-[18px]">
            Learn More{" "}
            <span>              
              <Image alt="included"
                    src="/green-button.svg"                  
                    width="28"
                    height="28"
                    className="w-[28px]" />
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
        <Image          
          src="/feature4.svg"
          alt="hero image"
          width="300"
          height="200"
          className="hidden w-1/2 sm:block" />
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
          <h3 className="font-medium text-[#EB2891] lg:text-[18px] ">Growth Monitoring</h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[50px]">
            Monitor your sites with New Subscribers</h1>
          <Image            
            alt="feature 1 image"
            src="/feature3.svg"            
            width="10"
            height="50"
            className="pt-[24px] hidden" />
          <p className="py-[24px] text-[#36485C] lg:text-[18px]">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.</p>
          <div className="flex w-full gap-x-[24px] ">
            <div className="w-1/2 flex flex-col gap-y-3">
              <h3 className="text-[20px] font-medium text-[#172026]">100+</h3>
              <p className="text-[#36485C] ">New Customer</p>
            </div>
            <div className="w-1/2 flex flex-col gap-y-3">
              <h3 className="text-[20px] font-medium text-[#172026]">800+</h3>
              <p className="text-[#36485C]">More Customer Engagement</p>
            </div>
          </div>
          <p className="flex items-center cursor-pointer gap-x-2 pt-[24px] font-medium text-[#EB2891] lg:text-[18px]">
            Learn More{" "}
            <span>
            <Image alt="included"
                    src="/pink-button.svg"                  
                    width="28"
                    height="28"
                    className="w-[28px]" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
