import Link from 'next/link';
import { Twitter } from 'lucide-react';

export function TwitterCard() {
  const label = 'Twitter';
  const href = 'https://twitter.com/CodingSteez';
  return (
    <Link
      href={href}
      target="_blank"
      className="flex aspect-square flex-col rounded-xl border border-stone-400 p-4"
    >
      <h2 className="mb-1 self-end text-lg first-letter:text-2xl">{label}</h2>
      <h3 className="self-end text-sm">@CodingSteez</h3>
      <Twitter className="mt-auto self-start" />
    </Link>
  );
}
