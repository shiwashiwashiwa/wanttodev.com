import { Link } from "react-router-dom";
import { Blog } from "../../data/blog";

interface RandomArticlesProps {
  articles: Blog[];
  currentSlug?: string;
  maxArticles?: number;
}

export const RandomArticles = ({
  articles,
  currentSlug,
  maxArticles = 3,
}: RandomArticlesProps) => {
  // 現在の記事を除外し、ランダムに選択
  const filteredArticles = articles.filter(
    (article) => article.slug !== currentSlug
  );
  const shuffledArticles = [...filteredArticles].sort(
    () => Math.random() - 0.5
  );
  const selectedArticles = shuffledArticles.slice(0, maxArticles);

  if (selectedArticles.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6 mb-10 md:mb-20">
      <h5 className="text-sm md:text-lg !font-semibold font-mincho !text-yellow-300 !mb-0">
        よく見られている記事
      </h5>

      <div className="space-y-3">
        {selectedArticles.map((article) => (
          <Link
            key={article.id}
            to={`/blog/${article.slug}`}
            className="block group hover:bg-white/70 bg-white/10 border-white/20 border border-collapse transition-colors duration-300 p-3"
          >
            <div className="flex items-center gap-2">
              <div className="relative w-20 h-14 flex-shrink-0">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="text-xs md:text-sm group-hover:text-gray-950  transition-colors duration-300 line-clamp-2">
                  {article.title.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < article.title.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </h4>

                {/* <div className="flex items-center gap-2 text-xs text-gray-400">
                  <time dateTime={article.date}>
                    {new Date(article.date).toLocaleDateString("ja-JP", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                </div> */}

                {/* <div className="flex gap-1">
                  {article.category.slice(0, 2).map((cat, index) => (
                    <span
                      key={index}
                      className="bg-yellow-300/40 text-gray-800 font-medium !text-xs px-1.5 py-1 rounded mr-1 text-nowrap"
                    >
                      {cat}
                    </span>
                  ))}
                </div> */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
