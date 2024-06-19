import React, { useEffect, useState } from "react";
import axios from "axios";
import { CustomInput, CustomSelect, Button } from "@/app/components";
import ReactCountryFlagsSelect from "react-country-flags-select";

const FindRole = () => {
  const [country, setCountry] = useState<any>(null);
  const [formData, setFormData] = useState<any>({
    email:"",
    firstName:"",
    lastName:"",
    // country:null
  })
    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
  };

  const countrySelectClasses = {
    container: "",
    selectWrapper: "",
    searchSelect: "rounded-lg border-none border-gray-300 transition-all ease-in-out  duration-300 focus:outline-none focus:border-primary focus:ring focus:shadow-primary focus:ring-primary/30",
  };
  
  return (
    <div className="lg:px-28 px-5 flex flex-col  items-center ">
      <div className="text-center flex flex-col items-center justify-center ">
        <div
          className="lg:text-4xl text-xl font-bold  items-center"
          data-aos="fade-up"
        >
          Can&#x201B;t find your role ?
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
        <form className=" flex flex-col gap-5" onSubmit={sendEmail}>
          <CustomInput
            required={true}
            label="Email"
            placeholder="Input your email"
            type="email"
            value={formData.email}
          />
          <div className="flex gap-5 md:flex-row flex-col w-full">
            <div className="flex-grow">
              <CustomInput
                required={true}
                label="First Name"
                placeholder="Input your first name"
                value={formData.firstName}
              />
            </div>
            <div className="flex-grow">
              <CustomInput
                required={true}
                label="Last Name"
                placeholder="Input your last name"
                value={formData.lastName}
              />
            </div>
          </div>

       

          <div>
          <div className={`font-bold pb-2 text-sm `}>Country <span className="text-red-500">*</span></div>
          <ReactCountryFlagsSelect  fullWidth  selected={country} classes={countrySelectClasses} onSelect={setCountry} searchable={true} />
          <small className="text-xs text-red-500">Please fill out this field.</small>
          </div>
          <CustomInput type="phone" required={true} />
          <CustomInput
            required={true}
            label="Job Title"
            placeholder="Input Job title"
          />
          <CustomInput
            required={true}
            label="Upload a copy of your resume"
            placeholder="File upload"
            type="file"
          />
          <Button type="submit" label={"Submit"} onClick={() => {}} />
        </form>
      </div>
    </div>
  );
};

export default FindRole;
