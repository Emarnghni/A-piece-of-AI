interface Props {
  className?: string;
}
export default function Pulse({ className }: Props) {
  return (
    <span className={`${className ?? ""} animate-pulse rounded-full`}></span>
  );
}
