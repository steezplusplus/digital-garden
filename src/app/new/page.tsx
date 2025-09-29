import Grid from '@/components/grid';

export default function NewGridPage() {
  return (
    <>
      <section aria-labelledby='Contact Information'>
        <Grid className='grid-cols-1 sm:grid-cols-2'>
          <Grid.Item className='sm:sticky sm:top-10 self-start aspect-square'>Featured</Grid.Item>
          <Grid className='grid-cols-1'>
            <Grid.Item>Theme</Grid.Item>
            <Grid className='grid-cols-2'>
              <Grid.Item className='aspect-square'>1</Grid.Item>
              <Grid.Item className='aspect-square'>2</Grid.Item>
              <Grid.Item className='aspect-square'>3</Grid.Item>
              <Grid.Item className='aspect-square'>4</Grid.Item>
            </Grid>
            <Grid.Item>Support Me</Grid.Item>
          </Grid>
        </Grid>
      </section>

      <section aria-labelledby='Projects'>
        <h2 className="mb-4 text-3xl">
          Most recently updated projects
        </h2>
        <Grid className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <Grid.Item className='aspect-square'>1</Grid.Item>
          <Grid.Item className='aspect-square'>2</Grid.Item>
          <Grid.Item className='aspect-square'>3</Grid.Item>
        </Grid>
      </section>

      <section aria-labelledby='About'>
        <h2 className="mb-4 text-3xl">
          Profiles
        </h2>
        <Grid className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <Grid.Item className='aspect-square'>Leetcode</Grid.Item>
          <Grid.Item className='aspect-square'>Typeracer</Grid.Item>
          <Grid.Item className='aspect-square'>Spotify</Grid.Item>
        </Grid>
      </section>
    </>
  );
}
