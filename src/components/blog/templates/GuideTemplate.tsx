import React from "react";
import { Blog } from "../../../data/blog";
import { BlogArticleLayout } from "../BlogArticleLayout";
import { Section, SubSection } from "../Section";

interface GuideTemplateProps {
  article: Blog;
  children?: React.ReactNode;
}

export const GuideTemplate = ({ article, children }: GuideTemplateProps) => {
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
