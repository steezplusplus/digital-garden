import { ArrowDownIcon, ArrowUpIcon, ArrowRightIcon, ArrowLeftIcon } from "lucide-react";

export default function HomePage() {
  return (
    <div className="h-full grid grid-cols-3 grid-rows-3 p-4 sm:p-2 lg:p-6">
      <div />
      <div className="flex justify-center">
        <ArrowUpIcon />
      </div>
      <div />
      <div className="flex items-center">
        <ArrowLeftIcon />
      </div>
      <div className="relative flex justify-center items-center">
        <div className="absolute border-2 border-red-500 h-20 w-20 spin-xclockwise" />
        <div className="absolute border-2 border-emerald-500 h-20 w-20 spin-clockwise" />
        <p className="absolute">JB</p>
      </div>
      <div className="flex items-center justify-end">
        <ArrowRightIcon />
      </div>
      <div />
      <div className="flex items-end justify-center">
        <ArrowDownIcon />
      </div>
      <div />
    </div>
  );
}
