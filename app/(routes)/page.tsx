import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  ArrowUpIcon,
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Jesse's Homepage",
};

export default function HomePage() {
  return (
    <div className="grid h-full grid-cols-3 p-4 sm:p-2 lg:p-6">
      <div className="flex flex-col items-start justify-center">
        <Link href="/about" className="inline-block">
          <div className="flex items-center">
            <ArrowLeftIcon />
            <span className="ml-1 text-lg">About</span>
          </div>
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="relative flex items-center justify-center">
          <span className="spin-xclockwise absolute h-12 w-12 border-2 border-red-500" />
          <span className="spin-clockwise absolute h-12 w-12 border-2 border-emerald-500" />
          <Link href="/" className="absolute">
            JB
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-end justify-center">
        <Link href="/projects" className="inline-block">
          <div className="flex items-center">
            <span className="mr-1 text-lg">Projects</span>
            <ArrowRightIcon />
          </div>
        </Link>
      </div>
    </div>
  );
}
