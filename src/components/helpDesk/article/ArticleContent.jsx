import ArticleSection from "./ArticleSection";
import ArticleImage from "./ArticleImage";

const ArticleContent = ({ article }) => {
  return (
    <article className="prose prose-lg dark:prose-invert mt-16 max-w-none">
      <article className="prose prose-lg mt-16 max-w-none dark:prose-invert">
        {article.sections.map((section) => (
          <div key={section.id}>
            <ArticleSection
              heading={section.heading}
              content={section.content}
            />

            {section.image && (
              <ArticleImage image={section.image} alt={section.imageAlt} />
            )}
          </div>
        ))}
      </article>
    </article>
  );
};

export default ArticleContent;
