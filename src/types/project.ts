export type Category = "performance" | "installation" | "programming" | "talk" | "releases";

export interface Project {
    title: string;
    loc?: string;
    date: string;
    desc: string;
    tags: string[];
    category: Category[];
    img: string[];
    links?: { label: string; url: string }[];
  }
  