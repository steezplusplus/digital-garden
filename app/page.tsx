import { Suspense } from 'react';
import { Metadata } from 'next';

import * as schema from './_schema/schema';
import { ProfileCard } from './_components/cards/profile-card/profile-card';
import { TopLeftRectangle, TopRightRectangle } from './_components/cards/rectangle-cards';
import { ThemeSwitcher } from './_components/theme-switcher';
import { Audio } from './_components/audio';
import { ReposFeed } from './_components/feeds/repos-feed';
import { TwitterCard } from './_components/cards/twitter-card/twitter-card';
import { GithubCard } from './_components/cards/github-card/github-card';
import { LinkedinCard } from './_components/cards/linkedin-card/linkedin-card';
import { ContactCard } from './_components/cards/contact-card/contact-card';

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
          <GithubCard {...schema.githubSchema} />
          <TwitterCard {...schema.twitterSchema} />
          <LinkedinCard {...schema.linkedinSchema} />
          <ContactCard {...schema.contactSchema} />
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
