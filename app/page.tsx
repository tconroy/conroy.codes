// import { getTweetCount } from "lib/metrics";
// import { getWeather } from "lib/weather";
import { about, bio } from "lib/info";
import ArticleCard from "components/article-card";
// import Weather from "components/weather";
// import Balancer from "react-wrap-balancer";
import NewsletterPopover from "./NewsletterPopover";
import TwitterLink from "./TwitterLink";
import { getBlogPosts } from "app/db/blog";
import clsx from "clsx";

export const revalidate = 60;

const Heading = (props) => (
  <h1
    {...props}
    className={clsx(
      "font-bold font-serif text-4xl md:text-7xl flex items-center",
      props.className
    )}
  />
);
const Subheading = (props) => (
  <p
    {...props}
    className={clsx(
      "my-5 max-w-[700px] leading-normal text-2xl md:text-3xl md:leading-normal text-neutral-800 dark:text-neutral-200 prose prose-quoteless prose-neutral dark:prose-invert",
      props.className
    )}
  />
);
const Paragraph = (props) => (
  <p
    {...props}
    className={clsx(
      "my-5 max-w-[700px] leading-normal text-xl md:text-base text-neutral-800 dark:text-neutral-200 prose prose-quoteless prose-neutral dark:prose-invert",
      props.className
    )}
  />
);

export default async function HomePage() {
  // let tweetCount;
  // try {
  //   tweetCount = await getTweetCount();
  // } catch (error) {
  //   console.error(error);
  // }

  return (
    <>
      <section>
        <Heading>👋 Hi! I'm Tom.</Heading>
        {/* <Balancer> */}
        <Subheading>{about()}</Subheading>
        <Paragraph>{bio()}</Paragraph>
        {/* </Balancer> */}
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
          {getBlogPosts()
            .sort((a, b) => {
              if (
                new Date(a.metadata.publishedAt) >
                new Date(b.metadata.publishedAt)
              ) {
                return -1;
              }
              return 1;
            })
            .slice(0, 3)
            .map((post) => (
              <li className="mb-4" key={post.slug}>
                <ArticleCard
                  title={post.metadata.title}
                  slug={post.slug}
                  summary={post.metadata.summary}
                />
              </li>
            ))}
        </ol>
      </section>
    </>
  );
}
