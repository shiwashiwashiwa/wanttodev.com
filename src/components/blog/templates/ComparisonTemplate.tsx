import React from "react";
import { Blog } from "../../../data/blog";
import { BlogArticleLayout } from "../BlogArticleLayout";
import { Section, SubSection } from "../Section";

interface ComparisonTemplateProps {
  article: Blog;
  children?: React.ReactNode;
}

export const ComparisonTemplate = ({
  article,
  children,
}: ComparisonTemplateProps) => {
  return (
    <BlogArticleLayout
      article={article}
      sectionTitles={article.sectionTitles}
      showTableOfContents={article.showTableOfContents}
      showRandomArticles={article.showRandomArticles}
      showCategoryList={article.showCategoryList}
      showCta={article.showCta}
      showBackToBlog={article.showBackToBlog}
    >
      {children}
    </BlogArticleLayout>
  );
};
