import Link from 'next/link';
import { Linkedin, Twitter, Github } from 'lucide-react';

export function GithubCard() {
  const label = 'Github Link';
  const href = 'https://github.com/steezplusplus';
  return (
    <Link
      href={href}
      target="_blank"
      className="flex aspect-square flex-col rounded-xl border border-stone-400 p-4"
    >
      <h2 className="mb-1 text-lg first-letter:text-2xl">{label}</h2>
      <h3 className="font-italic text-sm">SteezPlusPlus</h3>
      <Github className="mt-auto self-end" />
    </Link>
  );
}

export function TwitterCard() {
  const label = 'Twitter Link';
  const href = 'https://twitter.com/CodingSteez';
  return (
    <Link
      href={href}
      target="_blank"
      className="flex aspect-square flex-col rounded-xl border border-stone-400 p-4"
    >
      <h2 className="mb-1 text-lg first-letter:text-2xl">{label}</h2>
      <h3 className="text-sm">@CodingSteez</h3>
      <Twitter className="mt-auto self-start" />
    </Link>
  );
}

export function LinkedInCard() {
  const label = 'LinkedIn Link';
  const href = 'https://www.linkedin.com/in/jesse-bp/';
  return (
    <Link
      href={href}
      target="_blank"
      className="flex aspect-square flex-col rounded-xl border border-stone-400 p-4"
    >
      <Linkedin className="mb-auto self-end" />
      <h2 className="mb-1 text-lg first-letter:text-2xl">{label}</h2>
      <h3 className="text-sm">in/jesse-bp</h3>
    </Link>
  );
}

export function SpotifyCard() {
  const label = 'Spotify API';
  return (
    <div className="aspect-square rounded-xl border border-stone-400 p-4">
      {label}
    </div>
  );
}

export function SteamCard() {
  const label = 'Hire me';
  return (
    <div className="aspect-square rounded-xl border border-stone-400 p-4">
      {label}
    </div>
  );
}

export function EmailCard() {
  const label = 'Email Link';
  return (
    <div className="aspect-square rounded-xl border border-stone-400 p-4">
      {label}
    </div>
  );
}

export function RepositoryCard() {
  const label = 'Repo';
  return (
    <div className="aspect-auto rounded-xl border border-stone-400 p-4">
      {label}
    </div>
  );
}
