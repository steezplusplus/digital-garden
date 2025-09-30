import Image from "next/image";

import Grid from "app/new/_components/grid";
import GridItemLink from "app/new/_components/grid/grid-item-link";


export default function GallerySection() {
  return (
    <section aria-labelledby='Gallery of things'>
      <Grid className='grid-cols-1 sm:grid-cols-2'>
        <FeaturedCard />
        <Grid className='grid-cols-1'>
          <Grid className='grid-cols-2'>
            <TopLeftCard />
            <TopRightCard />
            <BottomLeftCard />
            <BottomRightCard />
          </Grid>
          <Grid.Item>Theme</Grid.Item>
          <Grid.Item>Support Me</Grid.Item>
        </Grid>
      </Grid>
    </section>
  );
}

export function FeaturedCard() {
  return (
    <Grid.Item className='sm:sticky sm:top-10 self-start aspect-square'>
      <div className="flex h-full flex-col items-center justify-center">
        <Image
          priority
          src="/primary.jpg"
          alt="A profile picture"
          width="128"
          height="128"
          className="aspect-auto h-32 w-32 rounded-full"
        />
        <figcaption className="text-b mt-2 text-center text-sm">Welcome to the garden.</figcaption>
      </div>
    </Grid.Item>
  );
}

function TopLeftCard() {
  return (
    <GridItemLink href="https://github.com/steezplusplus"
    >
      <h2 className="mb-1 text-lg group-hover:underline">GitHub</h2>
      <h3 className="text-sm italic">SteezPlusPlus</h3>
      <div className="mt-auto self-end">x</div>
    </GridItemLink>
  );
}

function TopRightCard() {
  return (
    <GridItemLink
      href="https://twitter.com/CodingSteez"
    >
      <h2 className="mb-1 self-end text-lg group-hover:underline">Twitter</h2>
      <h3 className="self-end text-sm italic">CodingSteez</h3>
      <div className="mt-auto self-start">x</div>
    </GridItemLink>
  );
}

function BottomLeftCard() {
  return (
    <GridItemLink
      href="https://www.linkedin.com/in/jesse-bp/"
    >
      <div className="mb-auto self-end">x</div>
      <h2 className="mb-1 text-lg group-hover:underline">LinkedIn</h2>
      <h3 className="text-sm italic">in/jesse-bp</h3>
    </GridItemLink>
  );
}

function BottomRightCard() {
  return (
    <GridItemLink
      href="https://leetcode.com/u/Steezplusplus/"
    >
      <div className="mb-auto self-start">x</div>
      <h2 className="mb-1 self-end text-lg group-hover:underline">LeetCode</h2>
      <h3 className="self-end text-sm italic">Steezplusplus</h3>
    </GridItemLink>
  );
}