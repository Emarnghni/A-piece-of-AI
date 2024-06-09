import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
type Props = {
  href: string;
  title: string;
  className?: string;
  src: StaticImport;
};
export default function Link({ href, title, className, src }: Props) {
  return (
    <a
      href={href}
      className={`flex justify-end gap-3 ${className ?? ''}`}
    >
      <p className='text-xs'>{title}</p>
      <Image
        src={src}
        alt='arrow'
      />
    </a>
  );
}
