import { User } from 'lucide-react';

import GridItemLink from '@/components/grid/grid-item-link';

export const LINKEDIN_HREF = 'https://www.linkedin.com/in/jesse-bp/';

export default function LinkedInCard() {
  return (
    <GridItemLink href={LINKEDIN_HREF}>
      <div className="mb-auto self-end">
        <User />
      </div>
      <h2 className="mb-1 text-lg group-hover:underline">LinkedIn</h2>
      <h3 className="text-sm italic">in/jesse-bp</h3>
    </GridItemLink>
  );
}
