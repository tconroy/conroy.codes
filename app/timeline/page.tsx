import { Metadata } from "next";
import Timeline from "components/Timeline";
import { components } from "components/mdx";

export const metadata: Metadata = {
  title: "Timeline",
  description: "A timeline of my professional career.",
};

const SqspLink = () => (
  <components.a href="https://www.squarespace.com">Squarespace</components.a>
);

export default function AboutPage() {
  const cn =
    "text-neutral-800 dark:text-neutral-200 prose prose-quoteless prose-neutral dark:prose-invert my-[1.25rem]";
  return (
    <section>
      <h1 className="font-bold text-5xl font-serif m-0">Timeline</h1>
      <h2 className="my-5 text-neutral-800 text-2xl dark:text-neutral-200">
        A timeline of my professional career (so far):
      </h2>
      <Timeline
        events={[
          {
            date: "2023",
            description: (
              <>
                <strong>
                  Engineering Team Manager, Activation @ <SqspLink />.
                </strong>
                <p>
                  Directly managed a team of 6 Engineers delivering growth and
                  User Activation initiatives. Focused on enhancing the global
                  and cross-product onboarding experience for new Squarespace
                  customers.
                </p>
              </>
            ),
          },
          {
            date: "2022",
            description: (
              <>
                <strong>
                  Team Lead, Custom Starting Points @ <SqspLink />.
                </strong>
                <p>
                  Directly managed a team of 4 engineers. Built an entirely
                  greenfield product offering that represented a paradigm shift
                  for Squarespace. Shipped the single most impactful
                  subscription driver in the Growth Org for the year 2022.
                </p>
              </>
            ),
          },
          {
            date: "2021",
            description: (
              <>
                <strong>
                  Team Lead, Conversion @ <SqspLink />.
                </strong>
                <p>
                  Directly managed a team of 3 engineers. Led the ground-up
                  rewrite of the frontend and backend of the Template Store at
                  Squarespace, a critical-path experience for every user.
                  Delivered a 60x improvement to key metrics including
                  lighthouse score and TTI. Established a firm and scalable
                  foundation for conducting A/B testing and data collection.
                </p>
              </>
            ),
          },
          {
            date: "2019",
            description: (
              <>
                <strong>
                  Sr. Software Engineer, Trial Experience @ <SqspLink />.
                </strong>
                <p>
                  Same mission, more responsibility and ownership of projects
                  end to end.
                </p>
              </>
            ),
          },
          {
            date: "2018",
            description: (
              <>
                <strong>
                  Software Engineer, Trial Experience @ <SqspLink />.
                </strong>
                <p>
                  Optimizing user's first touchpoints with the CMS product.
                  Focus on onboarding initiatives and automations for the most
                  common website setup tasks. Built a unifying abstraction over
                  Squarespace template "frameworks" which enabled onboarding
                  flows to be written once and interoperable across multiple
                  product offerings.
                </p>
              </>
            ),
          },
          {
            date: "2018",
            description: (
              <>
                <strong>
                  Frontend Engineer @{" "}
                  <components.a href="https://www.ycombinator.com/companies/breaker">
                    Breaker
                  </components.a>
                  .
                </strong>
                <p>
                  <em>Breaker was acquired by Twitter in 2021</em>. <br />{" "}
                  Breaker was a podcast publishing, listening and discovery
                  application with an emphasis on social features. I Worked with
                  the founding team as the sole frontend engineer on the Breaker
                  web product. Helped build tools for podcast creators, podcast
                  player, profile pages, discovery dashboard, and landing page.
                </p>
              </>
            ),
          },
          {
            date: "2017",
            description: (
              <>
                <strong>
                  Frontend Engineer @{" "}
                  <components.a href="https://techcrunch.com/2014/10/28/reserve-from-startup-studio-expa-makes-restaurant-reservations-easier-than-ever/">
                    Reserve
                  </components.a>
                  .
                </strong>
                <p>
                  <em>Reserve was acquired by Resy in 2018</em>. <br /> Reserve
                  was a restaurant management, reservations and client CRM
                  platform. As one of three frontend engineers, I was
                  responsible for all web frontends, including floor/table
                  management, customer CRM, and discovery features.
                </p>
              </>
            ),
          },
          {
            date: "2016",
            description: (
              <>
                <strong>
                  Tech Lead, Mobile Web @{" "}
                  <components.a href="https://www.forbes.com">
                    Forbes
                  </components.a>
                  .
                </strong>
                <p>
                  Led greenfield initiative for ground-up rewrite of our mobile
                  web article experience inspired by Snapchat discovery and
                  Instagram stories.
                </p>
              </>
            ),
          },
        ]}
      />
    </section>
  );
}
