import { ThemeSelect } from './theme-select/theme-select';

type ThemeCardProps = {
  label: string;
  subLabel?: string;
  icon: JSX.Element;
};

export function ThemeCard(props: ThemeCardProps) {
  const { label, subLabel, icon } = props;
  return (
    <div
      className="
        col-span-2 flex aspect-auto flex-col rounded-xl
        border border-stone-400 bg-white/50
        p-4 dark:bg-indigo-100/5
      "
    >
      <h2 className="mb-1 text-lg">{label}</h2>
      {subLabel && <h3 className="text-sm italic">{subLabel}</h3>}
      <ThemeSelect />
      <div className="mt-2 self-end">{icon}</div>
    </div>
  );
}
