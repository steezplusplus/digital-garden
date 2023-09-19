import Link from 'next/link';

type LinkedinCardProps = {
  href: string;
  label: string;
  subLabel: string;
  icon: JSX.Element;
};

export function LinkedinCard(props: LinkedinCardProps) {
  const { href, label, subLabel, icon } = props;
  return (
    <Link
      href={href}
      target="_blank"
      className="
        group flex aspect-square flex-col
        rounded-xl border border-stone-400
        bg-white/50 p-4 dark:bg-indigo-100/5
      "
    >
      <div className="mb-auto self-end">{icon}</div>
      <h2 className="mb-1 text-lg group-hover:underline">{label}</h2>
      <h3 className="text-sm italic">{subLabel}</h3>
    </Link>
  );
}
