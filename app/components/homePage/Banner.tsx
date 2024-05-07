import React from "react";
import { Img1, Img2, Img3, Img4, LineBg } from "@/app/assets";
import Image from "next/image";
import { Button, HighlightedText } from "@/app/components";

const Banner = () => {
  return (
    <section>
      <div className="relative h-screen-60 flex flex-col items-center justify-center gap-8 mt-10">
        <Image
          src={LineBg}
          alt="Line Background"
          layout="fill"
          objectFit="cover"
          className=" -z-10 px-20"
        />
        <div>
          <div className="w-full flex items-center justify-center">
            <div className="uppercase text-4xl font-bold flex-col items-center flex gap-3">
              <div className="flex items-center space-x-3" data-aos="fade-up">
                <div>We Make your</div>
                <HighlightedText text="Payment" />
              </div>
              <div
                data-aos="fade-up"
                data-aos-easing="linear"
              >
                Easier and Faster
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 text-center">
          E-Top Limited is an electronic payment solution provider, harnessing
          the best technologies and offering it to strategic partners. We are
          dedicated to changing the way you pay for goods and services.
        </div>
        <div className="gap-5 flex items-center justify-center">
          <Button label={"Get in touch"} onClick={() => {}} />
          <Button
            label={"View services"}
            onClick={() => {}}
            style="secondary"
          />
        </div>
      </div>
      <div className="flex items-stretch w-full gap-5 ">
        <div className="rounded-xl w-50-screen h-screen-50"   data-aos="fade-up"
                data-aos-easing="linear"  data-aos-delay="600">
          <Image
            src={Img1}
            alt="banner image"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className=" w-30-screen h-screen-40 rounded-xl  self-end mb-5 "   data-aos="fade-up"
                data-aos-easing="linear"  data-aos-delay="500">
          <Image
            src={Img2}
            alt="banner image"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className=" w-30-screen h-screen-40 rounded-xl -mt-10"   data-aos="fade-up"
                data-aos-easing="linear"  data-aos-delay="400">
          <Image
            src={Img3}
            alt="banner image"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="rounded-xl w-50-screen h-screen-50"   data-aos="fade-up"
                data-aos-easing="linear"  data-aos-delay="300">
          <Image
            src={Img4}
            alt="banner image"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
