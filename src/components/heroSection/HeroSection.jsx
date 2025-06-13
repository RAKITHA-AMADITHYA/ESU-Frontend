'use client';
import Phone from '../phone/Phone';
import { useIsClient } from '@/hooks/useIsClient';

// import MobilePhone from './MobilePhone'; // Assuming you have a MobilePhone component

const HeroSection = () => {
  const isClient = useIsClient();
  return (
    <>
      <div
        className="w-full h-[calc(100vh-4rem)] bg-cover bg-no-repeat bg-end  "
        style={{ backgroundImage: `url(/backgrounds/homebg.png)` }}
      >
        <div className="h-[100%]  flex justify-around max-md:flex-col">
          {/* Left Side */}
          {isClient && (
            <div
              className="w-full md:w-1/2 h-full flex justify-center items-center flex-col px-2  md:mt-0"
              data-aos="fade-right"
            >
              <div className="text-left sm:text-left">
                <h2 className="text-3xl sm:text-5xl  xl:text-5xl font-semibold   mb-2 text-[#F78845]">
                  ESU
              </h2>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-2">
                CORPORATE MESSAGING
              </h2>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-4">
                SOLUTIONS
              </h3>
              <p className="text-[#757575] text-base max-md:text-base md:text-lg">
                ESU Messaging Solutions provides a comprehensive suite of communication services,
                including SMS, WhatsApp, IVR, and shortcode solutions Etc. We help businesses enhance
                customer engagement, automate interactions, and deliver secure, real-time messaging for
              </p>
            </div>
          </div>
          )}

          {/* Right Side - Mobile Phone */}
          <div className=" md:w-1/3 justify-center  h-full  hidden md:flex">
            <div className=" w-full mt-10 ">
              {/* Assuming MobilePhone is a component that displays the mobile phone UI */}
              <Phone></Phone>
            </div>
          </div>
        </div>
      </div>

      <div className='hidden max-md:block mt-10'>
      <Phone></Phone>
      </div>
    </>
  );
};

export default HeroSection;
