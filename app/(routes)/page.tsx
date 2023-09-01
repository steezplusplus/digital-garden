import Link from 'next/link';
import { ArrowDownIcon, ArrowRightIcon, ArrowLeftIcon, ArrowUpIcon } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="h-full grid grid-cols-3 p-4 sm:p-2 lg:p-6">
      <div className="flex flex-col justify-center items-start">
        <Link href="/" className="inline-block">
          <ArrowLeftIcon />
        </Link>
      </div>

      <div className="flex flex-col items-center justify-between ">
        <Link href="/" className="inline-block">
          <ArrowUpIcon />
        </Link>

        <div className="relative flex justify-center items-center">
          <span className="absolute border-2 border-red-500 h-12 w-12 spin-xclockwise" />
          <span className="absolute border-2 border-emerald-500 h-12 w-12 spin-clockwise" />
          <Link href="/" className="absolute">JB</Link>
        </div>

        <Link href="/" className="inline-block">
          <ArrowDownIcon />
        </Link>
      </div>

      <div className="flex flex-col justify-center items-end">
        <Link href="/" className="inline-block">
          <ArrowRightIcon />
        </Link>
      </div>
    </div>
  );
}
