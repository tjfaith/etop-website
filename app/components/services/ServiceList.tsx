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
            title: "Transaction Processing",
            content: (
              <div className="space-y-4">
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ullamcorper mattis lorem non. Ultrices praesent amet ipsum
                  justo massa. Eu dolor aliquet risus gravida nunc at feugiat
                  consequat purus. Non massa enim vitae duis mattis. Vel in
                  ultricies vel fringilla.
                </div>
                <div className="font-bold">Introduction</div>

                <p>
                  Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
                  suspendisse morbi eleifend faucibus eget vestibulum felis.
                  Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam.
                  Mauris posuere vulputate arcu amet, vitae nisi, tellus
                  tincidunt. At feugiat sapien varius id.
                </p>
                <p>
                  Eget quis mi enim, leo lacinia pharetra, semper. Eget in
                  volutpat mollis at volutpat lectus velit, sed auctor.
                  Porttitor fames arcu quis fusce augue enim. Quis at habitant
                  diam at. Suscipit tristique risus, at donec. In turpis vel et
                  quam imperdiet. Ipsum molestie aliquet sodales id est ac
                  volutpat.
                </p>
                <div className="my-4">
                  <Image src={Img15} alt="Service image" />
                </div>

                <div className="p-3 border-l-2 border-l-primary">
                  <p>
                    “In a world older and more complete than ours they move
                    finished and complete, gifted with extensions of the senses
                    we have lost or never attained, living by voices we shall
                    never hear.”
                  </p>
                  <p>
                    <small className="text-gray-400">
                      — Olivia Rhye, Product Designer
                    </small>
                  </p>
                </div>
                <p>
                  Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum,
                  nulla odio nisl vitae. In aliquet pellentesque aenean hac
                  vestibulum turpis mi bibendum diam. Tempor integer aliquam in
                  vitae malesuada fringilla.
                </p>
                <p>
                  Elit nisi in eleifend sed nisi. Pulvinar at orci, proin
                  imperdiet commodo consectetur convallis risus. Sed condimentum
                  enim dignissim adipiscing faucibus consequat, urna. Viverra
                  purus et erat auctor aliquam. Risus, volutpat vulputate
                  posuere purus sit congue convallis aliquet. Arcu id augue ut
                  feugiat donec porttitor neque. Mauris, neque ultricies eu
                  vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc
                  lectus in tellus, pharetra, porttitor.
                </p>
                <p>
                  Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim
                  mauris id. Non pellentesque congue eget consectetur turpis.
                  Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt
                  aenean tempus. Quis velit eget ut tortor tellus. Sed vel,
                  congue felis elit erat nam nibh orci.
                </p>
              </div>
            ),
          },
          {title:"Transaction Set", content:<div></div>},
          {title:"Customized Solutions ", content:<div></div>},
          {title:"Cash Registers", content:<div></div>},
          {title:"AFC", content:<div></div>},
          {title:"Electronic Top up", content:<div></div>},
          {title:"Smart Stadium", content:<div></div>},
        ]}
      />
    </div>
  );
};

export default ServiceList;
