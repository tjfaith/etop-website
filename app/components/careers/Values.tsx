import React from "react";
import Image from "next/image";
import { Img5, Img11, Img12, Img13 } from "@/app/assets";
const Values = () => {
  return (
    <div className="lg:px-28 px-5">
      <div className="text-center flex flex-col items-center justify-center">
        <div
          className="lg:text-4xl text-xl font-bold  items-center"
          data-aos="fade-up"
        >
          Our values
        </div>
        <div
          className=" text-center md:text-base text-sm md:w-9/12 mt-3  text-gray-500 "
          data-aos="fade-down text-gray-500  "
        >
          Our values shape our culture and guide us in our mission to transform
          the financial landscape. By embracing these principles, we create an
          environment where our team members thrive, our users trust us, and our
          business flourishes.
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-20 justify-between overflow-hidden">
        <div className="md:w-5/12" data-aos="zoom-out-down">
          <div className="rounded-2xl h-screen-40">
            <Image
              src={Img5}
              alt="value image"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="mt-5">
            <div className="text-xl font-bold">Integrity</div>
            <div className="text-gray-500">
              We uphold the highest standards of integrity in all our
              interactions and decisions. We believe in transparency, honesty,
              and ethical conduct as the foundation of trust with our users,
              partners, and team members.
            </div>
          </div>
        </div>

        <div className="md:w-5/12" data-aos="zoom-out-down">
          <div className="rounded-2xl h-screen-40">
            <Image
              src={Img11}
              alt="value image"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="mt-5">
            <div className="text-xl font-bold">Excellence</div>
            <div className="text-gray-500">
              {" "}
              We strive for excellence in everything we do. From the accuracy of
              our financial information to the user experience on our platform,
              we are committed to delivering exceptional quality and surpassing
              expectations.
            </div>
          </div>
        </div>

        <div className="md:w-5/12" data-aos="zoom-out-down">
          <div className="rounded-2xl h-screen-40">
            <Image
              src={Img12}
              alt="value image"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="mt-5">
            <div className="text-xl font-bold">Innovation</div>
            <div className="text-gray-500">
              We embrace innovation as a driving force behind progress. We
              continuously explore new technologies, methodologies, and ideas to
              enhance our services and provide our users with cutting-edge
              solutions that simplify their financial journey.
            </div>
          </div>
        </div>

        <div className="md:w-5/12" data-aos="zoom-out-down">
          <div className="rounded-2xl h-screen-40">
            <Image
              src={Img13}
              alt="value image"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="mt-5">
            <div className="text-xl font-bold">Social Responsibility</div>
            <div className="text-gray-500">
            We believe in making a positive impact on society. We are committed to acting as responsible corporate citizens, supporting initiatives that promote financial literacy, sustainability, and social equality. We aim to contribute to the well-being of the communities we serve.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
