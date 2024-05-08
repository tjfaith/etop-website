import React from "react";
import { Loader } from "@/app/components";

const Loading = () => {
  return (
    <div className=" bg-red-400 h-screen w-screen absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center">
      <Loader size={100} fullScreen={true} />
    </div>
  );
};

export default Loading;
