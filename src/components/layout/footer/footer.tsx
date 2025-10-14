import Link from 'next/link';

export const githubRepoUrl = 'https://github.com/steezplusplus/digital-garden';
export const unlicenseUrl = 'https://unlicense.org';

export function Footer() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
      <div className="flex items-center justify-center gap-3 text-sm">
        <Link
          href={unlicenseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Unlicensed
        </Link>
        <span>/</span>
        <Link
          href={githubRepoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Source
        </Link>
      </div>
    </div>
  );
}
