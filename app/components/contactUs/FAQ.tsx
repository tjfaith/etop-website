import React from "react";
import { CustomAccordion } from "@/app/components";

const Questions = () => {
  const questions = [
    {
      title: "What is E-top ?",
      content:
        "Etop Nigeria Limited is a Payment Terminal Service Provider (PTSP) licensed by the Central Bank of Nigeria to provide POS terminal deployment, support, and maintenance services. We also maintain strategic partnerships with relevant stakeholders in the provision of payment solutions to clients.",
    },
    {
      title: "Do you offer support services?",
      content:
        "Yes we do. We have Field Support Officers (FSO) in over 25 states and Ad-Hoc Support staff in about 6 states with the sole responsibility of supporting merchants in these states.",
    },
    // {
    //     title: "What do we do ?",
    //     content:
    //       "E-Top Limited is an electronic payment solution provider, harnessing the best technologies and offering it to strategic partners. We have been able to develop systems ranging from web enabled POS applications to Internet business- to-business electronic trading portals with prepaid application and also support these applications and solutions.",
    //   },
      // {
      //   title: "What are the building blocks of your company?",
      //   content:
      //     "E-Top Limited is an electronic payment solution provider, harnessing the best technologies and offering it to strategic partners. We have been able to develop systems ranging from web enabled POS applications to Internet business- to-business electronic trading portals with prepaid application and also support these applications and solutions.",
      // },
      {
        title: "How do you perform your repairs ?",
        content:
          "E-Top has a fully functioning repair team headquartered in Lagos but with at least one technical repair staff in each of the regional offices.",
      },
  ];
  return (
    <div className="lg:px-28 px-5 flex flex-col items-center justify-center gap-8">
      <div className="text-center flex flex-col items-center justify-center ">
        <div
          className="lg:text-4xl text-xl font-bold  items-center"
          data-aos="fade-up"
        >
          We know you have questions
        </div>
        <div
          className=" text-center md:text-base text-sm md:w-9/12 mt-3  text-gray-500 "
          data-aos="fade-down"
        >
          Here are the most frequently asked questions and detailed answers to
          them for you benefit and our satisfaction in you journey with us
        </div>
      </div>

      <CustomAccordion items={questions} />
    </div>
  );
};

export default Questions;
