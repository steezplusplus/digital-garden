export function ProfileCard() {
  return (
    <div
      className="
        bottom-0 aspect-auto self-start
        rounded-xl border border-stone-400  p-4 
        sm:sticky sm:top-0 sm:aspect-square
      "
    >
      <div className="flex h-full flex-col items-center justify-center">
        <h2 className="text-xl">Asset</h2>
        <h2 className="text-xl">Welcome to my digital garden</h2>
      </div>
    </div>
  );
}
