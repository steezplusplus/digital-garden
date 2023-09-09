import Image from 'next/image';

export function ProfileCard() {
  return (
    <div
      className="
        bottom-0 aspect-auto self-start
        rounded-xl border border-stone-400 p-4 
        sm:sticky sm:top-0 sm:aspect-square
      "
    >
      <div className="flex h-full flex-col items-center justify-center">
        <Image
          src="/primary.jpg"
          alt="A profile picture"
          width="64"
          height="64"
          className="h-16 w-16 rounded-full grayscale duration-200 hover:grayscale-0"
        />
        <figcaption className="mt-2 text-center text-sm">
          Welcome to my digital garden
        </figcaption>
      </div>
    </div>
  );
}
