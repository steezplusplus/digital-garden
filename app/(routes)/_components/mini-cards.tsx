import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';

type CardProps = {
  href: string;
  label: string;
  subLabel: string;
  icon: JSX.Element;
};

export function TopLeftCard(props: CardProps) {
  const { href, label, subLabel, icon } = props;
  return (
    <Link
      href={href}
      target="_blank"
      className="
        flex aspect-square flex-col rounded-xl
        border border-stone-400 bg-white/50
        p-4 dark:bg-indigo-100/5
      "
    >
      <h2 className="mb-1 text-lg">{label}</h2>
      <h3 className="font-italic text-sm">{subLabel}</h3>
      <div className="mt-auto self-end">{icon}</div>
    </Link>
  );
}

export function TopRightCard(props: CardProps) {
  const { href, label, subLabel, icon } = props;
  return (
    <Link
      href={href}
      target="_blank"
      className="
        flex aspect-square flex-col rounded-xl
        border border-stone-400 bg-white/50
        p-4 dark:bg-indigo-100/5
      "
    >
      <h2 className="mb-1 self-end text-lg">{label}</h2>
      <h3 className="font-italic self-end text-sm">{subLabel}</h3>
      <div className="mt-auto self-start">{icon}</div>
    </Link>
  );
}

export function BottomLeftCard(props: CardProps) {
  const { href, label, subLabel, icon } = props;
  return (
    <Link
      href={href}
      target="_blank"
      className="
        flex aspect-square flex-col rounded-xl
        border border-stone-400 bg-white/50
        p-4 dark:bg-indigo-100/5
      "
    >
      <div className="mb-auto self-end">{icon}</div>
      <h2 className="mb-1 text-lg">{label}</h2>
      <h3 className="font-italic text-sm">{subLabel}</h3>
    </Link>
  );
}

export function BottomRightCard(props: CardProps) {
  const { href, label, subLabel, icon } = props;
  return (
    <Link
      href={href}
      target="_blank"
      className="
        flex aspect-square flex-col rounded-xl
        border border-stone-400 bg-white/50
        p-4 dark:bg-indigo-100/5
      "
    >
      <div className="mb-auto self-start">{icon}</div>
      <h2 className="mb-1 self-end text-lg">{label}</h2>
      <h3 className="font-italic self-end text-sm">{subLabel}</h3>
    </Link>
  );
}
