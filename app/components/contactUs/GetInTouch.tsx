import React, { useState } from "react";
import { CustomInput, Button } from "@/app/components";
import { emailServices } from "@/app/api";
import toast from "react-hot-toast";

const GetInTouch = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    subject: "",
    message: "",
  });

  const resetData = () => {
    setData({
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      subject: "",
      message: "",
    });
  };
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await emailServices()
      .contactUs(data)
      .then(
        (response) => {
          resetData();
          setLoading(false);
          toast.success("Email sent");
        },
        () => {
          toast.error("An error occurred! Try again");
          setLoading(false);
        }
      );
  };

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
                required
                label="First Name"
                placeholder="Input your first name"
                value={data.first_name}
                onValueChange={(value: string) =>
                  setData({ ...data, first_name: value })
                }
              />
            </div>
            <div className="flex-grow">
              <CustomInput
                required
                label="Last Name"
                placeholder="Input your last name"
                value={data.last_name}
                onValueChange={(value: string) =>
                  setData({ ...data, last_name: value })
                }
              />
            </div>
          </div>
          <CustomInput
            required
            label="Email"
            placeholder="Input your email"
            type="email"
            value={data.email}
            onValueChange={(value: string) =>
              setData({ ...data, email: value })
            }
          />
          <CustomInput
            type="phone"
            label="Phone Number"
            value={data.phone_number}
            onValueChange={(value: string) =>
              setData({ ...data, phone_number: value })
            }
          />
          <CustomInput
            required
            type="text"
            label="Subject"
            placeholder="Message Subject"
            value={data.subject}
            onValueChange={(value: string) =>
              setData({ ...data, subject: value })
            }
          />
          <CustomInput
            required
            type="textarea"
            label="Message"
            value={data.message}
            onValueChange={(value: string) =>
              setData({ ...data, message: value })
            }
          />

          <Button
            isLoading={loading}
            type="submit"
            label={"Submit"}
            onClick={() => {}}
          />
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
