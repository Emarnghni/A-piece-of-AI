import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}
const FooterLink = ({ title, children }: Props) => {
  return (
    <div className="flex w-1/2 flex-col items-start gap-5">
      <h3 className="text-nowrap text-xs font-medium text-white md:text-sm lg:text-base">
        {title}
      </h3>
      <ul className="space-y-8 px-4">{children}</ul>
    </div>
  );
};
export default FooterLink;
