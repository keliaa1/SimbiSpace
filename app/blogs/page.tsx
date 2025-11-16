import ArticleItemList from "@/components/ArticleListItem";
import { getCategorisedArticles } from "@/lib/articles";
export default function Blogs() {
    const articles = getCategorisedArticles();
    return (
       <section className="mx-auto w-11/12 md:w-1/2 mt-20 flex flex-col gap-16 mb-20">
        <header className="font-CormorantGaramond font-light text-6xl text-neutral-900 text-center">
            <h1>View a list of blogs I created!</h1>

        </header>
        <section className="md:grid md:grid-cols-w  flex flex-col gap-10">
        {articles!==null && Object.keys(articles).map((article)=>(
        <ArticleItemList category={article} articles={articles[article]} key={article} />
    ))}
       </section>
       </section>
    );
}