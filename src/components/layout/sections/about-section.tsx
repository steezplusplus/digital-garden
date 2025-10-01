import Grid from "@/components/grid";

export default function AboutSection() {
    return (
        <section aria-labelledby='about-section-heading'>
        <h2 id="about-section-heading" className="mb-4 text-3xl">
          What else I&apos;m up to
        </h2>
        <Grid className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <Grid.Item className='aspect-square'>Leetcode</Grid.Item>
          <Grid.Item className='aspect-square'>Typeracer</Grid.Item>
          <Grid.Item className='aspect-square'>Spotify</Grid.Item>
          <Grid.Item className='aspect-square'>Steam achievements, games with most hours</Grid.Item>
          <Grid.Item className='aspect-square'>Wise Old Man OSRS</Grid.Item>
          <Grid.Item className='aspect-square'>Blizzard</Grid.Item>
        </Grid>
      </section>
    );
}