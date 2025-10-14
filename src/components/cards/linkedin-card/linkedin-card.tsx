import Link from 'next/link';

import { User } from 'lucide-react';

export const LINKEDIN_HREF = 'https://www.linkedin.com/in/jesse-bp/';

export default function LinkedInCard() {
  return (
    <Link
      href={LINKEDIN_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex aspect-square flex-col rounded-xl border border-stone-400 bg-white/50 p-4 dark:bg-indigo-100/5"
    >
      <div className="mb-auto self-end">
        <User aria-hidden="true" />
      </div>
      <h2 className="mb-1 text-lg group-hover:underline">LinkedIn</h2>
      <h3 className="text-sm italic">in/jesse-bp</h3>
    </Link>
  );
}
