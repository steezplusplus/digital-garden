import Grid from './_components/grid';
import GallerySection from './_components/gallery-section';

export default function NewGridPage() {
  return (
    <>
      <GallerySection />

      <section aria-labelledby='Projects'>
        <h2 className="mb-4 text-3xl">
          What I've been working on
        </h2>
        <Grid className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <Grid.Item className='aspect-square'>1</Grid.Item>
          <Grid.Item className='aspect-square'>2</Grid.Item>
          <Grid.Item className='aspect-square'>3</Grid.Item>
        </Grid>
      </section>

      <section aria-labelledby='About'>
        <h2 className="mb-4 text-3xl">
          What else I'm up to
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
    </>
  );
}
