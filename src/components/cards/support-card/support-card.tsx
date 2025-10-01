import Link from 'next/link';
import { Coffee } from 'lucide-react';

import Grid from '@/components/grid';

export const SUPPORT_HREF = 'https://ko-fi.com/W7W5PB4J9';

export default function SupportCard() {
  return (
    <Grid.Item>
      <Link href={SUPPORT_HREF} target="_blank" className="group flex flex-col p-4">
        <h2 className="mb-1 text-lg group-hover:underline">Support me!</h2>
        <div className="mt-2 self-center">
          <Coffee />
        </div>
        <h3 className="self-end text-sm italic">Buy me a coffee</h3>
      </Link>
    </Grid.Item>
  );
}
