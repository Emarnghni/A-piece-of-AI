"use client";
import { useState } from "react";
import Image from "next/image";
import NavButton from "./navButton";
import logo from "/public/Images/main logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="lg:mx-auto lg:w-[90%]">
      <div
        className={`flex flex-col justify-between px-4 transition-colors lg:w-full lg:px-0`}
      >
        <div className=" flex items-center justify-between py-6 lg:w-full">
          <div className={`z-20 flex w-[20%] items-center`}>
            <Image className="w-2/5" src={logo} alt="logo" />
            {/* <h1 className="mr-3 text-nowrap text-black dark:text-white md:text-base">
              A piece of AI
            </h1> */}
          </div>
          <div className="flex w-[80%] justify-end">
            <NavButton isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>
    </div>
  );
}
