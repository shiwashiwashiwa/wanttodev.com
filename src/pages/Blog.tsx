import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { ContactForm } from "../components/ContactForm";
import { LazyImage } from "../components/LazyImage";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { blogData, BlogCategory, BLOG_CATEGORIES } from "../data/blog";
import { formatBlogDate } from "../lib/utils";

export default function Blog() {
  useDocumentTitle("技術ブログ");
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | "すべて">("すべて");

  // 公開済みの記事のみをフィルタリング
  const publishedPosts = blogData.filter((post) => post.isPublished);

  // カテゴリでフィルタリング
  const filteredPosts =
    selectedCategory === "すべて"
      ? publishedPosts
      : publishedPosts.filter((post) =>
          post.category.includes(selectedCategory)
        );

  // 日付でソート（新しい順）
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="flex min-h-screen flex-col relative">
      <section className="container max-w-6xl py-10 sm:py-20">
        <div className="mb-8 md:mb-16">
          <h2>
            BLOG
            <span>技術ブログ</span>
          </h2>
          <p className="text-center mt-4">
            学んだ技術や知見をメモ用に残しています。
          </p>
        </div>

        <div>
          <div className="flex flex-wrap gap-2 md:gap-3 mb-16 md:mb-20">
            {(["すべて", ...BLOG_CATEGORIES] as const).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-xs md:text-sm px-3 md:px-5 py-1 md:py-1.5 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary-500 hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/50 hover:scale-105"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:scale-105 hover:shadow-md"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {sortedPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 mb-4">記事がまだありません</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8 mb-28 md:mb-40">
              {sortedPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="backdrop-blur-sm overflow-hidden transition-all duration-300 group block bg-gray-800/30 p-4 hover:bg-gray-800/50 hover:shadow-lg hover:shadow-primary-500/20 hover:-translate-y-1 border border-gray-700/50 hover:border-primary-500/50"
                >
                  <div className="mb-4 aspect-[8/5] overflow-hidden relative">
                    {post.thumbnail ? (
                      <>
                        <LazyImage
                          src={post.thumbnail}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <img src="/images/no-image.webp" alt="" />
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="mb-2">
                      <div className="flex flex-wrap gap-2">
                        {post.category.map((cat, index) => (
                          <span
                            key={index}
                            className="text-xs md:text-sm text-primary-500 border-b border-transparent hover:border-primary-500 cursor-pointer transition-all duration-200 hover:text-primary-400"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setSelectedCategory(cat);
                            }}
                          >
                            #{cat}
                          </span>
                        ))}
                      </div>
                    </div>

                    <h3 className="text-lg md:text-xl group-hover:text-primary-500 transition-colors duration-300 mb-2">
                      {post.title}
                    </h3>

                    <p className="text-sm text-gray-400 mb-3 line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                      <time dateTime={post.date}>
                        {formatBlogDate(post.date)}
                      </time>
                      {post.tags.length > 0 && (
                        <div className="flex gap-1">
                          {post.tags.slice(0, 2).map((tag, index) => (
                            <span key={index} className="group-hover:text-primary-400 transition-colors duration-300">#{tag}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div className="text-center mb-16 md:mb-20">
            <Link to="/">
              <Button variant="outline">Back to TOP</Button>
            </Link>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}

