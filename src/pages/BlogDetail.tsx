import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { BlogArticleLayout } from "../components/blog/BlogArticleLayout";
import { DynamicSections } from "../components/blog/DynamicSections";
import { blogData } from "../data/blog";

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();

  // slugに基づいて記事を検索
  const article = blogData.find((post) => post.slug === slug);

  // 記事が見つからない場合は404ページにリダイレクト
  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  // セクションタイトルを抽出（目次用）
  const sectionTitles =
    article.sections?.map((section) => section.title).filter(Boolean) || [];

  return (
    <BlogArticleLayout
      article={article}
      sectionTitles={sectionTitles}
      showTableOfContents={true}
      showRandomArticles={true}
      showCategoryList={true}
      showCta={true}
      showBackToBlog={true}
    >
      {/* 記事の動的セクションをレンダリング */}
      {article.sections && (
        <DynamicSections sections={article.sections} articleId={article.id} />
      )}
    </BlogArticleLayout>
  );
}
