'use client';
import { ThemeProvider as Provider } from 'next-themes';

type ProvidersProps = {
  children: React.ReactNode;
};

export function ThemeProvider(props: ProvidersProps) {
  const { children } = props;
  return <Provider attribute="class">{children}</Provider>;
}
