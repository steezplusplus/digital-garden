import Link from 'next/link';
import { Linkedin } from 'lucide-react';

export function LinkedInCard() {
  const label = 'LinkedIn';
  const href = 'https://www.linkedin.com/in/jesse-bp/';
  return (
    <Link
      href={href}
      target="_blank"
      className="flex aspect-square flex-col rounded-xl border border-stone-400 bg-white/50 p-4 dark:bg-indigo-100/5"
    >
      <Linkedin className="mb-auto self-end" />
      <h2 className="mb-1 text-lg first-letter:text-2xl">{label}</h2>
      <h3 className="text-sm">in/jesse-bp</h3>
    </Link>
  );
}
