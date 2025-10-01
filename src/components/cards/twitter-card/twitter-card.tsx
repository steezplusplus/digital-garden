import { Bird } from 'lucide-react';

import GridItemLink from '@/components/grid/grid-item-link';

export default function TwitterCard() {
  return (
    <GridItemLink href="https://twitter.com/CodingSteez">
      <h2 className="mb-1 self-end text-lg group-hover:underline">Twitter</h2>
      <h3 className="self-end text-sm italic">CodingSteez</h3>
      <div className="mt-auto self-start">
        <Bird />
      </div>
    </GridItemLink>
  );
}
