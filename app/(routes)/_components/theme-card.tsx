'use client';

import { useTheme } from 'next-themes';
import { Lightbulb } from 'lucide-react';

export function ThemeCard() {
  const { theme, setTheme } = useTheme();

  const label = 'Theme';
  const subLabel = theme === 'dark' ? 'Lights on' : 'Lights off';
  return (
    <div className="flex aspect-square flex-col rounded-xl border border-stone-400 p-4">
      <h2 className="mb-1 text-lg first-letter:text-2xl">{label}</h2>
      <h3 className="text-sm">{subLabel}</h3>
      <button
        className="my-auto rounded border px-2 py-1"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        Toggle
      </button>
      <Lightbulb className="mt-auto self-end" />
    </div>
  );
}
