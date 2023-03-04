import {
  getBlogViews,
  getTweetCount,
  getStarCount,
  getWeather,
} from "lib/metrics";
import { ArrowIcon } from "components/icons";
import { about, bio } from "lib/info";
import ArticleCard from "components/article-card";
import { allBlogs } from "contentlayer/generated";
import Weather from "components/weather";
import Balancer from "react-wrap-balancer";
import NewsletterPopover from "./NewsletterPopover";
import { usePlausible } from "next-plausible";

export const revalidate = 60;

const links = {
  attrs: {
    rel: "noopener noreferrer",
    target: "_blank",
  },
  github: "https://github.com/tconroy",
  twitter: "https://twitter.com/tconroy",
};

export default async function HomePage() {
  let starCount, views, tweetCount, weather;
  const plausible = usePlausible();

  try {
    [starCount, views, tweetCount, weather] = await Promise.all([
      getStarCount(),
      getBlogViews(),
      getTweetCount(),
      getWeather(),
    ]);
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      <section>
        <h1 className="font-bold font-serif text-5xl md:text-7xl flex items-center">
          <Weather data={weather} /> Hi, I'm Tom.
        </h1>
        <Balancer>
          <p className="my-5 max-w-[700px] leading-normal text-2xl md:text-3xl md:leading-normal text-neutral-800 dark:text-neutral-200 prose prose-quoteless prose-neutral dark:prose-invert">
            {about()}
          </p>
          <p className="my-5 max-w-[700px] leading-normal text-xl md:text-base text-neutral-800 dark:text-neutral-200 prose prose-quoteless prose-neutral dark:prose-invert">
            {bio()}
          </p>
        </Balancer>
        <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
          <li>
            <a
              className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
              {...links.attrs}
              onClick={() => {
                plausible("click", {
                  props: {
                    destination: links.twitter,
                  },
                });
              }}
              href={links.twitter}
            >
              <ArrowIcon />
              <p className="h-7">follow me on twitter</p>
            </a>
          </li>
          <li>
            <NewsletterPopover />
            {/* <a
              className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
              {...links.attrs}
              href="https://tconroy.substack.com"
            >
              <ArrowIcon />
              <p className="h-7">get notified for new posts</p>
            </a> */}
          </li>
        </ul>
      </section>
      <section className="mt-5">
        <h2 className="font-bold font-serif text-2xl my-5">Recent Posts</h2>
        <ol>
          {allBlogs
            .sort((a, b) => {
              if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
                return -1;
              }
              return 1;
            })
            .slice(0, 3)
            .map((post) => (
              <li key={post.slug}>
                <ArticleCard
                  title={post.title}
                  slug={post.slug}
                  summary={post.summary}
                />
              </li>
            ))}
        </ol>
      </section>
    </>
  );
}
