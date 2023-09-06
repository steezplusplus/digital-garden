'use client';

import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

type ProvidersProps = {
  children: React.ReactNode;
};

export function Providers(props: ProvidersProps) {
  const { children } = props;
  const [mounted, setMounted] = useState<boolean>(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      {children}
    </ThemeProvider>
  );
}
