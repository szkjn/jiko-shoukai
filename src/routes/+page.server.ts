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
      videos,
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
    // Generate optimized URLs for different sizes using Sanity's image CDN
    img: p.img?.map((image: any) => ({
      thumb: urlFor(image).width(600).quality(80).format('webp').url(),
      full: urlFor(image).width(1200).quality(85).format('webp').url(),
    })) || [],
    videos: p.videos?.map((video: any) => video.asset?.url).filter(Boolean) || [],
    links: p.links || [],
  }));

  return {
    projects,
  };
}

