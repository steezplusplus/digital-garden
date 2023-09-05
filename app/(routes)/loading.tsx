import { ProfileCard } from './_components/profile-card';
import { GithubCard } from './_components/github-card';
import { TwitterCard } from './_components/twitter-card';
import { LinkedInCard } from './_components/linkedin-card';
import { EmailCard } from './_components/email-card';
import { SteamCard } from './_components/steam-card';
import { MusicCard } from './_components/music-card';

// TODO Less CLS issues
export default function Loading() {
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
        <p>Loading...</p>
      </div>

      <div className="flex flex-col gap-y-2">
        <h2 className="text-3xl">Older works</h2>
        <p>Loading...</p>
        <div className="flex justify-center">
          <button className="rounded-md border border-stone-400 px-2 py-1 hover:bg-stone-300/50 hover:dark:bg-black/50">
            Load more
          </button>
        </div>
      </div>
    </>
  );
}
