"use client";
import Image from "next/image";
import * as HoverCard from "@radix-ui/react-hover-card";

type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
  timestampMS: number;
};

type Props = {
  data: Weather;
};

const path = (filename) => `/svg/weather/${filename}.svg`;

function isDay(timestamp) {
  const date = new Date(timestamp);
  const hour = date.getHours();
  return hour >= 6 && hour < 19; // assuming day is from 6am to 7pm
}

export default function Weather(props: Props) {
  if (!props.data) {
    return null;
  }
  const { data } = props;
  const { id, timestampMS } = data;
  let weather = "clear";
  const time = isDay(timestampMS) ? "day" : "night";

  // thunder
  if (id >= 200 && id < 300) {
    weather = "thunder";
  } else if (id >= 300 && id < 400) {
    weather = "drizzle";
  } else if (id >= 400 && id < 500) {
    // ???
  } else if (id >= 500 && id < 600) {
    weather = "rain";
  } else if (id >= 600 && id < 700) {
    weather = "snow";
  } else if (id >= 700 && id < 800) {
    if (id === 701 /*mist*/) {
      weather = "drizzle";
    }
  } else if (id === 800) {
    weather = "clear";
  } else if (id > 800 && id < 900) {
    weather = "cloudy";
  }
  return (
    <HoverCard.Root>
      <HoverCard.Trigger className="hidden md:block md:-ml-5">
        <Image
          src={path(`${weather}-${time}`)}
          alt={data.description}
          height={96}
          width={96}
          style={{
            width: "6rem",
            height: "6rem",
          }}
          className="inline-block relative"
        />
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content className="shadow-lg">
          <div className="flex items-center w-full h-full text-center bg-neutral-100 dark:bg-[#212330] p-3 rounded-lg flex-col">
            <HoverCard.Arrow className="fill-neutral-100 dark:fill-[#212330]" />
            <p className="block">{`The weather near me right now is: ${data.description}`}</p>
            <p className="block text-sm font-light">
              {`(last updated: ${new Date(
                data.timestampMS
              ).toLocaleTimeString()})`}
            </p>
          </div>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}
