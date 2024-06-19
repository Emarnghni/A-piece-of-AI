export default function ProjectCounter() {
  return (
    <div className="space-y-14 p-4">
      <div className="flex w-full flex-col items-center space-y-14 p-6 md:flex-row md:gap-x-16 md:space-y-0 lg:justify-around lg:space-y-0 lg:py-20">
        <p className="text-base text-black dark:text-white md:text-nowrap lg:text-xl">
          هیچ چیز عالی
          <span className="mt-2 block text-base lg:text-xl">
            تنهایی ساخته نشده است
          </span>
        </p>
        <div className="grid w-full grid-cols-3 justify-between md:gap-x-8 lg:w-fit lg:gap-x-32">
          <div className="text-center lg:space-y-2">
            <p className="text-xl text-black dark:text-white lg:text-2xl">
              <span className="text-sm lg:text-xl">+</span>۱۵۰
            </p>
            <p className="text-xs text-black dark:text-white  lg:text-lg">
              مشتری
            </p>
          </div>
          <div className="text-center lg:space-y-2">
            <p className="text-xl text-black dark:text-white lg:text-2xl">
              <span className="text-sm lg:text-xl">+</span>۳۲
            </p>
            <p className="text-xs text-black dark:text-white  lg:text-lg">
              پروژه‌باز
            </p>
          </div>
          <div className="text-center lg:space-y-2">
            <p className="text-xl text-black dark:text-white lg:text-2xl">
              <span className="text-sm lg:text-xl">+</span>۲۴
            </p>
            <p className="text-xs text-black dark:text-white  lg:text-lg">
              تحقیقات
            </p>
          </div>
        </div>
      </div>
      {/* removed becuase we don't have any content for it */}
      {/* <div className="py-4">
            <ClientOpinionSlider />
          </div> */}
    </div>
  );
}
