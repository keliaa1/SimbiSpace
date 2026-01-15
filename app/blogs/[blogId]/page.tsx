import Link from "next/link";
import { ArrowLeftCircleIcon } from "@heroicons/react/16/solid";
import { getArticleData } from "@/lib/articles";
import CommentSection from "@/components/CommentSection";

const Article = async ({ params }: { params: Promise<{ blogId: string }> }) => {
  const { blogId } = await params; // Await the whole params Promise first
  const articleData = await getArticleData(blogId); // Now use the resolved string

  console.log("Resolved blogId:", blogId); // This will now log correctly (e.g., "my-article")

  return (
    <section className="mx-auto w-10/12 md:w-1/2 mt-20 flex flex-col gap-5 pb-20">
      <div className="flex justify-between font-poppins">
        <Link href={"/blogs"} className="flex flex-row gap-1 place-items-center">
          <ArrowLeftCircleIcon className="w-6 h-6" />
          <span>Back</span>
        </Link>
        <p>{articleData.date}</p>
      </div>
      <article className="article" dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />

      <CommentSection blogId={blogId} />
    </section>
  );
};

export default Article;