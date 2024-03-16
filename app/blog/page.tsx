import type { Metadata } from "next";
import Link from "next/link";
import PublishDate from "./publish-date";
import { getBlogPosts } from "app/db/blog";
import { components } from "components/mdx";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

export default async function BlogPage() {
  return (
    <section>
      <h1 className="font-bold text-5xl font-serif mb-5">Blog</h1>
      <p className="pb-0 text-xl leading-normal">
        Occasionally I write down my thoughts. You can find them below.
      </p>
      <components.hr />
      {getBlogPosts()
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p>{post.metadata.title}</p>
              <PublishDate publishedAt={post.metadata.publishedAt} />
              {/* <ViewCounter slug={post.slug} trackView={false} /> */}
            </div>
          </Link>
        ))}
    </section>
  );
}
