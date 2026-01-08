import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDirectory = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  author: string;
  content: string;
}

export function getAllBlogPosts(): BlogPost[] {
  // Check if directory exists
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(blogDirectory);
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(blogDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug: data.slug || slug,
        title: data.title || "",
        date: data.date || "",
        category: data.category || "",
        image: data.image || "",
        excerpt: data.excerpt || "",
        author: data.author || "SongRocket Team",
        content,
      };
    });

  // Sort posts by date (newest first)
  return allPosts.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const posts = getAllBlogPosts();
  return posts.find((post) => post.slug === slug) || null;
}

export function getAllBlogSlugs(): string[] {
  const posts = getAllBlogPosts();
  return posts.map((post) => post.slug);
}
