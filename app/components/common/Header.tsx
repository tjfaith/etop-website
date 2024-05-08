"use client";
import { usePathname } from "next/navigation";
import React, { Fragment, useRef, useState } from "react";
import Image from "next/image";
import { FullLogo } from "@/app/assets";
import { Button } from "@/app/components";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useClickOutside } from "@/app/hooks";

const Header = () => {
  const currentPath = usePathname();
  const menuRef = useRef<any>(null)
  const [showMenu, setShowMenu] = useState(false);

  useClickOutside(menuRef, false, setShowMenu)
  return (
    <header ref={menuRef} className=" md:px-28 px-5  flex flex-col lg:flex-row w-full items-center justify-between fixed bg-white z-20  pb-5 pt-8">
      <div className="flex items-center justify-between md:w-auto w-full animate__animated  animate__fadeInUp">
        <Link href="/">
          <Image src={FullLogo} alt="logo" width={120} height={20} />
        </Link>
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
        <li>
          <Link
            href={"/about_us"}
            className={`
               ${
                 currentPath === "/about_us"
                   ? "text-primary"
                   : "hover:text-primary/50 duration-300 ease-in-out transition-all hover:font-bold "
               }
                  whitespace-nowrap `}
          >
            About us
          </Link>
        </li>
        <li>
          <Link
            href={"/services"}
            className={`
              ${
                currentPath === "/services"
                  ? "text-primary"
                  : "hover:text-primary/50 duration-300 ease-in-out transition-all hover:font-bold "
              }
                 whitespace-nowrap `}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href={"/industry_solution"}
            className={`
              ${
                currentPath === "/industry_solution"
                  ? "text-primary"
                  : "hover:text-primary/50 duration-300 ease-in-out transition-all hover:font-bold "
              }
                 whitespace-nowrap `}
          >
            Industry solutions
          </Link>
        </li>
        <li>
          <Link
            href={"/contact_us"}
            className={`
              ${
                currentPath === "/contact_us"
                  ? "text-primary"
                  : "hover:text-primary/50 duration-300 ease-in-out transition-all hover:font-bold "
              }
                 whitespace-nowrap `}
          >
            Contact us
          </Link>
        </li>
      </ul>
      <Button
        onClick={() => {}}
        label="Get in touch"
        className={`${showMenu ? "flex" : "hidden"} md:block whitespace-nowrap self-start md:self-center animate__animated  animate__fadeInUp`}
      />
    </header>
  );
};

export default Header;
