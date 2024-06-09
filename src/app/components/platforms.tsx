import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
interface Props {
  src: StaticImport;
}
export default function Platforms({ src }: Props) {
  return (
    <a className="flex w-fit items-center justify-center rounded-md bg-[#454546] p-[3.75px]">
      <Image src={src} alt="logo" />
    </a>
  );
}
