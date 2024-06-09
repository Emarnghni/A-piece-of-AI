import Image from "next/image";
import arrow from "/public/SVG/Arrow white.svg";
import Pulse from "./pulse";
interface Props {
  title: string;
  isPulse: boolean;
}
export default function TxtArow({ title, isPulse }: Props) {
  return (
    <div className="flex justify-between">
      <div className={`${isPulse ? "flex items-center gap-x-4" : ""}`}>
        {isPulse ? <Pulse className="hidden lg:block" /> : <></>}
        <p className="text-sm text-white lg:text-lg">{title}</p>
      </div>
      <div className={`flex gap-4 ${isPulse ? "" : "hidden"}`}>
        <Image className="rotate-180" src={arrow} alt="arrow" />
        <Image src={arrow} alt="arrow" />
      </div>
    </div>
  );
}
