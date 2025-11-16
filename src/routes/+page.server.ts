import { client, urlFor } from '$lib/sanity';
import type { Project } from '../types/project';

export async function load() {
  const sanityProjects = await client.fetch(`
    *[_type == "project"] | order(date desc) {
      title,
      loc,
      date,
      desc,
      tags,
      category,
      img,
      links
    }
  `);

  // Transform Sanity data to match your Project interface
  const projects: Project[] = sanityProjects.map((p: any) => ({
    title: p.title,
    loc: p.loc,
    date: p.date,
    desc: p.desc,
    tags: p.tags,
    category: p.category,
    img: p.img?.map((image: any) => urlFor(image).width(800).url()) || [],
    links: p.links || [],
  }));

  return {
    projects,
  };
}

