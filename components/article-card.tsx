import Link from "next/link";
import { ArrowIcon } from "./icons";

interface Props {
  title: string;
  summary: string;
  slug: string;
}

const MoreIcon = () => {
  return <span className="text-lg">»</span>;
};

export default function ArticleCard({ title, summary, slug }: Props) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="flex w-full dark:bg-[#212330] max-w-[650px] border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 hover:dark:bg-transparent transition-all justify-between shadow-md"
    >
      <div className="flex-row items-center">
        <h3 className="block text-lg font-bold">{title}</h3>
        <p className="block text-base">{summary}</p>
      </div>
      <MoreIcon />
    </Link>
  );
}
