'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    setIsDark(theme === 'dark');
  }, [theme]);

  if (!mounted) {
    return null;
  }

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      aria-pressed={isDark}
      onClick={toggleDarkMode}
      className="rounded border border-stone-400 px-3 py-2 text-sm"
    >
      Toggle
    </button>
  );
}
