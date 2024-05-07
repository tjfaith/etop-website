"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";
import { FullLogo } from "@/app/assets";
import { Button } from "@/app/components";
import Link from "next/link";

const Header = () => {
  const currentPath = usePathname();
  return (
    <header className=" px-28  flex w-full items-center justify-between fixed bg-white z-20  pb-5 pt-8">
      <Image src={FullLogo} alt="logo" width={120} height={20} />
      <ul className="flex items-center justify-between gap-10">
        <li>
          <Link
            href={"/about_us"}
            className={
              currentPath === "/about_us"
                ? "text-primary"
                : "hover:text-primary/50 duration-300 ease-in-out transition-all hover:font-bold "
            }
          >
            About us
          </Link>
        </li>
        <li>
          <Link
            href={"/services"}
            className={
              currentPath === "/services"
                ? "text-primary"
                : "hover:text-primary/50 duration-300 ease-in-out transition-all hover:font-bold "
            }
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href={"/industry_solution"}
            className={
              currentPath === "/industry_solution"
                ? "text-primary"
                : "hover:text-primary/50 duration-300 ease-in-out transition-all hover:font-bold "
            }
          >
            Industry solutions
          </Link>
        </li>
        <li>
          <Link
            href={"/contact_us"}
            className={
              currentPath === "/contact_us"
                ? "text-primary"
                : "hover:text-primary/50 duration-300 ease-in-out transition-all hover:font-bold "
            }
          >
            Contact us
          </Link>
        </li>
      </ul>
      <Button onClick={() => {}} label="Get in touch" />
    </header>
  );
};

export default Header;
