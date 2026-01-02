import React from "react";

interface AboutSectionProps {
  title: string;
  titleJa: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Aboutページで使用するセクションコンポーネント
 * 統一されたレイアウトを提供
 */
export function AboutSection({
  title,
  titleJa,
  children,
  className = "",
}: AboutSectionProps) {
  return (
    <div className={`flex flex-col md:flex-row gap-8 md:gap-20 ${className}`}>
      <h3 className="md:w-1/6 text-primary-500 text-nowrap">
        {title}
        <span className="block text-sm md:text-base text-gray-300">
          {titleJa}
        </span>
      </h3>
      <div className="md:w-5/6">{children}</div>
    </div>
  );
}

