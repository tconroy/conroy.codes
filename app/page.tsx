import { getTweetCount } from "lib/metrics";
import { ArrowIcon } from "components/icons";
import { about, bio } from "lib/info";
import ArticleCard from "components/article-card";
import { allBlogs } from "contentlayer/generated";
import Weather from "components/weather";
import Balancer from "react-wrap-balancer";
import NewsletterPopover from "./NewsletterPopover";
import TwitterLink from "./TwitterLink";
import { cache } from "react";

// export const revalidate = 60;

// const getWeather = cache(async () => {
//   // const response = await fetch(`http://localhost:3000/api/weather`);
//   const response = await fetch("http://localhost:3000/api/weather", {
//     cache: "no-store",
//   });
//   const data = await response.json();
//   return data;
// });
const getWeather = async () => {
  // const response = await fetch(`http://localhost:3000/api/weather`);
  const response = await fetch("http://localhost:3000/api/weather", {
    next: { revalidate: 60 },
  });
  const data = await response.json();
  return data;
};

export default async function HomePage() {
  let tweetCount, weather;

  try {
    [tweetCount, weather] = await Promise.all([getTweetCount(), getWeather()]);
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
            <TwitterLink />
          </li>
          <li>
            <NewsletterPopover />
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
