import Link from 'next/link';
import { Mail } from 'lucide-react';

export function EmailCard() {
  const label = 'Hire me';
  const subLael = 'Send me an e-mail';
  const href = 'mailto::';

  return (
    <Link
      href={href}
      target="_blank"
      className="flex aspect-square flex-col rounded-xl border border-stone-400 bg-white/50 p-4 dark:bg-indigo-100/5"
    >
      <Mail className="mb-auto self-start" />
      <h2 className="mb-1 self-end text-lg">{label}</h2>
      <h3 className="font-italic self-end text-sm">{subLael}</h3>
    </Link>
  );
}
