import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Jesse's Homepage",
};

export default async function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-screen-lg flex-col gap-10 py-10">
      <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-2">
        <div className="sticky top-0 aspect-square rounded-xl border p-4">
          <h2 className="text-xl">Asset</h2>
          <h2 className="text-xl">Name</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-square rounded-xl border p-4">Github Link</div>
          <div className="aspect-square rounded-xl border p-4">Twitter</div>
          <div className="aspect-square rounded-xl border p-4">LinkedIn</div>
          <div className="aspect-square rounded-xl border p-4">Spotify API</div>
          <div className="aspect-square rounded-xl border p-4">Steam API</div>
          <div className="aspect-square rounded-xl border p-4">Email</div>
        </div>
      </div>
      <div>
        <h2 className="text-3xl">What Im building</h2>
        <div className="grid grid-cols-1 gap-8">
          <div className="rounded-xl border px-4 py-48">Project 1</div>
          <div className="rounded-xl border px-4 py-48">Project 2</div>
          <div className="rounded-xl border px-4 py-48">Project 3</div>
        </div>
      </div>
      <div>
        <h2 className="text-3xl">Older works</h2>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="aspect-square rounded-xl border p-4">Project 1</div>
          <div className="aspect-square rounded-xl border p-4">Project 2</div>
          <div className="aspect-square rounded-xl border p-4">Project 3</div>
          <div className="aspect-square rounded-xl border p-4">Project 1</div>
          <div className="aspect-square rounded-xl border p-4">Project 2</div>
          <div className="aspect-square rounded-xl border p-4">Project 3</div>
        </div>
      </div>
    </div>
  );
}
