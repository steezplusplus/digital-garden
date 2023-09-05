import { Metadata } from 'next';

import { ProfileCard } from './_components/profile-card';
import { GithubCard } from './_components/github-card';
import { TwitterCard } from './_components/twitter-card';
import { LinkedInCard } from './_components/linkedin-card';
import { EmailCard } from './_components/email-card';
import { SteamCard } from './_components/steam-card';
import { MusicCard } from './_components/music-card';
import { FeaturedProjectsFeed } from './_components/featured/featured-project-feed';
import { NotFeaturedFeed } from './_components/not-featured/not-featured-feed';

export const metadata: Metadata = {
  title: "Jesse's Homepage",
};

export default async function HomePage() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <ProfileCard />
        <div className="grid grid-cols-2 gap-4">
          <GithubCard />
          <TwitterCard />
          <LinkedInCard />
          <EmailCard />
          <SteamCard />
          <MusicCard />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-3xl">Featured Projects</h2>
        <FeaturedProjectsFeed />
      </div>

      <div className="flex flex-col gap-y-2">
        <h2 className="text-3xl">Older works</h2>
        <NotFeaturedFeed />
      </div>
    </>
  );
}
