"use client";

import { useEffect, useState } from "react";
import useSWR from "swr";

type PostView = {
  slug: string;
  count: string;
};

async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

const useViewCount = (slug: string, trackView: boolean) => {
  return {
    views: 0,
  };
  // const [hasTracked, setHasTracked] = useState(false);
  // const { data, error } = useSWR<PostView[]>("/api/views", fetcher);

  // const viewsForSlug =
  //   !error && data && data?.find((view) => view.slug === slug);
  // const views = new Number(viewsForSlug?.count || 0);

  // useEffect(() => {
  //   const registerView = () =>
  //     fetch(`/api/views/${slug}`, {
  //       method: "POST",
  //     });

  //   if (trackView && !hasTracked) {
  //     registerView();
  //     setHasTracked(true);
  //   }
  // }, [slug, hasTracked]);

  // return {
  //   views,
  // };
};

export default function ViewCounter({
  slug,
  trackView,
}: {
  slug: string;
  trackView: boolean;
}) {
  const { views } = useViewCount(slug, trackView);

  return (
    <p className="font-mono text-sm text-neutral-500 tracking-tighter">
      {views ? `${views.toLocaleString()} views` : "​"}
    </p>
  );
}
