import { Metadata } from 'next';

import * as schema from '../_schema/schema';
import { ProfileCard } from './_components/profile-card';
import { FeaturedProjectsFeed } from './_components/featured/featured-project-feed';
import { TopLeftRectangle, TopRightRectangle } from './_components/rectangle-cards';
import { TLSquare, TRSquare, BLSquare, BRSquare } from './_components/square-cards';
import { Audio } from './_components/audio';
import { ThemeSwitcher } from './_components/theme-switcher';

export const metadata: Metadata = {
  title: "Jesse's Digital Garden",
};

export default async function HomePage() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <ProfileCard />
        <div className="grid grid-cols-2 gap-4">
          <TLSquare {...schema.githubSchema} />
          <TRSquare {...schema.twitterSchema} />
          <BLSquare {...schema.linkedinSchema} />
          <BRSquare {...schema.contactSchema} />
          <TopLeftRectangle {...schema.musicSchema}>
            <ThemeSwitcher />
          </TopLeftRectangle>
          <TopRightRectangle {...schema.themeSchema}>
            <Audio {...schema.audioSchema} />
          </TopRightRectangle>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-3xl">Featured Projects</h2>
        <FeaturedProjectsFeed />
      </div>
    </>
  );
}
