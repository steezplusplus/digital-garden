import Link from 'next/link';

type SquareCardProps = {
  href: string;
  label: string;
  subLabel: string;
  icon: JSX.Element;
};

export function TopLeftSquare(props: SquareCardProps) {
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
      <h3 className="text-sm italic">{subLabel}</h3>
      <div className="mt-auto self-end">{icon}</div>
    </Link>
  );
}

export function TopRightSquare(props: SquareCardProps) {
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
      <h3 className="self-end text-sm italic">{subLabel}</h3>
      <div className="mt-auto self-start">{icon}</div>
    </Link>
  );
}

export function BottomLeftSquare(props: SquareCardProps) {
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
      <h3 className="text-sm italic">{subLabel}</h3>
    </Link>
  );
}

export function BottomRightSquare(props: SquareCardProps) {
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
      <h3 className="self-end text-sm italic">{subLabel}</h3>
    </Link>
  );
}
