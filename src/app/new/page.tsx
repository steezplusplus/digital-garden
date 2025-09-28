export default function NewPage() {
  return (
    <>
      {/* This section should only contain static content */}
      <Section label="Contact Information">
        <Card styles='sm:sticky sm:top-10 self-start aspect-square'>Featured</Card>

        <Grid styles="grid-cols-1">
          <Card>Theme</Card>

          <Grid styles="grid-cols-2">
            <Card styles="aspect-square">GitHub</Card>
            <Card styles="aspect-square">Twitter</Card>
            <Card styles="aspect-square">Discord</Card>
            <Card styles="aspect-square">Bluesky</Card>
          </Grid>

          <Card>Support me</Card>
        </Grid>
      </Section>

      {/* This section should contain dynamic data fetched from my github profile */}
      <Section label="Projects">
        <Grid styles="grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-8
          <Card>Project 1</Card>
          <Card>Project 1</Card>
          <Card>Project 1</Card>
        </Grid>
      </Section>

      {/* This section should only contain dynamic data from various unimportant online profiles */}
      <Section label="About Me">
          <Card>Spotify</Card>
      </Section>
    </>
  );
}

function Section({ label, children }: { label: string, children: React.ReactNode }) {
  return (
    <section aria-labelledby={label} className="grid grid-cols-1 sm:grid-cols-2 gap-4">{children}</section>
  );
}

function Grid({ styles, children }: { styles?: string, children: React.ReactNode }) {
  // TODO: Better string concat approach for combining classes
 return <div className={`grid gap-4${styles ? ' ' + styles : ''}`}>{children}</div>
}

function Card({ styles, children }: { styles?: string, children: React.ReactNode }) {
  // TODO: Better string concat approach for combining classes
  return <div className={`border rounded border-gray-200 p-4${styles ? ' ' + styles: ''}`}>{children}</div>
}