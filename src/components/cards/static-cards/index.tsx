import GridItemLink from "@/components/grid/grid-item-link";

export function CardOne() {
  return (
    <GridItemLink
      href="#"
    >
      <h2 className="mb-1 text-lg group-hover:underline">label</h2>
      <h3 className="text-sm italic">sublabel</h3>
      <div className="mt-auto self-end">x</div>
    </GridItemLink>
  );
}

export function CardTwo() {
  return (
    <GridItemLink
      href="#"
    >
      <h2 className="mb-1 self-end text-lg group-hover:underline">label</h2>
      <h3 className="self-end text-sm italic">sub label</h3>
      <div className="mt-auto self-start">x</div>
    </GridItemLink>
  );
}

export function CardThree() {
  return (
    <GridItemLink
      href="#"
    >
      <div className="mb-auto self-end">x</div>
      <h2 className="mb-1 text-lg group-hover:underline">label</h2>
      <h3 className="text-sm italic">sublabel</h3>
    </GridItemLink>
  );
}

export function CardFour() {
  return (
    <GridItemLink
      href="#"
    >
      <div className="mb-auto self-start">x</div>
      <h2 className="mb-1 self-end text-lg group-hover:underline">label</h2>
      <h3 className="self-end text-sm italic">sublabel</h3>
    </GridItemLink>
  );
}