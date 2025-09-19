import { Link } from "react-router-dom";
import { Blog } from "../../data/blog";

interface RelatedArticleProps {
  article: Blog;
}

export const RelatedArticle = ({ article }: RelatedArticleProps) => {
  return (
    <div className="flex justify-center mt-10 md:mt-20">
      <div className="bg-white/50 inline-block px-5 xs:px-10 md:px-14 py-4">
        <p>
          関連記事 :
          <span className="hover:text-yellow-300 mx-2">
            <Link
              to={`/blog/${article.slug}`}
              className="border-b border-gray-900 hover:border-yellow-300 transition-colors"
            >
              {article.title}
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};
