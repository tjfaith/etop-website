import React from "react";
import { HighlightedText } from "@/app/components";
import Image from "next/image";
import { Img5, Img6, Img7, Img8 } from "@/app/assets";

const Platforms = () => {
  return (
    <section className="space-y-10 lg:px-28 px-5 overflow-hidden">
      <div className=" flex flex-col justify-center items-center gap-5">
        <div className="flex items-center space-x-2 lg:text-4xl text-lg font-bold  ">
          <span className=" whitespace-nowrap">All your</span>
          <HighlightedText text="transactions" />
          <span className=" whitespace-nowrap">in one place</span>
        </div>
        <div className="md:w-8/12 text-center">
          We have a wide range of services just to make sure that you don’t lose
          time and money at the same.
        </div>
      </div>

      <div className=" space-y-10">
        <div className="flex items-center justify-center md:flex-nowrap flex-wrap-reverse gap-3 md:gap-0" data-aos="fade-right">
          <div className="md:p-16 md:w-5/12 space-y-3 w-full">
            <div className="font-bold">Mobile application</div>
            <div>
              We are partners in the development and successful rollout of the
              mobile application which includes e-payment, e-banking and solutions. This
              has helped us maintain a high standard in the financial market and
              also provide lasting solution to our partners.
            </div>
          </div>
          <div className=" md:w-96 w-full h-96 rounded-3xl ">
            <Image
              src={Img5}
              alt="img5"
              className=" object-cover h-full w-full rounded-3xl object-center "
            />
          </div>
        </div>

        <div className="flex items-center justify-center md:flex-nowrap flex-wrap gap-3 md:gap-0" data-aos="fade-left">
          <div className=" md:w-96 w-full h-96 rounded-3xl ">
            <Image
              src={Img6}
              alt="img5"
              className=" object-cover h-full w-full rounded-3xl object-center "
            />
          </div>
          <div className="md:p-16 md:w-5/12 space-y-3">
            <div className="font-bold">POS application</div>
            <div>
              This is an area we pride ourselves as a provider of superior
              solutions in Nigeria. We provide the best services when it comes
              to transaction using pos, we provide you with support and help if
              any need arises.{" "}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center md:flex-nowrap flex-wrap-reverse gap-3 md:gap-0" data-aos="fade-right">
          <div className="md:p-16 md:w-5/12 space-y-3">
            <div className="font-bold">Support and Maintenance </div>
            <div>
              Our support team is second to none in the country with our pool of
              engineers available in all regions and reachable online or through
              the phone lines. When you call we answer at the highest speed
              possible and solve any issue you might be facing{" "}
            </div>
          </div>
          <div className=" md:w-96 w-full h-96 rounded-3xl ">
            <Image
              src={Img7}
              alt="img5"
              className=" object-cover h-full w-full rounded-3xl object-center "
            />
          </div>
        </div>

        <div className="flex items-center justify-center md:flex-nowrap flex-wrap gap-3 md:gap-0" data-aos="fade-left">
          <div className=" md:w-96 w-full h-96 rounded-3xl ">
            <Image
              src={Img8}
              alt="img5"
              className=" object-cover h-full w-full rounded-3xl object-center "
            />
          </div>
          <div className="md:p-16 md:w-5/12 space-y-3">
            <div className="font-bold">Transaction Processing</div>
            <div>
              Our application can be set-up and fully configured remotely. This
              enables very fast merchant set-up and deployment. We made it
              possible that you can set up your transaction flow from the
              comfort of your house without any issue.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platforms;
