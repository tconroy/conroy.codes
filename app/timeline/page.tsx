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
                  <em>Reserve was acquired by Resy in 2018</em>. <br />
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
              </>
            ),
          },
        ]}
      />
    </section>
  );
}
