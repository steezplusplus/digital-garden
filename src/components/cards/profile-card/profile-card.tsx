import Image from 'next/image';

export function ProfileCard() {
  return (
    <div className="bottom-0 aspect-auto self-start rounded-xl border border-stone-400 bg-white/50 p-4 sm:sticky sm:top-10 sm:aspect-square dark:bg-indigo-100/5">
      <div className="flex h-full flex-col items-center justify-center">
        <Image
          priority
          src="/primary.jpg"
          alt="A profile picture"
          width="128"
          height="128"
          className="aspect-auto h-32 w-32 rounded-full"
        />
        <figcaption className="text-b mt-2 text-center text-sm">Welcome to the garden.</figcaption>
      </div>
    </div>
  );
}
