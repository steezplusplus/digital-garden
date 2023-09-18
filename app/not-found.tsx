import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="mb-1 text-lg">This page doesn&apos;t exist!</h2>
      <p className="text-sm">I&apos;m not sure how you got here.</p>
      <Link
        className="
          mt-6 text-2xl text-blue-900
          underline hover:text-blue-700
          dark:text-purple-400 dark:hover:text-purple-600
        "
        href="/"
      >
        Go back
      </Link>
    </div>
  );
}
