type SnapContainerProps = {
  children: React.ReactNode;
};

export function SnapContainer(props: SnapContainerProps) {
  const { children } = props;
  return <div className="h-full snap-y snap-mandatory overflow-scroll">{children}</div>;
}

type SnapSectionProps = {
  children: React.ReactNode;
};

export function SnapSection(props: SnapSectionProps) {
  const { children } = props;
  return (
    <section className="h-full w-full snap-start border border-black bg-amber-200">
      {children}
    </section>
  );
}
