import Grid from "./grid";

export default function ProjectSection() {
  return (
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
  );
}