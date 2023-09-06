import { ThemeSwitcher } from './theme-switcher';

export function ThemeCard() {
  const label = 'Theme';
  return (
    <div className="col-span-2 flex aspect-auto flex-col rounded-xl border border-stone-400 p-4">
      <h2 className="mb-1 text-lg first-letter:text-2xl">{label}</h2>
      <ThemeSwitcher />
    </div>
  );
}
