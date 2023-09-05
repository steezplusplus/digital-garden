import Link from 'next/link';
import Image from 'next/image';

import { getProject } from '@/octokit';

export type FeaturedProjectProps = {
  displayName: string;
  repoName: string;
};

// TODO Component UI
export async function FeaturedProject(props: FeaturedProjectProps) {
  const { displayName, repoName } = props;
  const project = await getProject(repoName);

  // TODO Error fallback UI?
  if (project === undefined) {
    return (
      <div className="aspect-auto rounded-xl border border-stone-400 p-4">
        <p>Uh-oh! Something went wrong.</p>
      </div>
    );
  }

  return (
    <Link
      href={project.html_url}
      target="_blank"
      className="flex flex-col items-center gap-y-2 rounded-xl border border-stone-400 px-2 pb-2 pt-1"
    >
      <h2 className="text-lg first-letter:text-2xl">{displayName}</h2>
      <p className="p-2">{project.description}</p>
      <div className="mt-auto">
        <div className="flex items-center gap-x-2">
          <p className="rounded border px-2 py-1 text-xs">
            {project.num_stars} stars
          </p>
          <p className="rounded border px-2 py-1 text-xs">
            {project.num_forks} forks
          </p>
        </div>
      </div>
    </Link>
  );

  // return (
  //   <Link
  //     href={project.html_url}
  //     target="_blank"
  //     className="aspect-auto rounded-xl border border-stone-400 p-4"
  //   >
  //     <h2>{displayName}</h2>
  //     <h3>{project.description}</h3>
  //     <p>{project.num_stars} stars</p>
  //     <p>{project.num_forks} forks</p>
  //     <p>{project.num_subscribers} subscribers</p>
  //     <p>Built with {project.language}</p>
  //     {project.license && <p>{project.license.name}</p>}
  //   </Link>
  // );
}

{
  /* 
<a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
  <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="">
  <div class="flex flex-col justify-between p-4 leading-normal">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
  </div>
</a> 
*/
}
