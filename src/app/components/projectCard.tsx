import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "./link";

interface Props {
  title: string;
  description: string;
  href: string;
  linkTitle: string;
  src: StaticImport;
}
export default function ProjectCard({
  title,
  description,
  href,
  linkTitle,
  src,
}: Props) {
  return (
    <div className="w-full rounded-2xl border border-gray p-7 hover:border-pink">
      <div className="banner flex h-[350px] w-full flex-col justify-end rounded-2xl p-3 lg:h-[250px]">
        <p className="mb-6 text-sm font-normal text-white">{title}</p>
        <div className="grid grid-rows-[0fr] overflow-hidden transition-all">
          <p className="min-h-0 text-xs font-normal text-white">
            {description}
          </p>
        </div>
        <Link src={src} className="text-gray" title={linkTitle} href={href} />
      </div>
    </div>
  );
}
