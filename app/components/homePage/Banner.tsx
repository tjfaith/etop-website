import React from "react";
import { Img1, Img2, Img3, Img4, LineBg } from "@/app/assets";
import Image from "next/image";
import { Button, HighlightedText } from "@/app/components";
import Carousel from "react-multi-carousel";

const Banner = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="lg:pt-auto pt-3 lg:px-28 px-5">
      <div className="relative h-screen-60 flex flex-col items-center justify-center gap-8 mt-10">
        <Image
          src={LineBg}
          alt="Line Background"
          layout="fill"
          objectFit="cover"
          className=" -z-10 px-20"
        />
        <div data-aos="fade-down">
          <div className="w-full flex items-center justify-center">
            <div className="uppercase lg:text-4xl text-2xl font-bold flex-col items-center flex gap-3">
              <div className="flex items-center space-x-3 " data-aos="fade-up">
                <div>We Make your</div>
                <HighlightedText text="Payment" />
              </div>
              <div data-aos="fade-up" data-aos-easing="linear">
                Easier and Faster
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 text-center" data-aos="fade-down">
          E-Top Limited is an electronic payment solution provider, harnessing
          the best technologies and offering it to strategic partners. We are
          dedicated to changing the way you pay for goods and services.
        </div>
        <div className="gap-5 flex md:flex-row flex-col items-center justify-center" data-aos="fade-down">
          <Button label={"Get in touch"} onClick={() => {}} className='whitespace-nowrap border-2 border-primary' />
          <Button
            label={"View services"}
            onClick={() => {}}
            style="secondary"
            className='whitespace-nowrap'
          />
        </div>
      </div>
      <Carousel
        responsive={responsive}
        autoPlay
        swipeable
        draggable
        infinite
        arrows={false}
        className="space-x-5  flex items-stretch w-full h-screen-60"
      >
        <div
          className="rounded-xl w-full h-screen-50 px-2"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-delay="600"
        >
          <Image
            src={Img1}
            alt="banner image"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div
          className=" w-full h-screen-50 rounded-xl flex items-end px-2"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-delay="500"
        >
        <div className="w-full  h-screen-40 mb-5">
          <Image
            src={Img2}
            alt="banner image"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        </div>
        <div
          className=" w-full h-screen-40 rounded-xl -mt-8 px-2"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-delay="400"
        >
          <Image
            src={Img3}
            alt="banner image"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div
          className="rounded-xl w-full h-screen-50 px-2"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-delay="300"
        >
          <Image
            src={Img4}
            alt="banner image"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </Carousel>
    </section>
  );
};

export default Banner;
