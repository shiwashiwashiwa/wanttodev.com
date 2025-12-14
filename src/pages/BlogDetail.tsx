import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "../components/Button";
import Cta from "../components/Cta";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { blogData, BlogCategory } from "../data/blog";
import { formatBlogDate } from "../lib/utils";

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogData.find((p) => p.slug === slug && p.isPublished);

  useDocumentTitle(post ? post.title : "記事が見つかりません");

  // HTMLコンテンツを処理（コードブロック内のHTMLを正しくエスケープ）
  const processedContent = useMemo(() => {
    if (!post) return "";
    
    // <pre><code>タグ内のHTMLエンティティを正しく処理
    let content = post.content;
    
    // <pre><code>...</code></pre>内のコンテンツを保護
    content = content.replace(
      /<pre><code>([\s\S]*?)<\/code><\/pre>/g,
      (match, codeContent) => {
        // コードブロック内のHTMLエンティティをさらにエスケープ
        const escaped = codeContent
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#39;');
        return `<pre><code>${escaped}</code></pre>`;
      }
    );
    
    return content;
  }, [post]);

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col relative">
        <section className="container max-w-6xl py-10 sm:py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">記事が見つかりません</h1>
            <p className="text-gray-300 mb-8">指定された記事は存在しません。</p>
            <Link to="/blog">
              <Button variant="outline">ブログ一覧に戻る</Button>
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col relative">
      <section className="container max-w-6xl py-10 sm:py-20">
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-400">
            <li>
              <Link to="/" className="hover:text-primary-400 transition-colors">
                Top
              </Link>
            </li>
            <li className="text-gray-600">/</li>
            <li>
              <Link
                to="/blog"
                className="hover:text-primary-400 transition-colors"
              >
                Blog
              </Link>
            </li>
            <li className="text-gray-600">/</li>
            <li className="truncate max-w-xs">{post.title}</li>
          </ol>
        </nav>

        <article className="space-y-8 md:space-y-12">
          {/* ヘッダー情報 */}
          <header className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {post.category.map((cat: BlogCategory, index: number) => (
                <Link
                  key={index}
                  to={`/blog?category=${cat}`}
                  className="text-xs md:text-sm text-primary-500 border-b border-transparent hover:border-primary-500"
                >
                  #{cat}
                </Link>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl text-start !mt-0 after:!hidden">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {post.thumbnail && (
              <div className="mt-6">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            )}
          </header>

          {/* 記事本文 */}
          <div className="max-w-none">
            <div
              className="blog-content prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: processedContent }}
            />
          </div>

          {/* 使用技術 */}
          {post.technologies && post.technologies.length > 0 && (
            <div className="flex flex-col md:flex-row gap-8 md:gap-20 pt-8 border-t border-gray-700">
              <h3 className="md:w-1/6 text-primary-500 text-nowrap">
                Technology
                <span className="block text-sm md:text-base text-gray-100">
                  使用技術
                </span>
              </h3>
              <div className="md:w-5/6 flex flex-wrap gap-3">
                {post.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* ナビゲーション */}
          <div className="flex justify-center pt-8">
            <Link to="/blog">
              <Button variant="outline">Back to Blog</Button>
            </Link>
          </div>
        </article>
      </section>

      <Cta />
    </div>
  );
}

