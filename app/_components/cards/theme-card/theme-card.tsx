import { ThemeSelect } from './theme-select/theme-select';

type ThemeCardProps = {
  label: string;
};

export function ThemeCard(props: ThemeCardProps) {
  const { label } = props;
  return (
    <div
      className="
        col-span-2 flex aspect-auto flex-col rounded-xl
        border border-stone-400 bg-white/50
        p-4 dark:bg-indigo-100/5
      "
    >
      <h2 className="mb-1 text-lg">{label}</h2>
      <ThemeSelect />
    </div>
  );
}
