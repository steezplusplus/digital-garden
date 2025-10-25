import { Jukebox } from "./jukebox";

export default function JukeboxCard() {
  return (
    <div className="col-span-2 flex aspect-auto flex-col rounded-xl border border-stone-400 bg-white/50 p-4 dark:bg-indigo-100/5">
      <h2 className="mb-2 self-start text-lg">Listening to...</h2>
      <Jukebox />
      <h3 className="mt-1 self-end text-sm italic">LoFi</h3>
    </div>
  );
}