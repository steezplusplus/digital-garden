import { Suspense } from 'react';
import { Metadata } from 'next';

import * as schema from './_schema/schema';
import { ProfileCard } from './_components/cards/profile-card/profile-card';
import { MusicCard } from './_components/cards/music-card/music-card';
import { ThemeCard } from './_components/cards/theme-card/theme-card';
import { TwitterCard } from './_components/cards/twitter-card/twitter-card';
import { GithubCard } from './_components/cards/github-card/github-card';
import { LinkedinCard } from './_components/cards/linkedin-card/linkedin-card';
import { ContactCard } from './_components/cards/contact-card/contact-card';
import { ReposFeed, ReposFeedSkeleton } from './_components/repos-feed/repos-feed';
import { SupportCard } from './_components/cards/support-card/support-card';

export const metadata: Metadata = {
  title: "Jesse's Digital Garden",
};

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
          <SupportCard {...schema.supportCard} />
          <ThemeCard {...schema.themeSchema} />
          <MusicCard {...schema.musicSchema} />
        </div>
      </div>

      <div>
        <h2 id="project-id" className="mb-4 text-3xl">
          Most recently updated projects
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-8">
          <Suspense fallback={<ReposFeedSkeleton />}>
            <ReposFeed />
          </Suspense>
        </div>
      </div>
    </>
  );
}
