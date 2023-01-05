import Link from "next/link";
import { FC } from "react";

interface Props {
  title: string;
  description: string;
  slug: string;
}

const BlogCard: FC<Props> = ({ title, description, slug }): JSX.Element => {
  return (
    <Link href={"/blogs/" + slug} className="block">
      <div className="bg-green-100 p-2 rounded">
        <h1 className="text-3xl text-gray-900 font-semibold">{title}</h1>
        <p className="text-gray-500 mt-4">{description}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
