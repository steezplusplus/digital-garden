import Link from 'next/link';

import type { JSX } from 'react';

type TwitterCardProps = {
  href: string;
  label: string;
  subLabel: string;
  icon: JSX.Element;
};

export function TwitterCard(props: TwitterCardProps) {
  const { href, label, subLabel, icon } = props;
  return (
    <Link
      href={href}
      target="_blank"
      className="group flex aspect-square flex-col rounded-xl border border-stone-400 bg-white/50 p-4 dark:bg-indigo-100/5"
    >
      <h2 className="mb-1 self-end text-lg group-hover:underline">{label}</h2>
      <h3 className="self-end text-sm italic">{subLabel}</h3>
      <div className="mt-auto self-start">{icon}</div>
    </Link>
  );
}
