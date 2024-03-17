"use client";

import { ArrowIcon } from "components/icons";
import { usePlausible } from "next-plausible";

export default function TwitterLink() {
  const plausible = usePlausible();

  return (
    <a
      className="flex items-center hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200 transition-all"
      rel="noopener noreferrer"
      target="_blank"
      onClick={() => {
        plausible("click", {
          props: {
            destination: "my-twitter",
          },
        });
      }}
      href="https://twitter.com/intent/user?screen_name=tconroy"
    >
      <p className="h-7 mr-2">Follow on X</p>
      <ArrowIcon />
    </a>
  );
}
