import React from "react";
import { Blog, BlogLayout } from "../../../data/blog";
import { GuideTemplate } from "./GuideTemplate";
import { ComparisonTemplate } from "./ComparisonTemplate";
import { CaseStudyTemplate } from "./CaseStudyTemplate";
import { TechnicalTemplate } from "./TechnicalTemplate";

interface TemplateFactoryProps {
  article: Blog;
  children?: React.ReactNode;
}

export const TemplateFactory = ({
  article,
  children,
}: TemplateFactoryProps) => {
  const layout = article.layout || "default";

  switch (layout) {
    case "guide":
      return <GuideTemplate article={article}>{children}</GuideTemplate>;
    case "comparison":
      return (
        <ComparisonTemplate article={article}>{children}</ComparisonTemplate>
      );
    case "case-study":
      return (
        <CaseStudyTemplate article={article}>{children}</CaseStudyTemplate>
      );
    case "technical":
      return (
        <TechnicalTemplate article={article}>{children}</TechnicalTemplate>
      );
    default:
      return <GuideTemplate article={article}>{children}</GuideTemplate>;
  }
};
