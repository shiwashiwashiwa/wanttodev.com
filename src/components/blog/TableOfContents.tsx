import React from "react";
import { Link } from "react-router-dom";

type TableOfContentsProps = {
  items: string[];
};

export const TableOfContents = ({ items }: TableOfContentsProps) => {
  return (
    <section className="index w-11/12 xs:w-5/6 sm:w-2/3 lg:w-3/5 mx-auto bg-white/60 backdrop-blur-sm px-6 py-8 md:py-12 md:px-16">
      <p className="text-xl md:text-2xl text-center font-semibold mb-3 md:mb-6">
        目 次
      </p>
      <ul className="list-decimal ml-5 space-y-4 sm:space-y-6">
        {items.map((title, index) => (
          <li key={index}>
            <Link to={`#section${String(index).padStart(1, "0")}`}>
              <span>{title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
