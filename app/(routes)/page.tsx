import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Jesse's Homepage",
};

export default function HomePage() {
  return (
    <div className="h-full snap-y snap-mandatory overflow-scroll">
      <div className="flex h-full w-full snap-start items-center justify-center bg-amber-200 text-8xl">
        1
      </div>
      <div className="flex h-full w-full  snap-start items-center justify-center bg-teal-200 text-8xl">
        2
      </div>
      <div className="flex h-full w-full snap-start items-center justify-center bg-cyan-200 text-8xl">
        3
      </div>
      <div className="flex h-full w-full snap-start items-center justify-center bg-fuchsia-200 text-8xl">
        4
      </div>
    </div>
  );
}
