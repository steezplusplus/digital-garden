import Link from 'next/link';
import { CodeXml } from 'lucide-react';

export const LEETCODE_HREF = 'https://leetcode.com/u/Steezplusplus/';

export default function LeetCodeCard() {
  return (
    <Link
      href={LEETCODE_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex aspect-square flex-col rounded-xl border border-stone-400 bg-white/50 p-4 dark:bg-indigo-100/5"
    >
      <div className="mb-auto self-start">
        <CodeXml aria-hidden="true" />
      </div>
      <h2 className="mb-1 self-end text-lg group-hover:underline">LeetCode</h2>
      <h3 className="self-end text-sm italic">SteezPlusPlus</h3>
    </Link>
  );
}
