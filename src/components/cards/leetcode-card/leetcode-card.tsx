import Link from 'next/link';
import { CodeXml } from 'lucide-react';

export const LEETCODE_HREF = 'https://leetcode.com/u/Steezplusplus/';

export default function LeetCodeCard() {
  return (
    <Link
      href={LEETCODE_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className="group col-span-2 flex aspect-auto flex-col rounded-xl border border-stone-400 bg-white/50 p-4 dark:bg-indigo-100/5"
    >
      <h2 className="mb-2 self-start text-lg group-hover:underline">LeetCode</h2>
      <div className="self-center text-sm italic">Over 200 problems solved</div>
      <div className="mt-1 self-end">
        <CodeXml aria-hidden="true" />
      </div>
    </Link>
  );
}
