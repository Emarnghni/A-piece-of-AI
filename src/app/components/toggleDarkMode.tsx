"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import moon from "/public/SVG/moon.svg";
import sun from "/public/SVG/sun.svg";
export default function ToggleDarkMode() {
  const [lightMode, setLightMode] = useState(false);
  useEffect(() => {
    if (!lightMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [lightMode]);

  return (
    <button
      onClick={() => setLightMode(!lightMode)}
      className="flex items-center justify-between gap-x-5 rounded-lg border border-accsent bg-white px-2 py-[10px] text-xs font-semibold text-black dark:border-none dark:bg-accsent dark:text-gray lg:w-full"
    >
      {lightMode ? (
        <Image src={sun} alt="sun for light mode" />
      ) : (
        <Image src={moon} alt="moon for dark mode" />
      )}
      {lightMode ? "Light" : "Dark"}
    </button>
  );
}
