import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ReactElement } from "react";
interface Props {
  src: StaticImport;
  text?: string;
  children?: ReactElement
}
export default function ContactUs({ src, text,children }: Props) {
  return (
    <div className="flex items-center gap-4">
      <Image src={src} alt="" />
      {children ?? <p className="text-xs font-normal lg:text-sm">{text}</p>}
    </div>
  );
}
