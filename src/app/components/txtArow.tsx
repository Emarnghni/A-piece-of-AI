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
    </div>
  );
}
