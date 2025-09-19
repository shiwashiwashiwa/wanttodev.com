import { Link } from "react-router-dom";
import { Blog } from "../../data/blog";

interface CategoryListProps {
  articles: Blog[];
}

interface CategoryCount {
  name: string;
  count: number;
  slug: string;
}

export const CategoryList = ({ articles }: CategoryListProps) => {
  // 全記事からカテゴリを抽出し、カウントする
  const categoryMap = new Map<string, number>();

  articles.forEach((article) => {
    article.category.forEach((cat) => {
      const count = categoryMap.get(cat) || 0;
      categoryMap.set(cat, count + 1);
    });
  });

  // カテゴリを配列に変換し、記事数でソート
  const categories: CategoryCount[] = Array.from(categoryMap.entries())
    .map(([name, count]) => ({
      name,
      count,
      slug: name.toLowerCase().replace(/\s+/g, "-"), // カテゴリ名をスラッグに変換
    }))
    .sort((a, b) => b.count - a.count); // 記事数が多い順にソート

  // 「すべて」オプションを先頭に追加
  const allCategories: CategoryCount[] = [
    {
      name: "すべて",
      count: articles.filter((article) => article.isVisible).length,
      slug: "all",
    },
    ...categories,
  ];

  if (allCategories.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      <h5 className="text-sm md:text-lg !font-semibold font-mincho !text-yellow-300 !mb-0">
        カテゴリ
      </h5>

      <div className="space-y-1">
        {allCategories.map((category) => (
          <Link
            key={category.name}
            to={
              category.slug === "all"
                ? "/blog"
                : `/blog?category=${encodeURIComponent(category.name)}`
            }
            className="flex items-center justify-between group hover:bg-white/10 transition-colors duration-300 p-3"
          >
            <span className=" group-hover:text-yellow-300 transition-colors duration-300">
              {category.name}
            </span>
            <span className="text-gray-400 text-sm bg-gray-300/10 px-2 py-0.5 rounded-full">
              {category.count}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};
