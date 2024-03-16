import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPosts } from "app/db/blog";
import { getTweets } from "lib/twitter";
import Balancer from "react-wrap-balancer";
import ViewCounter from "../view-counter";
import { CustomMDX } from "components/mdx";

export async function generateStaticParams() {
  return getBlogPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const {
    metadata: {
      title,
      publishedAt: publishedTime,
      summary: description,
      image,
    },
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
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const tweets = await getTweets(post.tweetIds);

  return (
    <section>
      {/* <script type="application/ld+json">
        {JSON.stringify(post.structuredData)}
      </script> */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `https://conroy.codes${post.metadata.image}`
              : `https://conroy.codes/og?title=${post.metadata.title}`,
            url: `https://conroy.codes/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Tom Conroy",
            },
          }),
        }}
      />
      <h1 className="font-bold text-7xl font-serif max-w-[700px]">
        <Balancer>{post.metadata.title}</Balancer>
      </h1>
      <div className="grid grid-cols-[auto_1fr_auto] items-center mt-4 mb-8 font-mono text-sm max-w-[700px]">
        <time className="bg-neutral-100 dark:bg-[#212330] rounded-md px-2 py-1 tracking-tighter font-serif">
          {new Date(post.metadata.publishedAt).toDateString()}
        </time>
        <div className="h-[0.2em] bg-neutral-50 dark:bg-[#212330] mx-2" />
        <ViewCounter slug={post.slug} trackView />
      </div>
      <CustomMDX source={post.content} />
    </section>
  );
}
