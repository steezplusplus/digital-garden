import Link from 'next/link';

const githubRepoUrl = 'https://github.com/steezplusplus/Portfolio';

export function Footer() {
  return (
    <ul className="grid h-full grid-cols-1 px-4 text-xs sm:grid-cols-2 sm:px-6 lg:px-8">
      <li className="flex items-center">
        <p>
          <span className="mr-1">&copy;</span>Jesse Breuer-Penello. All rights
          reserverd.
        </p>
      </li>
      <li className="flex items-center">
        <Link
          className="text-blue-500 underline hover:text-blue-300"
          href={githubRepoUrl}
          target="_blank"
        >
          View source code
        </Link>
      </li>
    </ul>
  );
}
