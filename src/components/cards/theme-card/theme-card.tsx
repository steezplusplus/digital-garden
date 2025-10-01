import { SunDim } from 'lucide-react';

import { ThemeSelect } from '@/components/theme-select/theme-select';

export default function ThemeCard() {
  return (
    <div className="col-span-2 flex aspect-auto flex-col rounded-xl border border-stone-400 bg-white/50 p-4 dark:bg-indigo-100/5">
      <h2 className="mb-1 self-end text-lg">Theme</h2>
      <div className="my-auto flex justify-center">
        <ThemeSelect />
      </div>
      <div className="self-start text-sm italic">
        <SunDim />
      </div>
    </div>
  );
}
