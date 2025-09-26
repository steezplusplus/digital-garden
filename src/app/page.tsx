import { Suspense } from 'react';
import { Metadata } from 'next';

import * as schema from '@/schema/schema';
import { ProfileCard } from '@/components/cards/profile-card/profile-card';
import { MusicCard } from '@/components/cards/music-card/music-card';
import { ThemeCard } from '@/components/cards/theme-card/theme-card';
import { TwitterCard } from '@/components/cards/twitter-card/twitter-card';
import { GithubCard } from '@/components/cards/github-card/github-card';
import { LinkedinCard } from '@/components/cards/linkedin-card/linkedin-card';
import { ContactCard } from '@/components/cards/contact-card/contact-card';
import { ReposFeed, ReposFeedSkeleton } from '@/components/repos-feed/repos-feed';
import { SupportCard } from '@/components/cards/support-card/support-card';

export const metadata: Metadata = {
  title: "Jesse's Digital Garden",
};

export const revalidate = 3600; // revalidate at most every hour

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
