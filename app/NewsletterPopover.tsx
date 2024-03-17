"use client";
import * as Popover from "@radix-ui/react-popover";
import { ArrowIcon } from "components/icons";
import { usePlausible } from "next-plausible";

function CloseIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

export default function NewsletterPopover() {
  const plausible = usePlausible();

  return (
    <Popover.Root>
      <Popover.Trigger
        asChild
        onClick={() => {
          plausible("click", {
            props: {
              destination: "newsletter",
            },
          });
        }}
      >
        <button className="flex items-center hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200 transition-all">
          <p className="h-7 mr-2">get notified for new posts</p>
          <ArrowIcon />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="flex items-center w-full h-full text-center bg-neutral-100 dark:bg-[#212330] px-5 py-6 rounded-lg flex-col shadow-lg"
          sideOffset={5}
        >
          <h3 className="text-left text-lg font-bold">Coming Soon!</h3>
          <p className="text-left">Thank you for your interest ❤️</p>
          <Popover.Close
            className="h-[1rem] w-[1rem] inline-flex items-center justify-center absolute top-2 right-2"
            aria-label="Close"
          >
            <CloseIcon />
          </Popover.Close>
          <Popover.Arrow className="fill-neutral-100 dark:fill-[#212330]" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
