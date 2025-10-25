import FeaturedCard from '@/components/cards/featured-card/featured-card';
import GitHubCard from '@/components/cards/github-card/github-card';
import TwitterCard from '@/components/cards/twitter-card/twitter-card';
import LinkedInCard from '@/components/cards/linkedin-card/linkedin-card';
import ContactCard from '@/components/cards/contact-card/contact-card';
import JukeboxCard from '@/components/cards/jukebox-card/jukebox-card';
import ThemeCard from '@/components/cards/theme-card/theme-card';
import SupportCard from '@/components/cards/support-card/support-card';

export default function Gallery() {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2" aria-label="Gallery">
      <FeaturedCard />
      <div className="grid grid-cols-2 gap-4">
        <GitHubCard />
        <TwitterCard />
        <LinkedInCard />
        <ContactCard />
        <JukeboxCard />
        <ThemeCard />
        <SupportCard />
      </div>
    </section>
  );
}
