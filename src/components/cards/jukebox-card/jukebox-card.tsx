import { Music } from "lucide-react";

export default function JukeboxCard() {
  return (
    <div className="col-span-2 flex aspect-auto flex-col rounded-xl border border-stone-400 bg-white/50 p-4 dark:bg-indigo-100/5">
      <h2 className="mb-1 text-lg">Jukebox</h2>
      <div className="my-auto flex justify-center">
        <>mp4 player</>
      </div>
      <div className="self-end text-sm italic">
        <Music aria-hidden />
      </div>
    </div>
  );
}