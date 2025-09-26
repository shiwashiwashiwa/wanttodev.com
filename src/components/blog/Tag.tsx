import React from "react";

type TagProps = {
  label: string;
};

export const Tag = ({ label }: TagProps) => {
  return (
    <span className="bg-primary-500/60 text-gray-950 text-[0.8em] md:!text-xs px-1.5 py-1 rounded mr-1.5">
      {label}
    </span>
  );
};
