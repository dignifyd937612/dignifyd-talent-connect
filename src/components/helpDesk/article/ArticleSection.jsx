const ArticleSection = ({ heading, content }) => {
  return (
    <section className="mb-14">
      <h2 className="mb-5 text-3xl font-semibold text-gray-900 dark:text-white">
        {heading}
      </h2>

      <p className="text-lg leading-9 text-gray-600 dark:text-gray-400">
        {content}
      </p>
    </section>
  );
};

export default ArticleSection;
