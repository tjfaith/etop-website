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
    <section className="w-full text-center  md:px-28 px-5 flex flex-col gap-10 ">
      <div className="text-gray-700 font-semibold">Meet our partners</div>
      <Carousel
        responsive={responsive}
        autoPlay
        swipeable
        draggable
        infinite
        arrows={false}
        className="w-full items-center space-x-5 "
      >
        <Image src={PsbLogo} alt="9psb Logo" />
        <Image src={AccessBankLogo} alt="Access Bank" />
        <Image src={EcoBankLogo} alt="Eco Bank" />
        <Image src={FCMBLogo} alt="FCMB" />
        <Image src={FirstBankLogo} alt="First Bank" />
        <Image src={GlobusBankLogo} alt="Globus Bank" />
        <Image src={GtbankLogo} alt="GT Bank" />
        <Image src={HeritageBankLogo} alt="Heritage Bank" className="ml-8"/>
        <Image src={StanbicBankLogo} alt="Stanbic Bank" className="ml-8" />
        <Image src={SterlingBankLogo} alt="Sterling Bank" className="ml-8" />
        <Image src={UBALogo} alt="UBA Bank" />
        <Image src={WemaBankLogo} alt="Sterling Bank" />
        <Image src={ZenithBankLogo} alt="Zenith Bank" />
      </Carousel>
      <div className="flex items-center md:flex-row flex-col justify-center md:gap-7">
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
