import Link from 'next/link';
import { Bird } from 'lucide-react';

export const TWITTER_HREF = 'https://twitter.com/CodingSteez';

export default function TwitterCard() {
  return (
    <Link href={TWITTER_HREF} target="_blank" rel="noopener noreferrer" className="group flex aspect-square flex-col p-4 rounded-xl border border-stone-400 bg-white/50 dark:bg-indigo-100/5">
      <h2 className="mb-1 self-end text-lg group-hover:underline">Twitter</h2>
      <h3 className="self-end text-sm italic">CodingSteez</h3>
      <div className="mt-auto self-start">
        <Bird />
      </div>
    </Link>
  );
}
