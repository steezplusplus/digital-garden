'use client';

import { useTheme } from 'next-themes';

export function ThemeSelect() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="my-auto flex justify-center">
      <select
        className="rounded-md border border-slate-400 p-2 text-xs"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
    </div>
  );
}
