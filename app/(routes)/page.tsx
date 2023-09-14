import { Suspense } from 'react';
import { Metadata } from 'next';

import * as schema from '../_schema/schema';
import { ProfileCard } from './_components/cards/profile-card';
import { TopLeftRectangle, TopRightRectangle } from './_components/cards/rectangle-cards';
import { TLSquare, TRSquare, BLSquare, BRSquare } from './_components/cards/square-cards';
import { ThemeSwitcher } from './_components/theme-switcher';
import { Audio } from './_components/audio';
import { ReposFeed } from './_components/repos-feed';

export const metadata: Metadata = {
  title: "Jesse's Digital Garden",
};

// TODO Suspense fallback ui
export default function HomePage() {
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
        <h2 className="mb-4 text-3xl">Most recently updated projects</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-8">
          <Suspense fallback={<p>Loading projects...</p>}>
            <ReposFeed />
          </Suspense>
        </div>
      </div>
    </>
  );
}
