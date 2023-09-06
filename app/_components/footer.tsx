import { Github } from 'lucide-react';
import Link from 'next/link';

const githubProfileUrl = 'https://github.com/steezplusplus';
const githubRepoUrl = 'https://github.com/steezplusplus/Portfolio';

export function Footer() {
  return (
    <ul className="flex h-full items-center px-4 text-sm sm:px-6 lg:px-8">
      <li>
        <ul className="flex flex-col gap-2">
          <li>
            <p>
              <span className="mr-1">&copy;</span>Jesse Breuer-Penello. All
              rights reserverd.
            </p>
          </li>
          <li>
            <Link
              className="flex items-center text-blue-500 underline hover:text-blue-300"
              href={githubProfileUrl}
              target="_blank"
            >
              <Github size={16} className="mr-1" />
              SteezPlusPlus
            </Link>
          </li>
        </ul>
      </li>
      <li className="ml-auto">
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
