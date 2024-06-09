import Image from "next/image";
import profile from "/public/Images/profile.png";
interface Props {
  className?: string;
}

export default function ClientOpinionBox({ className }: Props) {
  return (
    <div
      className={`${className ?? ""} mt-7 flex-col justify-between space-y-14 rounded-lg bg-dark-purple px-4 py-7 lg:mt-0 lg:flex`}
    >
      <p className="text-white lg:text-sm">
        بلاک‌چین هر روز مرا شگفت زده می کند. انسان های فوق‌العاده‌ای هستند
      </p>
      <div className="flex gap-4">
        <Image src={profile} alt="" width={58} height={58} />
        <div>
          <p className="text-xs text-white lg:text-xs">مهلا محمدی زاده</p>
          <p className="text-xs text-gray lg:text-xs">موسس تیم</p>
        </div>
      </div>
    </div>
  );
}
