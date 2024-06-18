import Image from "next/image";
// Components
import Features from "./components/features";
import Pulse from "./components/pulse";
import ProjectCard from "./components/projectCard";
import TxtArow from "./components/txtArow";
import ClientOpinionSlider from "./components/clientOpinionSlider";
import ContactUs from "./components/contactUs";
import FooterLink from "./components/footerLink";
import Platforms from "./components/platforms";
// Images
import banner from "/public/Images/banner.png";
import pruductLogo from "/public/Images/logo.png";
import secondBanner from "/public/Images/second banner.png";
import Header from "./components/header";
import EssaySlider from "./components/essaySlider";
import PictruesSlider from "./components/pictruesSlider";
// SVG files
import logo from "/public/SVG/openai.svg";
import arrow from "/public/SVG/Arrow.svg";
import location from "/public/SVG/location.svg";
import oldPhone from "/public/SVG/old phone.svg";
import call from "/public/SVG/call.svg";
import email from "/public/SVG/email.svg";
import language from "/public/SVG/language.svg";
import instagram from "/public/SVG/instagram.svg";
import linkedin from "/public/SVG/linkedin.svg";
import github from "/public/SVG/github.svg";
import telegram from "/public/SVG/telegram.svg";
import x from "/public/SVG/X.svg";
import ToggleDarkMode from "./components/toggleDarkMode";

