import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mdx } from "components/mdx";
import { allBlogs } from "contentlayer/generated";
import { getTweets } from "lib/twitter";
import Balancer from "react-wrap-balancer";
import ViewCounter from "../view-counter";

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const post = allBlogs.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
    slug,
  } = post;
  const ogImage = image
    ? `https://conroy.codes${image}`
    : `https://conroy.codes/api/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://conroy.codes/blog/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({ params }) {
  const post = allBlogs.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const tweets = await getTweets(post.tweetIds);

  return (
    <section>
      <script type="application/ld+json">
        {JSON.stringify(post.structuredData)}
      </script>
      <h1 className="font-bold text-7xl font-serif max-w-[700px]">
        <Balancer>{post.title}</Balancer>
      </h1>
      <div className="grid grid-cols-[auto_1fr_auto] items-center mt-4 mb-8 font-mono text-sm max-w-[700px]">
        <time className="bg-neutral-100 dark:bg-[#212330] rounded-md px-2 py-1 tracking-tighter font-serif">
          {new Date(post.publishedAt).toDateString()}
        </time>
        <div className="h-[0.2em] bg-neutral-50 dark:bg-[#212330] mx-2" />
        <ViewCounter slug={post.slug} trackView />
      </div>
      <Mdx code={post.body.code} tweets={tweets} />
    </section>
  );
}
