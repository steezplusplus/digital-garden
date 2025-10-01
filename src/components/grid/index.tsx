import clsx from 'clsx';

function Grid(props: React.ComponentProps<'ul'>) {
  return (
    <ul {...props} className={clsx('grid gap-4', props.className)}>
      {props.children}
    </ul>
  );
}

function GridItem(props: React.ComponentProps<'li'>) {
  return (
    <li
      {...props}
      className={clsx(
        'rounded-xl border border-stone-400 bg-white/50 p-4 dark:bg-indigo-100/5',
        props.className
      )}
    >
      {props.children}
    </li>
  );
}

Grid.Item = GridItem;

export default Grid;
