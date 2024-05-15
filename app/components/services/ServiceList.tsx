import React from "react";
import { CustomTab } from "@/app/components";
import { Img15 } from "@/app/assets";
import Image from "next/image";

const ServiceList = () => {
  return (
    <div className="flex flex-col  lg:px-28 px-5 pb-20">
      <CustomTab
        data={[
          {
            title: "Agency Banking",
            content: (
              <div className="space-y-4">
                <div>
                  The Falcon Agent app is a secure platform designed for Etop
                  Nigeria Limited's registered agents. It allows them to
                  conveniently handle financial transactions for customers, even
                  in areas with limited access to banks or ATMs. This innovative
                  app makes banking services more accessible for everyone.
                </div>
              </div>
            ),
          },
          {
            title: "Support and Maintenance",
            content: (
              <div>
                Our support team is second to none in the country with our pool
                of engineers available in all regions and reachable online or
                through the phone lines. We have dedicated staff to attend to
                all acquirers and merchant needs.
              </div>
            ),
          },
          {
            title: "POS Applications",
            content: (
              <div>
                This is an area we pride ourselves as a provider of superior
                solutions in Nigeria. Our applications are highly secure, robust
                and very reliable. We have developed (on- behalf of the
                Acquirer) and deployed sophisticated electronic payment
                applications for many merchants that require special transaction
                processing needs.
              </div>
            ),
          },
          {
            title: "Mobile Applications",
            content: (
              <div>
                We are partners in the development and successful rollout of the
                mobile (e-payment and e-banking) application for several
                financial institutions in Nigeria. This solution implements
                nearly all applications we have developed and deployed on POS
                terminals. We also implemented a push technology for the client
                to enable it push the application binary directly on to its
                user&#39;s mobile phones.
              </div>
            ),
          },
        ]}
      />
    </div>
  );
};

export default ServiceList;
