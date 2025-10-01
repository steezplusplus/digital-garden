import { CodeXml } from 'lucide-react';

import GridItemLink from '@/components/grid/grid-item-link';

export default function LeetCodeCard() {
  return (
    <GridItemLink href="https://leetcode.com/u/Steezplusplus/">
      <div className="mb-auto self-start">
        <CodeXml />
      </div>
      <h2 className="mb-1 self-end text-lg group-hover:underline">LeetCode</h2>
      <h3 className="self-end text-sm italic">Steezplusplus</h3>
    </GridItemLink>
  );
}
