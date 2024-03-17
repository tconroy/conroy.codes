import "server-only";
import { cache } from "react";

export const getBlogViews = cache(async () => {
  return 0;
  // if (!process.env.TWITTER_API_TOKEN) {
  //   return 0;
  // }

  // const data = await queryBuilder
  //   .selectFrom("views")
  //   .select(["count"])
  //   .execute();

  // return data.reduce((acc, curr) => acc + Number(curr.count), 0);
});

export async function getTweetCount() {
  if (!process.env.TWITTER_API_TOKEN) {
    console.warn("TWITTER_API_TOKEN not set!");
    return 0;
  }

  const response = await fetch(
    `https://api.twitter.com/2/users/by/username/tconroy?user.fields=public_metrics`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_API_TOKEN}`,
      },
    }
  );

  const { data } = await response.json();
  return Number(data?.public_metrics?.tweet_count);
}
