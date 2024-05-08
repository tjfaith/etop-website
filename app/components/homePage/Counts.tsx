import React from "react";
import Image from "next/image";
import CountUp from 'react-countup';
import {
  AwardIcon,
  CrownIcon,
  PartnershipIcon,
  ProfileIcon,
  VectorLine,
} from "@/app/assets";

const Counts = () => {
  return (
    <section
      style={{ backgroundImage: "url(" + VectorLine.src + ")" }}
      className="w-full bg-no-repeat bg-cover bg-center lg:px-28 px-5 md:text-sm text-xs gap-5 md:overflow-x-hidden overflow-x-auto  bg-abstract text-white py-10 flex  items-center justify-between "
    >
      <div className="flex flex-col justify-center items-center gap-3">
        <Image src={CrownIcon} alt="Crown Icon" className="md:w-auto md:h-auto w-5 h-5" />
        <div className="font-bold md:text-xl"><CountUp enableScrollSpy scrollSpyOnce end={100} />%</div>
        <div className=" whitespace-nowrap">Customer satisfaction</div>
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <Image src={AwardIcon} alt="Crown Icon" className="md:w-auto md:h-auto w-5 h-5" />
        <div className="font-bold md:text-xl"><CountUp enableScrollSpy scrollSpyOnce end={2} /></div>
        <div className=" whitespace-nowrap">Awards won</div>
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <Image src={ProfileIcon} alt="Crown Icon" className="md:w-auto md:h-auto w-5 h-5" />
        <div className="font-bold md:text-xl"><CountUp enableScrollSpy scrollSpyOnce end={5406} /></div>
        <div className=" whitespace-nowrap">Clients worldwide</div>
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <Image src={PartnershipIcon} alt="Crown Icon" className="md:w-auto md:h-auto w-5 h-5" />
        <div className="font-bold md:text-xl"><CountUp enableScrollSpy scrollSpyOnce end={19} /></div>
        <div className=" whitespace-nowrap">Solid partnership</div>
      </div>
    </section>
  );
};

export default Counts;
