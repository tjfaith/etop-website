import React from "react";
import Image from "next/image";
import {
  AccessBankLogo,
  FCMBLogo,
  ZenithBankLogo,
  FirstBankLogo,
  HeritageBankLogo,
  SterlingBankLogo,
  WemaBankLogo,
  UBALogo,
  Acc1,
  Acc2
} from "@/app/assets";

const Partners = () => {
  return (
    <section className="w-full text-center mt-20 px-28 flex flex-col gap-10 ">
      <div className="text-gray-700 font-semibold">Meet our partners</div>
      <div className="flex items-center w-full justify-between">
        <Image src={AccessBankLogo} alt="Access Bank" />
        <Image src={WemaBankLogo} alt="Sterling Bank" />
        <Image src={ZenithBankLogo} alt="Zenith Bank" />
        <Image src={FirstBankLogo} alt="First Bank" />
        <Image src={FCMBLogo} alt="FCMB" />
        <Image src={UBALogo} alt="UBA Bank" />
        <Image src={SterlingBankLogo} alt="Sterling Bank" />
        <Image src={HeritageBankLogo} alt="Heritage Bank" />
      </div>
      <div className="flex items-center justify-center space-x-7">
      <Image src={Acc1} alt="Accredited 1" />
      <Image src={Acc2} alt="Accredited 2" />
      </div>
    </section>
  );
};

export default Partners;
