import Link from 'next/link';
import { Linkedin, Twitter, Github, Music, Mail, Gamepad2 } from 'lucide-react';

export function GithubCard() {
  const label = 'Github';
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
  const label = 'Twitter';
  const href = 'https://twitter.com/CodingSteez';
  return (
    <Link
      href={href}
      target="_blank"
      className="flex aspect-square flex-col rounded-xl border border-stone-400 p-4"
    >
      <h2 className="mb-1 self-end text-lg first-letter:text-2xl">{label}</h2>
      <h3 className="self-end text-sm">@CodingSteez</h3>
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

export function EmailCard() {
  const label = 'Hire me';
  const subLael = 'Pls no spam :(';
  const href = 'mailto::';

  return (
    <Link
      href={href}
      target="_blank"
      className="flex aspect-square flex-col rounded-xl border border-stone-400 p-4"
    >
      <Mail className="mb-auto self-start" />
      <h2 className="mb-1 self-end text-lg first-letter:text-2xl">{label}</h2>
      <h3 className="font-italic self-end text-sm">{subLael}</h3>
    </Link>
  );
}

export function SteamCard() {
  const label = 'Playing...';
  const href = '';
  return (
    <Link
      href={href}
      target="_blank"
      className="flex aspect-square flex-col rounded-xl border border-stone-400 p-4"
    >
      <h2 className="mb-1 text-lg first-letter:text-2xl">{label}</h2>
      <h3 className="text-sm">Some game</h3>
      <Gamepad2 className="mt-auto self-end" />
    </Link>
  );
}

export function MusicCard() {
  const label = 'Listening to...';
  return (
    <div className="flex aspect-square flex-col rounded-xl border border-stone-400 p-4">
      <h2 className="mb-1 self-end text-lg first-letter:text-2xl">{label}</h2>
      <h3 className="self-end text-sm">Genre</h3>
      <Music className="mt-auto self-start" />
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
