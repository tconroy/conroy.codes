import clsx from "clsx";
import {
  ArrowIcon,
  GitHubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "components/icons";
import { components } from "components/mdx";
import { Metadata } from "next";
import Image from "next/image";
import { ReactNode } from "react";
import leafPicture from "./me-leaf.jpg";

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
      "my-5 text-neutral-800 text-xl dark:text-neutral-200",
      props.className
    )}
  />
);

const SocialButton = ({ href, icon, label }) => (
  <Button href={href}>
    {icon}
    <div className="ml-3">{label}</div>
  </Button>
);

const socialButtons = [
  {
    href: "https://www.linkedin.com/in/thomasconroy/",
    icon: <LinkedinIcon />,
    label: "LinkedIn",
  },
  {
    href: "https://twitter.com/tconroy",
    icon: <TwitterIcon />,
    label: "Twitter",
  },
  {
    href: "https://github.com/tconroy",
    icon: <GitHubIcon />,
    label: "GitHub",
  },
];

export default function AboutPage() {
  return (
    <section>
      <Title>About</Title>
      <Heading>
        Hey! I'm Tom. but you probably already know that, since you somehow
        found your way to my corner of the web.
      </Heading>
      <Image
        className="rounded-lg"
        height={550}
        src={leafPicture}
        alt="It's me! Or is it? 🤔"
        placeholder="blur"
      />
      <Paragraph>
        I'm an Engineering Leader with over a decade of experience shipping
        quality software that delights users and drives meaningful business
        impact.
      </Paragraph>
      <Paragraph>
        I'm always interested in working with talented people and teams, solving
        complex problems and building products that improve the lives and
        livelihoods of everyday people. If that sounds like you, I'd love to
        connect.
      </Paragraph>
      <Paragraph>
        When I'm not building things, you can find me exploring NYC with{" "}
        <components.a href="https://mollykeane.net">my partner</components.a>,
        playing Indie PC games, exploring New York City, or reading a good book
        on the couch with my cat.
      </Paragraph>
      <Paragraph as="div">
        <ul>
          <li>
            <components.a href="/work">Work history</components.a>
          </li>
          <li>
            <components.a href="/uses">Software I use</components.a>
          </li>
        </ul>
      </Paragraph>
      <div className="flex flex-col gap-2 md:flex-row md:gap-2">
        {socialButtons.map((button) => (
          <SocialButton key={button.href} {...button} />
        ))}
      </div>
    </section>
  );
}
