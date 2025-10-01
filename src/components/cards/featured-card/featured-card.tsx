import Image from 'next/image';

import Grid from '@/components/grid';

export default function FeaturedCard() {
  return (
    <Grid.Item className="aspect-square self-start sm:sticky sm:top-10">
      <div className="flex h-full flex-col items-center justify-center">
        <Image
          priority
          src="/primary.jpg"
          alt="A profile picture"
          width="128"
          height="128"
          className="aspect-auto h-32 w-32 rounded-full"
        />
        <p className="text-b mt-2 text-center text-sm">Welcome to the garden.</p>
      </div>
    </Grid.Item>
  );
}
