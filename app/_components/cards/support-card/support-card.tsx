import Link from 'next/link';

type SupportCardProps = {
  label: string;
  subLabel: string;
  href: string;
  icon: JSX.Element;
};

export function SupportCard(props: SupportCardProps) {
  const { label, subLabel, href, icon } = props;
  return (
    <Link
      href={href}
      target="_blank"
      className="
        col-span-2 flex aspect-auto flex-col rounded-xl
        border border-stone-400 bg-white/50
        p-4 dark:bg-indigo-100/5
      "
    >
      <h2 className="mb-1 text-lg">{label}</h2>
      <div className="mt-2 self-center">{icon}</div>
      <h3 className="self-end text-sm italic">{subLabel}</h3>
    </Link>
  );
}
