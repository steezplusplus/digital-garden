import Link from 'next/link';

type ContactCardProps = {
  href: string;
  label: string;
  subLabel: string;
  icon: JSX.Element;
};

export function ContactCard(props: ContactCardProps) {
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
