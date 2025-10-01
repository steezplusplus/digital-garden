import Link from 'next/link';

const githubRepoUrl = 'https://github.com/steezplusplus/digital-garden';

export function Footer() {
  return (
    <ul className="flex h-full flex-col items-center justify-center px-4 text-sm sm:flex-row sm:justify-between sm:px-6 lg:px-8">
      <li>
        <p>&copy; Jesse Breuer-Penello. All rights reserved.</p>
      </li>
      <li>
        <Link
          className="mt-6 text-blue-700 underline hover:text-blue-900 dark:text-purple-400 dark:hover:text-purple-600"
          href={githubRepoUrl}
          target="_blank"
        >
          View source code
        </Link>
      </li>
    </ul>
  );
}
