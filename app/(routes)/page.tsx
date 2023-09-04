import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Jesse's Homepage",
};

export default async function HomePage() {
  // const user = await getUser(); // TODO
  return <div>homepage</div>;
}
