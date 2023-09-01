import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  ArrowUpIcon,
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Jesse's Portfolio | Homepage",
};

export default function HomePage() {
  return (
    <div className="grid h-full grid-cols-3 p-4 sm:p-2 lg:p-6">
      <div className="flex flex-col items-start justify-center">
        <Link href="/" className="inline-block">
          <ArrowLeftIcon />
        </Link>
      </div>

      <div className="flex flex-col items-center justify-between ">
        <Link href="/" className="inline-block">
          <ArrowUpIcon />
        </Link>

        <div className="relative flex items-center justify-center">
          <span className="spin-xclockwise absolute h-12 w-12 border-2 border-red-500" />
          <span className="spin-clockwise absolute h-12 w-12 border-2 border-emerald-500" />
          <Link href="/" className="absolute">
            JB
          </Link>
        </div>

        <Link href="/about" className="inline-block">
          <div className="flex flex-col items-center">
            <span className="text-lg">About</span>
            <ArrowDownIcon />
          </div>
        </Link>
      </div>

      <div className="flex flex-col items-end justify-center">
        <Link href="/" className="inline-block">
          <ArrowRightIcon />
        </Link>
      </div>
    </div>
  );
}
