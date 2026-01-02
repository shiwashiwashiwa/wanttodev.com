import React from "react";

interface AboutInfoBoxProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Aboutページで使用する情報を強調表示するボックスコンポーネント
 */
export function AboutInfoBox({
  title,
  children,
  className = "",
}: AboutInfoBoxProps) {
  return (
    <div
      className={`p-4 bg-gray-800/50 rounded-lg border border-primary-500/20 ${className}`}
    >
      <h5 className="text-primary-400 mb-3 font-semibold">{title}</h5>
      {children}
    </div>
  );
}

