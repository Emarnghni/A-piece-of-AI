import { Dispatch, SetStateAction } from "react";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
export default function NavButton({ isOpen, setIsOpen }: Props) {
  const clickHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        className={`wrapper h-screen lg:static lg:flex lg:h-fit lg:w-full lg:justify-between ${isOpen ? "open" : ""}`}
      >
        <div className="expandable w-screen justify-evenly px-8  lg:flex lg:h-full lg:w-full lg:flex-row lg:items-center lg:justify-between lg:gap-14 lg:bg-transparent lg:px-0">
          <div className="flex flex-col-reverse gap-y-14 lg:w-[70%] lg:flex-row-reverse lg:justify-between">
            <a
              className={`hover nav text-base font-medium text-black dark:text-white md:text-xl lg:block lg:text-sm ${isOpen ? "open" : ""}`}
              href="#"
            >
              درباره ما
            </a>
            <a
              className={`hover nav text-base font-medium text-black dark:text-white md:text-xl lg:block lg:text-sm ${isOpen ? "open" : ""}`}
              href="#"
            >
              تماس با ما
            </a>
            <a
              className={`hover nav text-base font-medium text-black dark:text-white md:text-xl lg:block lg:text-sm ${isOpen ? "open" : ""}`}
              href="#"
            >
              همکاری با ما
            </a>
            <a
              className={`hover nav text-base font-medium text-black dark:text-white md:text-xl lg:block lg:text-sm ${isOpen ? "open" : ""}`}
              href="#"
            >
              پروژه‌ها
            </a>
            <a
              className={`hover nav text-base font-medium text-black dark:text-white md:text-xl lg:block lg:text-sm ${isOpen ? "open" : ""}`}
              href="#"
            >
              صفحه اصلی
            </a>
          </div>
          <div
            className={`nav flex-col justify-evenly gap-x-5 gap-y-10 md:flex-row lg:flex ${isOpen ? "open" : ""}`}
          >
            <a
              href="#"
              className=" rounded-4xl border border-accsent px-6 py-4 text-center text-base font-medium text-black dark:border-none dark:bg-accsent dark:text-white md:flex-grow md:rounded-3xl md:px-8 md:py-4 md:text-lg lg:flex-grow-0 lg:px-6 lg:py-2 lg:text-xs"
            >
              دکمه اول
            </a>
            <a
              href="#"
              className="rounded-4xl border border-[#806ff1] px-6 py-4 text-center text-base font-medium text-black dark:border-none dark:bg-[#806ff1] dark:text-white md:flex-grow md:rounded-3xl md:px-8 md:py-4 md:text-lg lg:flex-grow-0 lg:px-6 lg:py-2 lg:text-xs"
            >
              دکمه دوم
            </a>
          </div>
        </div>
      </div>
      <div onClick={clickHandler} className="z-20 space-y-2 lg:hidden">
        <span
          className={`block h-[2px] w-4 bg-white transition-transform ${
            isOpen ? "-mb-[9.9px] -rotate-45" : ""
          }`}
        ></span>
        <span
          className={`block h-[2px] w-4 bg-white transition-transform ${
            isOpen ? "rotate-45" : ""
          }`}
        ></span>
      </div>
    </>
  );
}
