import Link from 'next/link';

import Grid from '.';

interface GridItemLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function GridItemLink(props: GridItemLinkProps) {
  const { href, children } = props;
  return (
    <Grid.Item>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex aspect-square flex-col p-4"
      >
        {children}
      </Link>
    </Grid.Item>
  );
}
