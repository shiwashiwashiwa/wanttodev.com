import { Link } from "react-router-dom";

interface BreadcrumbProps {
  items: {
    label: string;
    to?: string;
  }[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  const shouldScroll = items.length >= 3 && items[2].label.length >= 20;

  return (
    <nav className="container max-w-7xl pt-16 md:pt-24 overflow-x-auto">
      <ul className="flex items-center gap-2 text-[0.7em] [&_li]:md:text-xs [&_li]:text-gray-300 whitespace-nowrap min-w-max">
        {items.map((item, index) => (
          <li
            key={index}
            className={
              shouldScroll && index === 2
                ? "overflow-x-auto whitespace-nowrap"
                : ""
            }
          >
            {item.to ? (
              <Link to={item.to} className="hover: hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className="!">{item.label}</span>
            )}
            {index < items.length - 1 && <span className="ml-2">＞</span>}
          </li>
        ))}
      </ul>
    </nav>
  );
};
