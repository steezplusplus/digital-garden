import { CodeXml } from 'lucide-react';

import GridItemLink from '@/components/grid/grid-item-link';

export const LEETCODE_HREF = 'https://leetcode.com/u/Steezplusplus/';

export default function LeetCodeCard() {
  return (
    <GridItemLink href={LEETCODE_HREF}>
      <div className="mb-auto self-start">
        <CodeXml />
      </div>
      <h2 className="mb-1 self-end text-lg group-hover:underline">LeetCode</h2>
      <h3 className="self-end text-sm italic">Steezplusplus</h3>
    </GridItemLink>
  );
}
