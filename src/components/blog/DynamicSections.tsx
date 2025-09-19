import React from "react";
import { Section } from "./Section";
import { SectionConfig } from "../../data/blog";

interface DynamicSectionsProps {
  sections: SectionConfig[];
  articleId: string;
}

export const DynamicSections = ({
  sections,
  articleId,
}: DynamicSectionsProps) => {
  const renderSection = (section: SectionConfig, index: number) => {
    const sectionId = section.id || `section${String(index).padStart(2, "0")}`;

    switch (section.type) {
      case "text":
        return (
          <Section key={sectionId} id={sectionId} title={section.title}>
            <div className="space-y-4 md:space-y-8">
              {section.content && (
                <div dangerouslySetInnerHTML={{ __html: section.content }} />
              )}
            </div>
          </Section>
        );

      case "image":
        return (
          <Section key={sectionId} id={sectionId} title={section.title}>
            <div className="flex justify-center mx-auto mb-10 md:mb-16">
              <div className="relative">
                <img
                  src={section.props?.src || ""}
                  alt={section.props?.alt || ""}
                  width={section.props?.width || 1000}
                  height={section.props?.height || 1000}
                  className="object-contain"
                />
              </div>
            </div>
            {section.content && (
              <div dangerouslySetInnerHTML={{ __html: section.content }} />
            )}
          </Section>
        );

      case "video":
        return (
          <Section key={sectionId} id={sectionId} title={section.title}>
            <div className="relative w-full pb-[56.25%] my-5 md:my-10">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={section.props?.src || ""} type="video/mp4" />
              </video>
            </div>
            {section.content && (
              <div dangerouslySetInnerHTML={{ __html: section.content }} />
            )}
          </Section>
        );

      case "table":
        return (
          <Section key={sectionId} id={sectionId} title={section.title}>
            <div className="overflow-x-auto relative border border-gray-500">
              <div className="min-w-[600px] md:min-w-[1024px]">
                <table className="w-full table-fixed [&_th]:border [&_th]:border-gray-500 [&_td]:border [&_td]:border-gray-500 [&_th]:p-2.5 [&_td]:p-2.5 [&_th]:md:p-4 [&_td]:md:p-4">
                  <tbody>
                    {section.props?.rows?.map((row: any, rowIndex: number) => (
                      <tr key={rowIndex}>
                        {row.map((cell: any, cellIndex: number) => (
                          <td
                            key={cellIndex}
                            className={
                              cellIndex === 0
                                ? "sticky left-0 bg-white/20 z-10"
                                : ""
                            }
                            dangerouslySetInnerHTML={{ __html: cell }}
                          />
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {section.content && (
              <div dangerouslySetInnerHTML={{ __html: section.content }} />
            )}
          </Section>
        );

      case "list":
        return (
          <Section key={sectionId} id={sectionId} title={section.title}>
            <ul className="list-disc ml-5 md:ml-10 space-y-2 md:space-y-4">
              {section.props?.items?.map((item: any, itemIndex: number) => (
                <li
                  key={itemIndex}
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </ul>
            {section.content && (
              <div dangerouslySetInnerHTML={{ __html: section.content }} />
            )}
          </Section>
        );

      case "custom":
        // カスタムコンポーネントの場合は、propsで指定されたコンポーネントをレンダリング
        const CustomComponent = section.props?.component;
        if (CustomComponent) {
          return (
            <Section key={sectionId} id={sectionId} title={section.title}>
              <CustomComponent {...section.props} />
            </Section>
          );
        }
        return null;

      default:
        return (
          <Section key={sectionId} id={sectionId} title={section.title}>
            <div dangerouslySetInnerHTML={{ __html: section.content || "" }} />
          </Section>
        );
    }
  };

  return <>{sections.map((section, index) => renderSection(section, index))}</>;
};
