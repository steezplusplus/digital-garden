import Link from 'next/link';

export function Nav() {
  return (
    <nav className="flex h-full items-center px-4 sm:px-6 lg:px-8">
      <Link href="/">
        <h1 className="text-2xl">Jesse&apos;s Digital Garden</h1>
      </Link>
      <div className="ml-auto flex items-center gap-4">
        <a href="#projects" className="hover:underline">
          Projects
        </a>
        <a href="#about" className="hover:underline">
          About
        </a>
      </div>
    </nav>
  );
}
