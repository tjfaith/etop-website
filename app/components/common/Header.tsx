"use client";
import { usePathname, useRouter } from "next/navigation";
import React, {  useRef, useState } from "react";
import Image from "next/image";
import { FullLogo } from "@/app/assets";
import { Button } from "@/app/components";
import { Menu, X } from "lucide-react";
import { useClickOutside } from "@/app/hooks";

const Header = () => {
  const router = useRouter();
  const currentPath = usePathname();
  const menuRef = useRef<any>(null);
  const [showMenu, setShowMenu] = useState(false);

  const navigate = (route: string) => {
    setShowMenu(false);
    router.push(route);
  };
  useClickOutside(menuRef, false, setShowMenu);
  return (
    <section className=" h-10 md:h-40 lg:h-20">
    <header
      ref={menuRef}
      className=" md:px-28 px-5  flex flex-col lg:flex-row w-full items-center justify-between fixed bg-white z-20  py-5"
    >
      <div className="flex items-center justify-between cursor-pointer md:w-auto w-full animate__animated  animate__fadeInUp">
        <Image
          src={FullLogo}
          alt="logo"
          width={120}
          height={20}
          onClick={() => navigate("/")}
        />
        <button onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? (
            <X className=" md:hidden" />
          ) : (
            <Menu className=" md:hidden" />
          )}
        </button>
      </div>

      <ul
        className={`
      ${showMenu ? "flex" : "hidden"}
      md:flex md:flex-row animate__animated  animate__fadeInUp bg-white  flex-col w-full md:w-auto md:items-center justify-between md:gap-10 gap-2 my-4 `}
      >
        <li
          onClick={() => navigate("/about_us")}
          className={`
               ${
                 currentPath === "/about_us"
                   ? "text-primary"
                   : "hover:text-primary/50 duration-300 ease-in-out transition-all hover:font-bold "
               }
                  whitespace-nowrap  cursor-pointer`}
        >
          About us
        </li>
        <li
          onClick={() => navigate("/services")}
          className={`
               ${
                 currentPath === "/services"
                   ? "text-primary"
                   : "hover:text-primary/50 duration-300 ease-in-out transition-all hover:font-bold "
               }
                  whitespace-nowrap  cursor-pointer`}
        >
          Services
        </li>
        <li
          onClick={() => navigate("/careers")}
          className={`
               ${
                 currentPath === "/careers"
                   ? "text-primary"
                   : "hover:text-primary/50 duration-300 ease-in-out transition-all hover:font-bold "
               }
                  whitespace-nowrap  cursor-pointer`}
        >
          Industry solutions
        </li>
        <li
          onClick={() => navigate("/contact_us")}
          className={`
               ${
                 currentPath === "/contact_us"
                   ? "text-primary"
                   : "hover:text-primary/50 duration-300 ease-in-out transition-all hover:font-bold "
               }
                  whitespace-nowrap  cursor-pointer`}
        >
          Contact us
        </li>
      </ul>
      <Button
        onClick={() => navigate('/contact_us')}
        label="Get in touch"
        className={`${
          showMenu ? "flex" : "hidden"
        } md:block whitespace-nowrap self-start md:self-center animate__animated  animate__fadeInUp`}
      />
    </header>
    </section>
  );
};

export default Header;
