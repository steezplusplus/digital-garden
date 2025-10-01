import Grid from '@/components/grid';
import FeaturedCard from '@/components/cards/featured-card/featured-card';
import ThemeCard from '@/components/cards/theme-card/theme-card';
import GitHubCard from '@/components/cards/github-card/github-card';
import TwitterCard from '@/components/cards/twitter-card/twitter-card';
import LinkedInCard from '@/components/cards/linkedin-card/linkedin-card';
import LeetCodeCard from '@/components/cards/leetcode-card/leetcode-card';
import SupportCard from '@/components/cards/support-card/support-card';

export default function GallerySection() {
  return (
    <section aria-labelledby="gallery-section-heading">
      <h2 id="gallery-section-heading" className="sr-only">Gallery</h2>
      <Grid className="grid-cols-1 sm:grid-cols-2">
        <FeaturedCard />
        <li className="grid grid-cols-1 gap-4">
          <Grid className="grid-cols-2">
            <GitHubCard />
            <TwitterCard />
            <LinkedInCard />
            <LeetCodeCard />
          </Grid>
          <ThemeCard />
          <SupportCard />
        </li>
      </Grid>
    </section>
  );
}
