import Link from 'next/link';
import { GitBranch } from 'lucide-react';

export const GITHUB_HREF = 'https://github.com/steezplusplus';

export default function GitHubCard() {
  return (
    <Link href={GITHUB_HREF} target="_blank" rel="noopener noreferrer" className="group flex aspect-square flex-col p-4 rounded-xl border border-stone-400 bg-white/50 dark:bg-indigo-100/5">
      <h2 className="mb-1 text-lg group-hover:underline">GitHub</h2>
      <h3 className="text-sm italic">SteezPlusPlus</h3>
      <div className="mt-auto self-end">
        <GitBranch aria-hidden="true"/>
      </div>
    </Link>
  );
}
