import Image from "next/image";
import Link from "next/link";

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
          <ThemeCard />
          <SupportCard />
        </Grid>
      </Grid>
    </section>
  );
}

function FeaturedCard() {
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

function ThemeCard() {
  return (
    <div className="flex flex-col rounded-xl border border-stone-400 bg-white/50 p-4 dark:bg-indigo-100/5">
      <h2 className="mb-1 self-end text-lg">Theme</h2>
      <div className="my-auto flex justify-center">
        <select className="rounded-md border border-slate-400 p-2 text-xs">
          <option>System</option>
          <option>Light</option>
          <option>Dark</option>
        </select>
      </div>
      <div className="self-start text-sm italic">x</div>
    </div>
  );
}

function SupportCard() {
  return (
    <Grid.Item>
      <Link
        href="https://ko-fi.com/W7W5PB4J9"
        target="_blank"
        className="group flex flex-col"
      >
        <h2 className="mb-1 text-lg group-hover:underline">Support me!</h2>
        <div className="mt-2 self-center">x</div>
        <h3 className="self-end text-sm italic">Buy me a coffee</h3>
      </Link>
    </Grid.Item>
  );
}