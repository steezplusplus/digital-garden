import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Jesse's Homepage",
};

export default async function HomePage() {
  return (
    <div className="h-full snap-y snap-mandatory overflow-scroll">
      <div className="flex h-full w-full snap-start items-center justify-center bg-amber-200">
        <h2 className="text-2xl">Ecommerce Admin</h2>
      </div>
      <div className="flex h-full w-full  snap-start items-center justify-center bg-cyan-200">
        <h2 className="text-2xl">Ecommerce Store</h2>
      </div>
      <div className="flex h-full w-full snap-start items-center justify-center bg-fuchsia-200">
        <h2 className="text-2xl">Accessible Web Components</h2>
      </div>
      <div className="flex h-full w-full snap-start items-center justify-center bg-teal-200">
        <h2 className="text-2xl">Chirp Chirp</h2>
      </div>
    </div>
  );
}
