"use client";

import { ArrowIcon } from "components/icons";
import { usePlausible } from "next-plausible";

export default function TwitterLink() {
  const plausible = usePlausible();

  return (
    <a
      className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
      rel="noopener noreferrer"
      target="_blank"
      onClick={() => {
        plausible("click", {
          props: {
            destination: "my-twitter",
          },
        });
      }}
      href="https://twitter.com/tconroy"
    >
      <ArrowIcon />
      <p className="h-7">follow me on twitter</p>
    </a>
  );
}
