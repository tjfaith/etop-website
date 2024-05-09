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
          We have offices all over Nigeria with adequate support for you and in
          addition, experiences staffs to attend to all your needs and requests.
        </div>
      </div>
      <div className="bg-gray-50 border-2 flex md:flex-row flex-col items-center justify-between gap-10 border-gray-300 text-sm rounded-2xl p-5 mt-8 md:divide-x-2 divide-gray-100 " data-aos="fade-up">
        <div className="text-center px-10  w-full ">
          <div className="text-primary font-semibold">Lagos office </div>
          <div>
            <div>309A, Island Way,Dolphin, Ikoyi, Lagos.</div>
            <div>+234 (01) 4538207</div>
            <div>support@etopng.com</div>
          </div>
        </div>

        <div className="text-center px-10 w-full">
          <div className="text-primary font-semibold">Abuja office  </div>
          <div>
            <div>Flat 2, No 10, Suez Crescent,Abacha Estate, Wuse Zone 4. Abuja</div>
            <div>+234 (0) 9 7800610</div>
            <div>support@etopng.com</div>
          </div>
        </div>
        <div className="text-center px-10 w-full">
          <div className="text-primary font-semibold">Port-Harcourt office </div>
          <div>
            <div>SUITE 10, R&B Galleria, Abacha Road, GRA PHASE III Port Harcourt Rivers State</div>
            <div>08032002437</div>
            <div>support@etopng.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visit;
