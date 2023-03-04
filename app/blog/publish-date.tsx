export default function PublishDate({ publishedAt }: { publishedAt: string }) {
  return (
    <time className="font-mono text-sm text-neutral-500 tracking-tighter">
      {publishedAt
        ? `${new Date(publishedAt).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}`
        : "​"}
    </time>
  );
}
