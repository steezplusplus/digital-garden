import { Lightbulb } from 'lucide-react';
import { ThemeSwitcher } from './theme-switcher';

export function ThemeCard() {
  const label = 'Theme';
  return (
    <div className="flex aspect-square flex-col rounded-xl border border-stone-400 p-4">
      <h2 className="mb-1 text-lg first-letter:text-2xl">{label}</h2>
      <div className="my-auto flex justify-center">
        <ThemeSwitcher />
      </div>
      <Lightbulb className="mt-auto self-end" />
    </div>
  );
}