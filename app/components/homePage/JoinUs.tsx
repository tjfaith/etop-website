import { MapBase } from "@/app/assets";
import React from "react";
import { Button } from "@/app/components";
import Image from "next/image";

const JoinUs = () => {
  return (
    <section className="w-full px-28 bg-primary text-white py-10 flex items-center justify-center relative ">
      <Image
        src={MapBase}
        alt="Line Background"
        className=" -z-0 px-20 absolute bottom-0 object-contain"
        
      />

      <div className=" flex flex-col items-center justify-center border rounded-xl py-5 px-10 space-y-5 backdrop-blur-sm bg-primary/10 mt-16">
        <div className="font-bold text-xl">
          Join us as we build a community all over the world
        </div>
        <Button
          label={"Get in touch"}
          onClick={() => {}}
          style="secondary"
          className="border-none text-primary"
        />
      </div>
    </section>
  );
};

export default JoinUs;