export default function Home() {
  const features = [
    {
      id: Math.random(),
      src: pruductLogo,
      title: "لورم ایپسوم",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.",
    },
    {
      id: Math.random(),
      src: pruductLogo,
      title: "لورم ایپسوم",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.",
    },
    {
      id: Math.random(),
      src: pruductLogo,
      title: "لورم ایپسوم",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.",
    },
    {
      id: Math.random(),
      src: pruductLogo,
      title: "لورم ایپسوم",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.",
    },
  ];
  const project = [
    {
      id: 1,
      title: "با هوش مصنوعی بلاک‌چین را شکست دهید",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
      href: "#",
    },
    {
      id: 2,
      title: "با هوش مصنوعی بلاک‌چین را شکست دهید",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
      href: "#",
    },
    {
      id: 3,
      title: "با هوش مصنوعی بلاک‌چین را شکست دهید",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
      href: "#",
    },
  ];
  const platforms = [instagram, linkedin, github, telegram, x];
  return (
    <>
      <div className="w-full bg-white dark:bg-black">
        <div className="flex h-screen flex-col justify-between pb-6">
          <Header />
          <div className="mr-auto flex flex-col lg:w-[95%]">
            <div className="lg:flex">
              <div className="px-4 lg:flex lg:flex-col lg:justify-center lg:px-0">
                <p className="mt-9 text-base text-black dark:text-white md:text-2xl lg:text-4xl">
                  جهش بزرگ به سوی آینده هوش مصنوعی
                </p>
                <p className="mt-9 text-xs font-medium leading-loose text-black dark:text-white md:text-justify lg:text-sm lg:leading-[2.5]">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد.
                </p>
              </div>
              <Image
                className="mt-9 w-full object-cover"
                src={banner}
                alt="banner"
              />
            </div>
          </div>
          <div className="lg:mr-auto lg:w-[95%]">
            <PictruesSlider />
          </div>
        </div>
        <div className="mx-auto flex h-screen flex-col justify-start md:py-16 lg:mx-auto lg:h-fit lg:w-[90%] lg:flex-row lg:items-center lg:gap-x-52 lg:py-20">
          <div className="flex w-full justify-center px-8 lg:w-[unset] lg:justify-start lg:px-0 ">
            <Image
              className="rounded-2xl md:w-4/5 lg:w-[unset]"
              src={secondBanner}
              alt="second banner"
            />
          </div>
          <div className="flex h-full flex-col items-center gap-x-14 space-y-8 md:space-y-16 lg:items-start lg:justify-start">
            <h3 className="mt-8 text-base text-black dark:text-white lg:text-2xl">
              هوش مصنوعی سازنده آینده هوشمندان زمان حال
            </h3>
            <div className="space-y-8 px-4  md:grid md:grid-cols-2 md:gap-x-20 md:gap-y-8 lg:gap-[120px] lg:space-y-0">
              {features.map((item) => (
                <Features
                  src={item.src}
                  key={item.id}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
        <div className=" mx-auto mt-3 px-4 py-9 lg:flex lg:w-[90%] lg:flex-row lg:px-0">
          <div className="lg:flex lg:w-full lg:justify-around">
            <div className="flex flex-col items-center justify-center gap-6 lg:w-2/5 lg:items-start">
              <div className="flex items-center gap-4 ">
                <Pulse />
                <h2 className="text-sm font-normal text-black dark:text-white md:text-xl lg:text-3xl">
                  پروژه‌ها و محصولات
                </h2>
              </div>
              <p className="text-center text-xs font-normal text-black dark:text-white md:text-sm">
                شما می‌توانید متناسب با صنعت و اندازه شرکت خود یکی از راهکارهای
                ابری آروان را به کار گیرید.
              </p>
            </div>
            <div className="mt-5 flex flex-col gap-y-4 md:grid md:grid-cols-2 md:gap-x-4 lg:mt-0 lg:flex lg:w-3/5 lg:flex-row lg:gap-x-5">
              {project.map((item) => (
                <ProjectCard
                  src={arrow}
                  linkTitle="ادامه دهید"
                  title={item.title}
                  description={item.description}
                  href={item.href}
                  key={item.id}
                />
              ))}
            </div>
          </div>
        </div>
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
        <div className="mx-auto w-[90%] px-4 py-8 lg:px-0">
          <TxtArow isPulse={true} title="تحقیقات و مقالات" />
          <EssaySlider />
        </div>
        <footer className="border-y border-gray px-4 py-8 lg:px-2">
          <div className="lg:flex lg:h-fit lg:justify-between lg:px-8">
            <div className="md:flex md:w-full md:justify-between lg:w-fit lg:gap-x-28">
              <div>
                <div className="mb-5 flex-col items-center">
                  <div className="mb-5 flex items-center">
                    <Image className="w-8" src={logo} alt="logo" />
                    <h1 className="mr-3 text-sm font-medium text-black dark:text-white md:text-base lg:text-lg">
                      A piece of AI
                    </h1>
                  </div>
                  <div className="space-y-6 py-4">
                    <h3 className="text-xs font-medium text-black dark:text-white lg:text-sm">
                      اخبار جدید را به صورت هفتگی در ایمیل خود دریافت کنید:
                    </h3>
                    <form
                      className="flex flex-col gap-y-6 text-black dark:text-white lg:flex-row lg:gap-x-5"
                      method="post"
                    >
                      <input
                        className="rounded-4xl border border-purple py-2 pr-12 placeholder:text-xs dark:border-none dark:bg-purple md:py-3 md:pl-32"
                        type="text"
                        placeholder="آدرس ایمیل"
                      />
                      <button className="rounded-4xl border border-pink py-2 text-xs font-medium dark:bg-pink md:py-3 lg:px-8">
                        ثبت
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-5 text-black dark:text-white">
                <h3 className="text-xs font-medium md:text-sm lg:text-base">
                  راه های ارتباطی
                </h3>
                <ContactUs src={location}>
                  <div className="text-xs">
                    بلوارکوثر، میدان پژوهش، کارخانه نوآوری مشهد،
                    <p className="text-xs"> دفتر تیم تکه‌ای از هوش مصنوعی</p>
                  </div>
                </ContactUs>
                <ContactUs src={oldPhone} text="05135265879" />
                <ContactUs src={call} text="09307670150" />
                <ContactUs src={email} text="apieceofai.info@gmail.com" />
                <div className="mt-8 hidden justify-between lg:flex">
                  {platforms.map((item, index) => (
                    <Platforms key={index} src={item} />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-between px-4 py-4 md:my-5 lg:grid lg:grid-cols-2 lg:gap-x-20 lg:p-0">
              <FooterLink title="لینک‌ها">
                <li className="list-disc text-mini text-black dark:text-white md:text-xs">
                  <a href="">امکانات</a>
                </li>
                <li className="list-disc text-mini text-black dark:text-white md:text-xs">
                  <a href="">راه حل ها</a>
                </li>
                <li className="list-disc text-mini text-black dark:text-white md:text-xs">
                  <a href="" className="text-nowrap">
                    موارد استفاده
                  </a>
                </li>
                <li className="list-disc text-mini text-black dark:text-white md:text-xs">
                  <a href="">مخاطب‌ها</a>
                </li>
              </FooterLink>
              <div className="md:mx-auto md:flex lg:block">
                <FooterLink title="دسترسی سریع">
                  <li className="list-disc text-mini text-black dark:text-white md:text-xs">
                    <a href="">راه حل ها</a>
                  </li>
                  <li className="list-disc text-nowrap text-mini text-black dark:text-white md:text-xs">
                    <a href="">موارد استفاده</a>
                  </li>
                  <li className="list-disc text-mini text-black dark:text-white md:text-xs">
                    <a href="">مخاطب‌ها</a>
                  </li>
                  <li className="list-disc text-mini text-black dark:text-white md:text-xs">
                    <a href="">شرکت</a>
                  </li>
                </FooterLink>
              </div>
            </div>
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
          </div>
        </footer>
      </div>
      <p className="bg-white py-4 text-center text-mini text-black dark:bg-black dark:text-gray">
        © تمامی حقوق معنوی و حق نشر این اثر مربوط به شرکت A piece of AI است.
        طراحی شده توسط آژانس دیجیتال مارکتینگ ریسمان
      </p>
    </>
  );
}
