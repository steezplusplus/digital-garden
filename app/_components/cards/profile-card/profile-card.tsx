import Image from 'next/image';

export function ProfileCard() {
  return (
    <div
      className="
        bottom-0 aspect-auto self-start
        rounded-xl border border-stone-400 bg-white/50 p-4
        dark:bg-indigo-100/5 sm:sticky sm:top-10
        sm:aspect-square
      "
    >
      <div className="flex h-full flex-col items-center justify-center">
        <Image
          src="/primary.jpg"
          alt="A profile picture"
          width="128"
          height="128"
          className="h-32 w-32 rounded-full duration-200 dark:grayscale dark:hover:grayscale-0"
        />
        <figcaption className="mt-2 text-center text-sm">Welcome to my digital garden</figcaption>
      </div>
    </div>
  );
}
