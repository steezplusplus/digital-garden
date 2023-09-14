import { GithubIcon, Twitter, Linkedin, Mail, Music } from 'lucide-react';

import * as schema from '../_schema/schema';
import { ProfileCard } from './_components/profile-card';
import { TopLeftRectangle, TopRightRectangle } from './_components/rectangle-cards';
import { TLSquare, TRSquare, BLSquare, BRSquare } from './_components/square-cards';

// TODO Less CLS issues
export default function Loading() {
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
            <></>
          </TopLeftRectangle>
          <TopRightRectangle {...schema.themeSchema}>
            <></>
          </TopRightRectangle>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-3xl">Featured Projects</h2>
        <></>
      </div>
    </>
  );
}
