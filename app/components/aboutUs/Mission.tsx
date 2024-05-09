import { LineBg, MapBase2, Objectives, OurCompany } from "@/app/assets";
import React from "react";
import Image from "next/image";
import { CircleCheck } from "lucide-react";

const Mission = () => {
  return (
    <section className="lg:px-28 px-5 overflow-hidden">
      <div className="flex items-center md:flex-nowrap flex-wrap justify-between" data-aos="fade-right">
        <div className="flex items-center justify-center relative h-screen-40 md:w-6/12 w-full ">
          <Image src={OurCompany} alt="Our company" />
          <Image
            src={LineBg}
            alt="Line Background"
            layout="fill"
            objectFit="cover"
            className=" -z-10 px-20"
          />
        </div>
        <div className="md:w-6/12  md:px-10">
          <small className="text-primary">Our company</small>
          <div className="font-bold text-xl mb-3">
            These are our building blocks and what makes us special.
          </div>
          <div>
            We provide technology services to payment switching companies, banks
            and merchants, by offering convenient payment methods.
          </div>
        </div>
      </div>

      <div className="flex items-center md:flex-nowrap flex-wrap-reverse justify-between" data-aos="fade-left">
        <div className="md:w-6/12  md:px-10">
          <small className="text-primary">Our company</small>
          <div className="font-bold text-xl mb-3">
            These are our building blocks and what makes us special.
          </div>
          <div>
            We provide technology services to payment switching companies, banks
            and merchants, by offering convenient payment methods.
          </div>
        </div>
        <div className="flex items-center justify-center relative h-screen-40 md:w-6/12  ">
          <Image src={MapBase2} alt="Our company" className="w-full h-auto" />
        </div>
      </div>

      <div className="flex items-center md:flex-nowrap flex-wrap justify-between" data-aos="fade-right">
        <div className="flex items-center justify-center relative h-screen-40 md:w-6/12 w-full md:px-10  ">

            <div className="relative bg-red-400 w-full flex  justify-center">
                <div className=" h-16 w-10/12 -top-10 rounded-2xl border border-primary bg-[#FFF7F3] absolute"></div>
                <div className=" h-16 w-11/12 -top-5 rounded-2xl border border-primary bg-[#FFF7F3] absolute"></div>
                <div className="bg-[#FDF0E8] px-5 py-2 rounded-2xl border border-primary text-sm flex space-x-5 absolute">
                <CircleCheck className="text-primary text-xl  min-h-6 min-w-6" />
                <div>
                    <div className="text-primary font-semibold">Payment successful</div>
                    <div className="text-semibold">You have successfully transferred money to your beneficiary from your e-top payment terminal.  </div>
                </div>
                </div>
            </div>

          <Image
            src={LineBg}
            alt="Line Background"
            layout="fill"
            objectFit="cover"
            className=" -z-10 px-20"
          />
        </div>
        <div className="md:w-6/12 md:px-10">
          <small className="text-primary">Our objectives</small>
          <div className="font-bold text-xl mb-3">
          These are our projecting or the coming years and the world.
          </div>
          <div>
          To become the number one Payment Terminal Service Provider by providing a one stop solution terminal for merchant that accept all major credit and debit cards in Africa.
          </div>
        </div>
      </div>

      <div className="flex items-center md:flex-nowrap flex-wrap-reverse justify-between" data-aos="fade-left">
        <div className="md:w-6/12  md:px-10">
          <small className="text-primary">Our partners </small>
          <div className="font-bold text-xl mb-3">
          Special people that make us special in their own unique way.
          </div>
          <div>
          We realize the important of alliance partners in the technology industry not only for our success but of yours and we will continue to partner with leading companies across the globe.
          </div>
        </div>
        <div className="flex items-center justify-center relative min-h-50-screen md:w-6/12  ">
          <Image src={Objectives} alt="Our company" className=" w-1/2" />
        </div>
      </div>
    </section>
  );
};

export default Mission;
