import { NotFeatured } from './not-featured';

export function NotFeaturedFeed() {
  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <NotFeatured />
      <NotFeatured />
      <NotFeatured />
      <NotFeatured />
      <NotFeatured />
      <NotFeatured />
    </div>
  );
}
