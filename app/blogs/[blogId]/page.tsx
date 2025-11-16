import Link from "next/link";
import { ArrowLeftCircleIcon } from "@heroicons/react/16/solid";
import { getArticleData } from "@/lib/articles";

const Article = async ({params}:{params:{slug:string}})=>{
    const articleData = await getArticleData(params.slug);
    return(
        <section className="mx-auto w-10/12 md:w-1/2 mt-20 flex flex-col gap-5">
            <div className="flex justify-between font-poppins">
<Link href={"/"} className="flex flex-row gap-1 place-items-center">
                <ArrowLeftCircleIcon className="w-6 h-6" />
                <span>Back</span>

</Link>

<p>{articleData.date}</p>
            </div>
            <article dangerouslySetInnerHTML={{__html: articleData.contentHtml}} />
        </section>
    )
}
export default Article