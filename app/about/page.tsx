import {
  ArrowIcon,
  GitHubIcon,
  TwitterIcon,
  YoutubeIcon,
} from "components/icons";
import { components } from "components/mdx";
import { Metadata } from "next";
import Image from "next/image";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About",
};

const Button: React.FC<{ href: string; children: ReactNode }> = ({
  href,
  children,
}) => {
  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={href}
      className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 dark:bg-[#212330] hover:bg-neutral-100 hover:dark:bg-transparent transition-all justify-between"
    >
      <div className="flex items-center">{children}</div>
      <ArrowIcon />
    </a>
  );
};

export default function AboutPage() {
  const cn =
    "text-neutral-800 dark:text-neutral-200 prose prose-quoteless prose-neutral dark:prose-invert my-[1.25rem]";
  return (
    <section>
      <h1 className="font-bold text-5xl font-serif m-0">About</h1>
      <h2 className="my-5 text-neutral-800 text-2xl dark:text-neutral-200">
        Hey! I'm Tom.
      </h2>
      <p className={cn}>
        but you probably already knew that, since you're on my site.
      </p>
      <p className={cn}>
        I'm an Engineering Leader with{" "}
        <strong>over a decade of experience</strong> shipping quality software
        that delights users and drives meaningful business impact.
      </p>
      <p className={cn}>
        I'm currently an <strong>Engineering Team Manager</strong> at{" "}
        <components.a href="https://www.squarespace.com">
          Squarespace
        </components.a>{" "}
        leading our Growth Activation team. I love working at Squarespace
        because I get to help build tools that{" "}
        <strong>democratize the web</strong> and enable anyone to build an
        online presence in a beautiful and cohesive way.
      </p>
      <p className={cn}>
        I've worked as a software engineer within a{" "}
        <strong>variety of industries</strong>, from large legacy media
        companies to tiny scrappy startups. I've participated in successful
        exits, most recently having had the pleasure of helping to bring
        Squarespace public in 2021.
      </p>
      <p className={cn}>
        I'm really interested in working with thoughtful and talented teams,
        building products that improve the lives and livelihoods of regular
        people in meaningful ways. If that sounds like you, I'm always open to
        hearing about new opportunities.
      </p>
      <div className={cn}>
        <ul>
          <li>
            <components.a href="/timeline">Professional timeline</components.a>
          </li>
          <li>
            <components.a href="/uses">Software I use</components.a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:gap-2">
        <Button href="https://twitter.com/tconroy">
          <TwitterIcon />
          <div className="ml-3">Twitter</div>
        </Button>

        <Button href="https://github.com/tconroy">
          <GitHubIcon />
          <div className="ml-3">GitHub</div>
        </Button>
      </div>
    </section>
  );
}
