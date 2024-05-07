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
      className="w-full bg-no-repeat bg-cover bg-center px-28 bg-abstract text-white py-10 flex items-center justify-between "
    >
      <div className="flex flex-col justify-center items-center gap-3">
        <Image src={CrownIcon} alt="Crown Icon" />
        <div className="font-bold text-xl"><CountUp enableScrollSpy scrollSpyOnce end={100} />%</div>
        <div>Customer satisfaction</div>
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <Image src={AwardIcon} alt="Crown Icon" />
        <div className="font-bold text-xl"><CountUp enableScrollSpy scrollSpyOnce end={2} /></div>
        <div>Awards won</div>
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <Image src={ProfileIcon} alt="Crown Icon" />
        <div className="font-bold text-xl"><CountUp enableScrollSpy scrollSpyOnce end={5406} /></div>
        <div>Clients worldwide</div>
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <Image src={PartnershipIcon} alt="Crown Icon" />
        <div className="font-bold text-xl"><CountUp enableScrollSpy scrollSpyOnce end={19} /></div>
        <div>Solid partnership</div>
      </div>
    </section>
  );
};

export default Counts;
