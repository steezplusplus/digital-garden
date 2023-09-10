import Link from 'next/link';
import { Github } from 'lucide-react';

export function GithubCard() {
  const label = 'Github';
  const href = 'https://github.com/steezplusplus';
  return (
    <Link
      href={href}
      target="_blank"
      className="flex aspect-square flex-col rounded-xl border border-stone-400 bg-white/50 p-4 dark:bg-indigo-100/5"
    >
      <h2 className="mb-1 text-lg">{label}</h2>
      <h3 className="font-italic text-sm">SteezPlusPlus</h3>
      <Github className="mt-auto self-end" />
    </Link>
  );
}
