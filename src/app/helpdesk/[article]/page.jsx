import ArticleDetails from "@/components/helpDesk/article/ArticleDeatils";

const ArticlePage = async ({ params }) => {
  return (
    <>
      <ArticleDetails params={await params} />
    </>
  );
};

export default ArticlePage;
