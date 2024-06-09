import Image from "next/image";
import arrow from "/public/SVG/Arrow.svg";
import Link from "./link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
interface Props {
  src: StaticImport;
  title: string;
  date: string;
  description: string;
  className?: string;
}
export default function Essay({
  date,
  description,
  src,
  title,
  className,
}: Props) {
  return (
    <div
      className={`mt-6 items-center justify-center rounded-2xl border border-gray px-7 py-6 transition-colors hover:border-[#7D6CFF] lg:flex lg:flex-col ${className ?? ""}`}
    >
      <Image
        src={src}
        alt="Essay picture"
        className="h-[210px] w-[270px] rounded-2xl object-cover"
      />
      <div className="mt-11 flex flex-col">
        <div className="text-white">
          <p className="text-sm">{title}</p>
        </div>
        <div className="mb-9 mt-6 text-gray">
          <p className="text-xs">{date}</p>
          <p className="text-xs">{description}</p>
        </div>
        <div className="text-gray">
          <Link href="#" src={arrow} title="به خواندن ادامه دهید" />
        </div>
      </div>
    </div>
  );
}
