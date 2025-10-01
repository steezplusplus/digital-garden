import Link from 'next/link';
import { CodeXml } from 'lucide-react';

export const LEETCODE_HREF = 'https://leetcode.com/u/Steezplusplus/';

export default function LeetCodeCard() {
  return (
    <Link href={LEETCODE_HREF} target="_blank" rel="noopener noreferrer" className="group flex aspect-square flex-col p-4 rounded-xl border border-stone-400 bg-white/50 dark:bg-indigo-100/5">
      <div className="mb-auto self-start">
        <CodeXml />
      </div>
      <h2 className="mb-1 self-end text-lg group-hover:underline">LeetCode</h2>
      <h3 className="self-end text-sm italic">Steezplusplus</h3>
    </Link>
  );
}
