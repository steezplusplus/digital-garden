import Grid from "./grid";

export default function ProjectSection() {
  return (
      <section aria-labelledby='project-section-heading'>
        <h2 id="project-section-heading" className="mb-4 text-3xl">
          What I've been working on
        </h2>
        <Grid className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </Grid>
      </section>
  );
}

function ProjectCard() {
  return (
    <Grid.Item className="flex flex-col gap-4">
      <div className="flex items-center">
        <h3 className="text-lg">Project Name</h3>
        <span className="ml-auto">x</span>
      </div>

      <p className="text-sm leading-relaxed line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

      <p className="text-xs">Updated x days ago</p>

      <hr />
      
      <div className="flex items-center gap-6 text-xs">
        <span># Stargazers</span>
        <span># Forks</span>
        <span># Watchers</span>
      </div>
    </Grid.Item>
  );
}
