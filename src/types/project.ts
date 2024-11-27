export interface Project {
    title: string;
    loc: string;
    date: string;
    desc: string;
    tags: string[];
    category: ('performance' | 'installation' | 'programming' | 'releases')[];
    img: string[];
    links?: { label: string; url: string }[];
  }
  
export type Category = "performance" | "installation" | "programming" | "releases";