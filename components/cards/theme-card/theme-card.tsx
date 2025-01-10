import { ThemeSelect } from './theme-select/theme-select';

import type { JSX } from 'react';

type ThemeCardProps = {
  label: string;
  icon: JSX.Element;
};

export function ThemeCard(props: ThemeCardProps) {
  const { label, icon } = props;
  return (
    <div className="col-span-2 flex aspect-auto flex-col rounded-xl border border-stone-400 bg-white/50 p-4 dark:bg-indigo-100/5">
      <h2 className="mb-1 self-end text-lg">{label}</h2>
      <ThemeSelect />
      <div className="self-start text-sm italic">{icon}</div>
    </div>
  );
}
