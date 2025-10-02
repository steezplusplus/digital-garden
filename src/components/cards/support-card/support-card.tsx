import Link from 'next/link';
import { Coffee } from 'lucide-react';

export const SUPPORT_HREF = 'https://ko-fi.com/W7W5PB4J9';

export default function SupportCard() {
  return (
    <Link
      href={SUPPORT_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className="group col-span-2 flex aspect-auto flex-col rounded-xl border border-stone-400 bg-white/50 p-4 dark:bg-indigo-100/5"
    >
      <h2 className="mb-1 text-lg group-hover:underline">Support me!</h2>
      <div className="mt-2 self-center">
        <Coffee aria-hidden="true" />
      </div>
      <h3 className="self-end text-sm italic">Buy me a coffee</h3>
    </Link>
  );
}
