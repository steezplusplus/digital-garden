import { Metadata } from 'next';
import {
  EmailCard,
  GithubCard,
  LinkedInCard,
  SpotifyCard,
  SteamCard,
  RepositoryCard,
  TwitterCard,
} from '../_components/cards';

export const metadata: Metadata = {
  title: "Jesse's Homepage",
};

export default async function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-screen-lg flex-col gap-10 px-2 py-10">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="bottom-0 aspect-auto self-start rounded-xl border border-stone-400 p-4 sm:sticky sm:top-0 sm:aspect-square">
          <h2 className="text-xl">Asset</h2>
          <h2 className="text-xl">Name</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <GithubCard />
          <TwitterCard />
          <LinkedInCard />
          <SpotifyCard />
          <SteamCard />
          <EmailCard />
        </div>
      </div>
      <div>
        <h2 className="mb-1 text-3xl">What Im building</h2>
        <div className="grid grid-cols-1 gap-8">
          <RepositoryCard />
          <RepositoryCard />
          <RepositoryCard />
        </div>
      </div>
      <div>
        <h2 className="mb-1 text-3xl">Older works</h2>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <RepositoryCard />
          <RepositoryCard />
          <RepositoryCard />
          <RepositoryCard />
          <RepositoryCard />
          <RepositoryCard />
        </div>
      </div>
    </div>
  );
}
