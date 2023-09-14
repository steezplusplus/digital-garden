import * as schema from './_schema/schema';
import { ProfileCard } from './_components/cards/profile-card';
import { TopLeftRectangle, TopRightRectangle } from './_components/cards/rectangle-cards';
import { TwitterCard } from './_components/cards/twitter-card/twitter-card';
import { GithubCard } from './_components/cards/github-card/github-card';
import { LinkedinCard } from './_components/cards/linkedin-card/linkedin-card';
import { ContactCard } from './_components/cards/contact-card/contact-card';

// TODO Less CLS issues
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
          <TopLeftRectangle {...schema.musicSchema}>
            <></>
          </TopLeftRectangle>
          <TopRightRectangle {...schema.themeSchema}>
            <></>
          </TopRightRectangle>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-3xl">Most recently updated projects</h2>
        <></>
      </div>
    </>
  );
}
