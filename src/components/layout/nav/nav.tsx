import Link from 'next/link';

export function Nav() {
  return (
    <ul className="flex h-full items-center px-4 sm:px-6 lg:px-8">
      <li>
        <Link href="/">
          <h1 className="text-2xl">Jesse&apos;s Digital Garden</h1>
        </Link>
      </li>
    </ul>
  );
}
