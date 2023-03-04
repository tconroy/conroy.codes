import type { Metadata } from "next";
import Link from "next/link";
import { allBlogs } from "contentlayer/generated";
import ViewCounter from "./view-counter";
import PublishDate from "./publish-date";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

export default async function BlogPage() {
  return (
    <section>
      <h1 className="font-bold text-5xl font-serif mb-5">Blog</h1>
      <p className="pb-8 text-2xl leading-normal">
        Occasionally I write down my thoughts. You can find them below.
      </p>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
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
              <p>{post.title}</p>
              <PublishDate publishedAt={post.publishedAt} />
              {/* <ViewCounter slug={post.slug} trackView={false} /> */}
            </div>
          </Link>
        ))}
    </section>
  );
}
