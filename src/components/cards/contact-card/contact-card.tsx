import Link from 'next/link';

import { Mail } from 'lucide-react';

export const MAILTO_HREF = 'mailto:PenelloJ2@gmail.com';

export default function ContactCard() {
  return (
    <Link
      href={MAILTO_HREF}
      target="_blank"
      className="group flex aspect-square flex-col rounded-xl border border-stone-400 bg-white/50 p-4 dark:bg-indigo-100/5"
    >
      <div className="mb-auto self-start">
        <Mail aria-hidden />
      </div>
      <h2 className="mb-1 self-end text-lg group-hover:underline">Contact</h2>
      <h3 className="self-end text-sm italic">Email me</h3>
    </Link>
  );
}
