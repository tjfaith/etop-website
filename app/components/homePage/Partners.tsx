import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";

import {
  PsbLogo,
  AccessBankLogo,
  EcoBankLogo,
  FCMBLogo,
  FirstBankLogo,
  GlobusBankLogo,
  GtbankLogo,
  HeritageBankLogo,
  StanbicBankLogo,
  SterlingBankLogo,
  UBALogo,
  WemaBankLogo,
  ZenithBankLogo,
  Acc1,
  Acc2,
  Acc3,
} from "@/app/assets";

const Partners = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 6,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  return (
    <section className="w-full text-center  md:px-28 px-5 flex flex-col gap-5 ">
      <div className="text-gray-700 font-semibold">Meet our partners</div>
      <Carousel
        responsive={responsive}
        autoPlay
        swipeable
        draggable
        infinite
        arrows={false}
        keyBoardControl={true}
        containerClass="space-x-10 "
        itemClass=" mx-5 w-auto  flex flex-row items-center "
      >
        <Image src={PsbLogo} alt="9psb Logo" className="h-16 object-contain"/>
        <Image src={AccessBankLogo} alt="Access Bank" className="h-16 object-contain"/>
        <Image src={EcoBankLogo} alt="Eco Bank" className="h-16 object-contain" />
        <Image src={FCMBLogo} alt="FCMB" className="h-16 object-contain"/>
        <Image src={FirstBankLogo} alt="First Bank" className="h-16 object-contain"/>
        <Image src={GlobusBankLogo} alt="Globus Bank"  className="h-16 object-contain"/>
        <Image src={GtbankLogo} alt="GT Bank" className="h-16 object-contain"/>
        <Image src={HeritageBankLogo} alt="Heritage Bank"className="h-16 object-contain" />
        <Image src={StanbicBankLogo} alt="Stanbic Bank"className="h-16 object-contain"  />
        <Image src={SterlingBankLogo} alt="Sterling Bank"className="h-16 object-contain"  />
        <Image src={UBALogo} alt="UBA Bank" className="h-16 object-contain"/>
        <Image src={WemaBankLogo} alt="Sterling Bank" className="h-16 object-contain"/>
        <Image src={ZenithBankLogo} alt="Zenith Bank" className="h-16 object-contain" />
      </Carousel>
      <div className="flex items-center md:flex-row flex-col justify-center md:gap-7 mt-10">
        <Image
          src={Acc1}
          alt="Accredited 1"
          data-aos="zoom-in-up"
          data-aos-delay="300"
        />
          <Image
          src={Acc3}
          alt="Accredited 3"
          data-aos="zoom-in-up"
          data-aos-delay="300"
          height={270} 
          width={270}
        />
        <Image
          src={Acc2}
          alt="Accredited 2"
          data-aos="zoom-in-up"
          data-aos-delay="400"
        />
      </div>
    </section>
  );
};

export default Partners;
