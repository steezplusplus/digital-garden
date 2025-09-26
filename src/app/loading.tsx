import * as schema from '@/schema/schema';
import { ProfileCard } from '@/components/cards/profile-card/profile-card';
import { TwitterCard } from '@/components/cards/twitter-card/twitter-card';
import { GithubCard } from '@/components/cards/github-card/github-card';
import { LinkedinCard } from '@/components/cards/linkedin-card/linkedin-card';
import { ContactCard } from '@/components/cards/contact-card/contact-card';
import { MusicCard } from '@/components/cards/music-card/music-card';
import { ThemeCard } from '@/components/cards/theme-card/theme-card';
import { SupportCard } from '@/components/cards/support-card/support-card';

export default function Loading() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <ProfileCard />
        <div className="grid grid-cols-2 gap-4">
          <GithubCard {...schema.githubSchema} />
          <TwitterCard {...schema.twitterSchema} />
          <LinkedinCard {...schema.linkedinSchema} />
          <ContactCard {...schema.contactSchema} />
          <ThemeCard {...schema.themeSchema}>
            <div className="h-12 w-9 rounded-md border border-slate-400" />
          </ThemeCard>
          <SupportCard {...schema.supportCard} />
          <MusicCard {...schema.musicSchema} />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-3xl">Most recently updated projects</h2>
      </div>
    </>
  );
}
