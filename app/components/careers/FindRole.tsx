import React from "react";
import { CustomInput, CustomSelect, Button } from "@/app/components";

const FindRole = () => {
  return (
    <div className="lg:px-28 px-5 flex flex-col  items-center ">
      <div className="text-center flex flex-col items-center justify-center ">
        <div
          className="lg:text-4xl text-xl font-bold  items-center"
          data-aos="fade-up"
        >
          Can’t find your role ?
        </div>
        <div
          className=" text-center md:text-base text-sm md:w-7/12 mt-3  text-gray-500 "
          data-aos="fade-down text-gray-500  "
        >
          We value the diverse talents and perspectives that each team member
          brings. We are sorry that we do not currently have a specific job
          description for the role you are seeking. However, we love that you
          submit your details so as to have your details in our records.
        </div>
      </div>

      <div className="mt-10 md:w-5/12 w-full mb-16">
        <form className=" flex flex-col gap-5">
          <CustomInput
            label="Email"
            placeholder="Input your email"
            type="email"
          />
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
          <CustomSelect
            data={[{ label: "TEST", value: "New" }]}
            placeholder="select your country"
            label="Country"
          />
          <CustomInput type="phone" />
          <CustomInput
                label="Job Title"
                placeholder="Input Job title"
              />
        <CustomInput
                label="Upload a copy of your resume"
                placeholder="File upload"
                type="file"
              />
              <Button type="submit" label={"Submit"} onClick={()=>{}}/>
        </form>
      </div>
    </div>
  );
};

export default FindRole;
