import { getSteamPlaytime } from '@/api/steam';

export default async function AboutSection() {
  const data = await getSteamPlaytime();
  return <pre>{JSON.stringify(data, null, 4)}</pre>;
}

export function AboutSectionSkeleton() {
  return <div>Loading Steam data...</div>;
}