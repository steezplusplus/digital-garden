import { GithubIcon, Twitter, Linkedin, Mail } from 'lucide-react';
import { ProfileCard } from './_components/profile-card';
import { ThemeCard } from './_components/theme-card';
import { MusicCard } from './_components/music-card';
import {
  TopLeftCard,
  TopRightCard,
  BottomLeftCard,
  BottomRightCard,
} from './_components/mini-cards';

// TODO Less CLS issues
export default function Loading() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <ProfileCard />
        <div className="grid grid-cols-2 gap-4">
          <TopLeftCard
            href="https://github.com/steezplusplus"
            label="Github"
            subLabel="SteezPlusPlus"
            icon={<GithubIcon />}
          />
          <TopRightCard
            href="https://twitter.com/CodingSteez"
            label="Twitter"
            subLabel="@CodingSteez"
            icon={<Twitter />}
          />
          <BottomLeftCard
            href="https://www.linkedin.com/in/jesse-bp/"
            label="LinkedIn"
            subLabel="in/jesse-bp"
            icon={<Linkedin />}
          />
          <BottomRightCard
            href="mailto:PenelloJ2@gmail.com"
            label="Contact"
            subLabel="Email me"
            icon={<Mail />}
          />
          <ThemeCard />
          <MusicCard />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-3xl">Featured Projects</h2>
        <p>Loading...</p>
      </div>
    </>
  );
}
