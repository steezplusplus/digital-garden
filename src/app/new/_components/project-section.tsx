import clsx from "clsx";

import Grid from "./grid";

export default function ProjectSection() {
  return (
      <section aria-labelledby='Projects'>
        <h2 className="mb-4 text-3xl">
          What I've been working on
        </h2>
        <Grid className="grid-cols-1 md:grid-cols-2">
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
      <h4 className="text-sm leading-relaxed text-">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>

      <div className="flex flex-wrap gap-2">
        <TopicsBadge label="JavaScript" />
        <TopicsBadge label="TypeScript" />
        <TopicsBadge label="Next.js" />
      </div>

      <hr />

      <div className="flex items-center gap-6 text-xs">
        <span># Stargazers</span>
        <span># Forks</span>
        <span># Watchers</span>
        <span className="ml-auto">X days ago</span>
      </div>
      
    </Grid.Item>
  );
}


function TopicsBadge({ className, label }: { className?: string; label: string }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center justify-center px-2 py-0.5 text-xs font-light w-fit whitespace-nowrap shrink-0",
        "rounded-md border border-stone-400 bg-white/50 p-4 dark:bg-indigo-100/5",
        className,
      )}
    >
      {label}
    </span>
  )
}