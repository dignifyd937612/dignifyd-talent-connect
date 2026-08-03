import Image from "next/image";

const ArticleImage = ({ image, alt }) => {
  return (
    <div className="my-14 overflow-hidden rounded-3xl border border-gray-200 dark:border-white/10">
      <Image
        src={image}
        alt={alt || "Article"}
        className="w-full object-cover"
      />
    </div>
  );
};

export default ArticleImage;
