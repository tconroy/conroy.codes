import "server-only";

import { Octokit } from "@octokit/rest";
import { queryBuilder } from "lib/planetscale";
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

export const getWeather = cache(async () => {
  const response = await fetch(`http://localhost:3001/api/weather`);
  const data = await response.json();
  return data;
});

export async function getTweetCount() {
  if (!process.env.TWITTER_API_TOKEN) {
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
  return Number(data.public_metrics.tweet_count);
}

export const getStarCount = cache(async () => {
  return 0;
  // const octokit = new Octokit({
  //   auth: process.env.GITHUB_TOKEN,
  // });

  // const req = await octokit.request("GET /repos/{owner}/{repo}", {
  //   owner: "leerob",
  //   repo: "leerob.io",
  // });

  // return req.data.stargazers_count;
});
