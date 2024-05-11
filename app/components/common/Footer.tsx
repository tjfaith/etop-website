import React from "react";
import Image from "next/image";
import { FullLogo } from "@/app/assets";
import Link from "next/link";
import { Clock4, Mail, MapPin, Phone } from "lucide-react";
import { FaTwitter, FaFacebook  } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-abstract  text-white space-y-5">
      <section className="flex md:flex-row flex-col justify-between gap-10 md:gap-0 lg:px-28 px-5 py-10">
        <div className="space-y-4 md:w-3/12">
          <Image src={FullLogo} alt="logo" />
          <div className="text-sm">
            ETOP - Nigeria: Making Payments Easier. E-Top Limited is an
            electronic payment solution provider, harnessing the best
            technologies and offering it to strategic partners.
          </div>
        </div>
        <div>
          <div className="font-bold">Company</div>
          <ul className="space-y-2 mt-3 text-sm">
            <li className="hover:text-primary transition-all ease-in-out duration-300">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="hover:text-primary transition-all ease-in-out duration-300">
              <Link href={"/about_us"}>About Us</Link>
            </li>
            {/* <li className="hover:text-primary transition-all ease-in-out duration-300">
              <Link href={"/careers"}>Industry solutions</Link>
            </li> */}
            {/* <li className="hover:text-primary transition-all ease-in-out duration-300">
              <Link href={"/terminal_repair"}>Terminal repair</Link>
            </li> */}
            <li className="hover:text-primary transition-all ease-in-out duration-300">
              <Link href={"/careers"}>Careers</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-bold">Our Services</div>
          <div className="space-y-3 text-sm mt-3">
            <div>Mobile applications</div>
            <div>POS applications</div>
            <div>Support and maintenance</div>
            <div>Transaction processing</div>
          </div>
        </div>
        <div className="space-y-3 text-sm">
            <div className="flex space-x-3">
              <MapPin />
              <div>
                <div>Lagos Office</div>
                <div>309A, Island Way, Dolphin,Ikoyi, Lagos.</div>
              </div>
          </div>
          <div className="flex space-x-3 items-center">
            <Phone />
            <span>+234 (01) 4538207</span>
          </div>
          <div className="flex space-x-3 items-center">
            <Mail />
            <span>support@etopng.com</span>
          </div>
          <div className="flex space-x-3 items-center">
          <Clock4 />
          <span>Monday - Friday: 8am - 5pm</span>
          </div>
        </div>
      </section>
      <section className="w-full flex md:flex-row flex-col md:items-center md:gap-0 gap-3 justify-between text-sm py-10 lg:px-28 px-5 border-t">
        <div>
        &copy; {new Date().getFullYear()}  <Link href={"/"}>E-top Nigeria.</Link> All rights reserved.
        </div>
        <div className="flex items-center  text-white gap-3 text-lg">
       <Link target="_blank" href="https://twitter.com/e-top"> <FaTwitter /></Link>
       <Link target="_blank" href="https://www.linkedin.com/in/etop-nigeria-4069b72b6/?originalSubdomain=ng"> <FaLinkedin/></Link>
       <Link target="_blank" href="https://www.facebook.com/etopnigerialimited/"> <FaFacebook /></Link>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
