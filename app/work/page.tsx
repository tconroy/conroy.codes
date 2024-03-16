import clsx from "clsx";
import { components } from "components/mdx";
import { Metadata } from "next";
import Image, { StaticImageData } from "next/image";
import forbesLogo from "./logos/forbes-logo.jpeg";
import squarespaceLogo from "./logos/squarespace-logo.jpeg";
import breakerLogo from "./logos/breaker-logo.jpeg";
import reserveLogo from "./logos/reserve-logo.jpeg";
import ritLogo from "./logos/rit-logo.jpeg";

export const metadata: Metadata = {
  title: "Work",
  description: "Places I've been and things I've done.",
};

const Paragraph = (props) => {
  const Node = props.as ? props.as : "p";
  return (
    <Node
      {...props}
      className={clsx(
        "text-neutral-800 dark:text-neutral-200 prose prose-quoteless prose-neutral dark:prose-invert my-[1.25rem]",
        props.className
      )}
    />
  );
};

const Title = (props) => (
  <h1
    {...props}
    className={clsx("font-bold text-5xl font-serif m-0", props.className)}
  />
);

const Heading = (props) => (
  <h2
    {...props}
    className={clsx(
      "mb-1 text-neutral-800 text-xl dark:text-neutral-200 font-serif flex items-center",
      props.className
    )}
  />
);

const Subheading = (props) => (
  <p
    {...props}
    className={clsx(
      "text-neutral-800 text-sm dark:text-neutral-400",
      props.className
    )}
  />
);

const Section = ({
  heading,
  subheading,
  children,
  withRule = true,
  logo,
}: {
  heading?: string;
  subheading?: string;
  children?: React.ReactNode;
  withRule?: boolean;
  logo?: StaticImageData;
}) => (
  <section className="my-5">
    {heading ? (
      <Heading>
        {logo ? (
          <Image
            className="rounded-sm mr-2"
            src={logo}
            alt={heading}
            width={28}
            height={28}
          />
        ) : null}
        {heading}
      </Heading>
    ) : null}
    {subheading ? <Subheading>{subheading}</Subheading> : null}
    {children}
    {withRule && <components.hr />}
  </section>
);

export default function WorkPage() {
  return (
    <section>
      <Title>Work</Title>
      <Section withRule={true}>
        <p className="text-xl leading-normal">
          I am on a mission to build world class software that delights users
          and solves meaningful business problems. Below is a recap of my
          journey so far.
        </p>
      </Section>
      <Section
        logo={squarespaceLogo}
        heading="Squarespace"
        subheading="Engineering Team Manager, Activation"
      >
        <Paragraph>
          I lead the Activation team, which is responsible for the first
          experience of Squarespace customers. We build features that help
          customers get started with Squarespace, and we work to ensure that
          their first experience is delightful.
        </Paragraph>
        <Paragraph>
          Prior to my role as an Engineering Team Manager, I held the following
          roles focused around growth, customer acquisition, and early customer
          success:
        </Paragraph>
        <ul className="list-disc ml-6">
          <li>Team Lead, Custom Starting Points</li>
          <li>Team Lead, Conversion</li>
          <li>Senior Software Engineer II, Conversion</li>
          <li>Senior Software Engineer I, Trial Experience</li>
          <li>Software Engineer, Trial Experience</li>
        </ul>
      </Section>
      <Section
        logo={breakerLogo}
        heading="Breaker"
        subheading="Frontend Engineer"
      >
        <Paragraph>
          I was the sole frontend engineer at Breaker, a social podcasting app
          and member of{" "}
          <components.a href="https://www.ycombinator.com/companies?batch=W17">
            YCombinator batch W17
          </components.a>
          . I built and maintained the frontend for the suite of Breaker web
          applications, including the landing page, account dashboard, web
          podcast player, content authoring tools and the frontend for social
          controls (i.e commenting, liking, sharing, subscribing).
        </Paragraph>
        <Paragraph>
          The Breaker team were acquired by Twitter in 2019.
        </Paragraph>
      </Section>
      <Section
        logo={reserveLogo}
        heading="Reserve"
        subheading="Senior Frontend Engineer"
      >
        <Paragraph>
          Reserve was a dining concierge app which provided both consumer-facing
          reservation booking and restaurant-facing table management software
          for both iOS and the web. I worked on a team of three to build and
          maintain all of our web applications.
        </Paragraph>
        <Paragraph>Reserve was acquired by Resy in 2018.</Paragraph>
      </Section>
      <Section
        logo={forbesLogo}
        heading="Forbes"
        subheading="Team Lead, Mobile Web"
      >
        <Paragraph>
          At Forbes, I contributed to a major rewrite of the Interstitial and
          Article pages, core components of the Forbes.com website.
        </Paragraph>
        <Paragraph>
          Later, I stepped into the role of Team Lead for Mobile Web
          initiatives. I lead the redesign of Forbes' mobile web experience,
          building one of the first major Progressive Web Applications (PWA)
          released in 2017. My work was featured in{" "}
          <components.a href="https://www.youtube.com/watch?v=JmC0xkCMFCE">
            Google Chrome Dev Summit 2017.
          </components.a>{" "}
          (Let me know if you can spot me in the video!)
        </Paragraph>
        <Paragraph>
          Prior to my role as Mobile Web Team Lead, I held the following roles
        </Paragraph>
        <ul className="list-disc ml-6">
          <li>Frontend Engineer, Product Team</li>
        </ul>
      </Section>
      <Section
        logo={ritLogo}
        heading="Rochester Institute of Technology"
        subheading="Web Applications Developer"
      >
        <Paragraph>
          I worked as the sole Web Applications Developer for the Department of
          Assessment, Research & Technical Services at RIT. Developed and
          maintained internal tooling systems for use by department staff.
        </Paragraph>
        <Paragraph>
          I Maintained and expanded existing web portals and applications used
          by thousands of students across campus. Worked in a full stack
          capacity, primarily working with PHP, MySQL, and jQuery.
        </Paragraph>
      </Section>
    </section>
  );
}
