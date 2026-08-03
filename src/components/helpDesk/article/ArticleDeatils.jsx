import ArticleHeader from "./ArticleHeader";
import ArticleContent from "./ArticleContent";
import RelatedArticles from "./RelatedArticles";
import { jobPostingArticles } from "@/data/articles/articles";
import { notFound } from "next/navigation";

const ArticleDetails = async ({ params }) => {
  const article = jobPostingArticles.find(
    (article) => article.slug === params.article,
  );

  article ?? notFound();

  return (
    <main className="mt-10 bg-white dark:bg-black">
      <section className="mx-auto w-full max-w-5xl py-20">
        <ArticleHeader article={article} />

        <ArticleContent article={article} />

        <RelatedArticles relatedArticles={article?.relatedArticles} />
      </section>
    </main>
  );
};

export default ArticleDetails;
