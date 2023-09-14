import { Audio } from './audio';

type MusicCardProps = {
  label: string;
  subLabel?: string;
  icon: JSX.Element;
};

export function MusicCard(props: MusicCardProps) {
  const { label, subLabel, icon } = props;
  return (
    <div
      className="
        col-span-2 flex aspect-auto flex-col rounded-xl
        border border-stone-400 bg-white/50
        p-4 dark:bg-indigo-100/5
      "
    >
      <h2 className="mb-1 self-end text-lg">{label}</h2>
      {subLabel && <h3 className="self-end text-sm italic">{subLabel}</h3>}
      <Audio songPath="/song.mp3" />
      <div className="mt-auto">{icon}</div>
    </div>
  );
}
