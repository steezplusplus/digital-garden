import { GithubIcon, Twitter, Linkedin, Mail, Music } from 'lucide-react';
import { Audio } from './_components/audio';
import { ThemeSwitcher } from './_components/theme-switcher';
import { ProfileCard } from './_components/profile-card';
import {
  TopLeftRectangle,
  TopRightRectangle,
} from './_components/rectangle-cards';
import {
  TopLeftSquare,
  TopRightSquare,
  BottomLeftSquare,
  BottomRightSquare,
} from './_components/square-cards';

// TODO Less CLS issues
export default function Loading() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <ProfileCard />
        <div className="grid grid-cols-2 gap-4">
          <TopLeftSquare
            href="https://github.com/steezplusplus"
            label="Github"
            subLabel="SteezPlusPlus"
            icon={<GithubIcon />}
          />
          <TopRightSquare
            href="https://twitter.com/CodingSteez"
            label="Twitter"
            subLabel="@CodingSteez"
            icon={<Twitter />}
          />
          <BottomLeftSquare
            href="https://www.linkedin.com/in/jesse-bp/"
            label="LinkedIn"
            subLabel="in/jesse-bp"
            icon={<Linkedin />}
          />
          <BottomRightSquare
            href="mailto:PenelloJ2@gmail.com"
            label="Contact"
            subLabel="Email me"
            icon={<Mail />}
          />
          <TopLeftRectangle label="Theme" icon={<></>}>
            <ThemeSwitcher />
          </TopLeftRectangle>
          <TopRightRectangle
            label="Listening to..."
            subLabel="LoFi"
            icon={<Music />}
          >
            <Audio songPath="/song.mp3" />
          </TopRightRectangle>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-3xl">Featured Projects</h2>
        <p>Loading...</p>
      </div>
    </>
  );
}
