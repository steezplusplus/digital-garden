import Link from 'next/link';
import { Bird, CodeXml, Coffee, GitBranch, User } from 'lucide-react';

import Grid from '@/components/grid';
import GridItemLink from '@/components/grid/grid-item-link';
import FeaturedCard from '@/components/cards/featured-card/featured-card';
import ThemeCard from '@/components/cards/theme-card/theme-card';

export default function GallerySection() {
  return (
    <section aria-label="Gallery of things">
      <Grid className="grid-cols-1 sm:grid-cols-2">
        <FeaturedCard />
        <Grid className="grid-cols-1">
          <Grid className="grid-cols-2">
            <TopLeftCard />
            <TopRightCard />
            <BottomLeftCard />
            <BottomRightCard />
          </Grid>
          <ThemeCard />
          <SupportCard />
        </Grid>
      </Grid>
    </section>
  );
}

function TopLeftCard() {
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

function TopRightCard() {
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

function BottomLeftCard() {
  return (
    <GridItemLink href="https://www.linkedin.com/in/jesse-bp/">
      <div className="mb-auto self-end">
        <User />
      </div>
      <h2 className="mb-1 text-lg group-hover:underline">LinkedIn</h2>
      <h3 className="text-sm italic">in/jesse-bp</h3>
    </GridItemLink>
  );
}

function BottomRightCard() {
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

function SupportCard() {
  return (
    <Grid.Item>
      <Link href="https://ko-fi.com/W7W5PB4J9" target="_blank" className="group flex flex-col">
        <h2 className="mb-1 text-lg group-hover:underline">Support me!</h2>
        <div className="mt-2 self-center">
          <Coffee />
        </div>
        <h3 className="self-end text-sm italic">Buy me a coffee</h3>
      </Link>
    </Grid.Item>
  );
}
