import { MapBase } from "@/app/assets";
import React from "react";
import { Button } from "@/app/components";
import Image from "next/image";
import { useRouter } from "next/navigation";

const JoinUs = () => {
  const router = useRouter()

  return (
    <section className="w-full lg:px-28 px-5 bg-primary text-white py-10 flex items-center justify-center relative ">
      <Image
        src={MapBase}
        alt="Line Background"
        className=" -z-0 md:px-20 absolute md:bottom-0  h-full  md:object-contain object-cover"
        
      />

      <div className=" flex flex-col items-center justify-center border rounded-xl py-5 px-10 space-y-5 backdrop-blur-sm bg-primary/10 md:mt-16 mt-5">
        <div className="font-bold md:text-xl text-sm text-center ">
          Join us as we build a community all over the world
        </div>
        <Button
          label={"Get in touch"}
          onClick={() => router.push('/contact_us')}

          style="secondary"
          className="border-none text-primary"
        />
      </div>
    </section>
  );
};

export default JoinUs;
