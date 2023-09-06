'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto my-auto flex flex-col items-center">
      <h2 className="mb-1 text-2xl">Something went wrong!</h2>
      <h3 className="text-lg tracking-wide text-slate-700">
        Try refreshing the page.
      </h3>
    </div>
  );
}
