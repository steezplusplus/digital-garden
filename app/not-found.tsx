import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="mb-1 text-lg">This page doesn&apos;t exist!</h2>
      <p className="text-sm">I&apos;m not sure how you got here.</p>
      <Link
        className="mt-6 text-2xl text-blue-500 underline hover:text-blue-300"
        href="/"
      >
        Go back
      </Link>
    </div>
  );
}
