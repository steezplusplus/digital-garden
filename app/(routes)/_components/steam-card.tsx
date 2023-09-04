import Link from 'next/link';
import { Gamepad2 } from 'lucide-react';

export function SteamCard() {
  const label = 'Playing...';
  const href = '';
  return (
    <Link
      href={href}
      target="_blank"
      className="flex aspect-square flex-col rounded-xl border border-stone-400 p-4"
    >
      <h2 className="mb-1 text-lg first-letter:text-2xl">{label}</h2>
      <h3 className="text-sm">Some game</h3>
      <Gamepad2 className="mt-auto self-end" />
    </Link>
  );
}
