import Image from "next/image";
interface Props {
  src: any;
  title: string;
  description: string;
}
export default function Features({ src, title, description }: Props) {
  return (
    <div className=" flex flex-col gap-y-3">
      <div className="flex gap-4">
        <Image src={src} alt="logo" />
        <h3 className="text-xs font-medium text-black dark:text-white lg:text-base">
          {title}
        </h3>
      </div>
      <div>
        <p className="text-xs font-normal text-black dark:text-white lg:text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}
