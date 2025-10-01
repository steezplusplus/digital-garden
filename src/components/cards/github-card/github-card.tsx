import { GitBranch } from 'lucide-react';

import GridItemLink from '@/components/grid/grid-item-link';

export default function GitHubCard() {
  return (
    <GridItemLink href="https://github.com/steezplusplus">
      <h2 className="mb-1 text-lg group-hover:underline">GitHub</h2>
      <h3 className="text-sm italic">SteezPlusPlus</h3>
      <div className="mt-auto self-end">
        <GitBranch />
      </div>
    </GridItemLink>
  );
}
