import { SunDim } from 'lucide-react';

import { ThemeSelect } from '@/components/theme-select/theme-select';

export default function ThemeCard() {
  return (
    <div className="col-span-2 flex aspect-auto flex-col rounded-xl border border-stone-400 bg-white/50 p-4 dark:bg-indigo-100/5">
      <h2 className="mb-2 self-end text-lg">Theme</h2>
      <div className="self-center">
        <ThemeSelect />
      </div>
      <div className="mt-1 self-start">
        <SunDim aria-hidden="true" />
      </div>
    </div>
  );
}
