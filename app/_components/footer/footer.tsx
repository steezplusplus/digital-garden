import Link from 'next/link';

const githubRepoUrl = 'https://github.com/steezplusplus/Portfolio';

export function Footer() {
  return (
    <ul
      className="
        flex h-full flex-col items-center justify-center px-4 text-sm
        sm:flex-row sm:justify-between sm:px-6 lg:px-8
      "
    >
      <li>
        <p>&copy; Jesse Breuer-Penello. All rights reserverd.</p>
      </li>
      <li>
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
