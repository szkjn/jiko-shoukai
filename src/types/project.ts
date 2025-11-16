export type Category = "performances" | "installations" | "programming" | "talks" | "releases";

export interface Project {
    title: string;
    loc?: string;
    date: string;
    desc: string;
    tags: string[];
    category: Category[];
    img: { thumb: string; full: string }[];
    videos?: string[];
    links?: { label: string; url: string }[];
  }
  