import Image from "next/image";
import ToggleDarkMode from "./toggleDarkMode";
import Platforms from "./platforms";
import language from "/public/SVG/language.svg";
import instagram from "/public/SVG/instagram.svg";
import linkedin from "/public/SVG/linkedin.svg";
import github from "/public/SVG/github.svg";
import telegram from "/public/SVG/telegram.svg";
import x from "/public/SVG/X.svg";
const platforms = [instagram, linkedin, github, telegram, x];

export default function FooterSection() {
  return (
    <div className="h-full md:flex md:justify-between">
      <div className="lg:flex lg:h-full lg:flex-row-reverse lg:items-center">
        <div className="lg:flex lg:h-full lg:flex-col lg:justify-between lg:gap-y-6">
          <h3 className="mb-4 text-xs text-black dark:text-white md:text-sm lg:text-base">
            مجوز‌ها
          </h3>
          <div className="flex items-center justify-between md:gap-x-12 lg:flex-col lg:items-end lg:gap-y-16">
            <div className="flex gap-x-20">
              <a
                className="flex h-20 w-20 items-center justify-center rounded-2xl bg-accsent text-xs font-normal text-white"
                href="#"
              >
                مجوز
              </a>
              <a
                className="flex h-20 w-20 items-center justify-center rounded-2xl bg-accsent text-xs font-normal text-white"
                href="#"
              >
                مجوز
              </a>
            </div>
            <div className="space-y-4">
              <a
                className="flex items-center gap-x-5 rounded-lg border border-accsent bg-white p-2 text-xs font-semibold text-black dark:border-none dark:bg-accsent dark:text-gray"
                href="#"
              >
                <Image src={language} alt="language" />
                English
              </a>
              <ToggleDarkMode />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-between md:items-center md:gap-x-8 lg:hidden">
        {platforms.map((item, index) => (
          <Platforms key={index} src={item} />
        ))}
      </div>
    </div>
  );
}
