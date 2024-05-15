import React from "react";

const Visit = () => {
  return (
    <div className="lg:px-28 px-5 flex flex-col items-center justify-center md:gap-8">
      <div className="text-center flex flex-col items-center justify-center mt-28">
        <div
          className="lg:text-4xl text-xl font-bold  items-center"
          data-aos="fade-up"
        >
          Would you love to pay us a visit ?
        </div>
        <div
          className=" text-center md:text-base text-sm md:w-9/12 mt-3  text-gray-500 "
          data-aos="fade-down text-gray-500  "
        >
          We have 4 regional offices in Lagos, Ibadan, Port Harcourt and Abuja. We have field support personnel in over 25 state.
        </div>
      </div>
      <div className="bg-gray-50 border-2 flex md:flex-row flex-col items-center justify-between gap-10 border-gray-300 text-sm rounded-2xl p-5 mt-8 md:divide-x-2 divide-gray-100 " data-aos="fade-up">
        <div className="text-center px-10  w-full ">
          <div className="text-primary font-semibold">Lagos office </div>
          <div>
            <div>309A, Island Way,Dolphin, Ikoyi, Lagos.</div>
            <div>+2349152498001, +2349152498088</div>
            <div>support@etopng.com</div>
          </div>
        </div>

        <div className="text-center px-10 w-full">
          <div className="text-primary font-semibold">Abuja office  </div>
          <div>
            <div>3rd Floor, Nicon Insurance Plaza, Central Business District, Abuja.</div>
            <div>+2349152496002</div>
            <div>support@etopng.com</div>
          </div>
        </div>
        <div className="text-center px-10 w-full">
          <div className="text-primary font-semibold">Port-Harcourt office </div>
          <div>
            <div>Suite 10 R&B Galleria Abacha Rd, GRA, Port-Harcourt.</div>
            <div>+2349152496055</div>
            <div>support@etopng.com</div>
          </div>
        </div>
        <div className="text-center px-10 w-full">
          <div className="text-primary font-semibold">Ibadan office </div>
          <div>
            <div>No 2, Lawal okelanfa street, off Ring Road, by Derovance Bus/Stop Ibadan, Oyo state.</div>
            <div>+2349152494800</div>
            <div>support@etopng.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visit;
