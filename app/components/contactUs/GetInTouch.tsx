import React from "react";
import axios from 'axios';
import { CustomInput, CustomSelect, Button } from "@/app/components";

const GetInTouch = () => {


const sendEmail = async()=>{
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/send_email', {
        username: 'tej',
        attachments: "values.attachments",
      });
  
      console.log("ok");
    } catch (error) {
      console.error("not ok", error);
    }
  };

}


  return (
    <div className="lg:px-28 px-5 flex flex-col items-center mt-10">
      <div className="text-center flex flex-col items-center justify-center ">
        <div
          className="lg:text-4xl text-xl font-bold  items-center"
          data-aos="fade-up"
        >
          Get in touch
        </div>
        <div
          className=" text-center md:text-base text-sm md:w-7/12 mt-3  text-gray-500 "
          data-aos="fade-down text-gray-500  "
        >
          We’d love to hear from you. Please fill out this form.
        </div>
      </div>

      <div className="mt-10 md:w-5/12 w-full ">
        <form className=" flex flex-col gap-5" onSubmit={sendEmail}>
          <div className="flex gap-5 md:flex-row flex-col w-full">
            <div className="flex-grow">
              <CustomInput
                label="First Name"
                placeholder="Input your first name"
              />
            </div>
            <div className="flex-grow">
              <CustomInput
                label="Last Name"
                placeholder="Input your last name"
              />
            </div>
          </div>
          <CustomInput
            label="Email"
            placeholder="Input your email"
            type="email"
          />
          <CustomInput type="phone" />
          <CustomInput label="Job Title" placeholder="Input Job title" />
          <CustomInput type="textarea"  label="Message" />
    
          <Button type="submit" label={"Submit"} onClick={() => {}} />
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
