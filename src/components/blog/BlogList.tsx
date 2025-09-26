import { Link } from "react-router-dom";
import { Blog } from "../../data/blog";

export function BlogList({ post }: { post: Blog }) {
  return (
    <Link to={`/blog/${post.slug}`} className="group">
      <article className="bg-white/5 group-hover:bg-black/5 transition-all shadow-lg group-hover:shadow-[0_0_5px_rgba(255,255,255,0.6)] flex flex-col h-full">
        <div className="relative aspect-[16/9] group-hover:after:absolute group-hover:after:inset-0 group-hover:after:bg-black/30 group-hover:after:transition-all">
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="p-6 md:px-6 md:py-8 flex flex-col flex-grow">
          <div className="flex items-center gap-3 mb-3 md:mb-4">
            <div className="text-gray-400 group-hover:/80 transition-all text-sm">
              <time dateTime={post.date}>{post.date}</time>
            </div>

            <p className="!text-xs">
              {post.category.map((cat, index) => (
                <span
                  key={index}
                  className="bg-gray-300/20 text-primary-400 font-bold !text-xs px-1.5 py-1 rounded mr-1.5"
                >
                  {cat}
                </span>
              ))}
            </p>
          </div>

          <h3 className="text-base md:text-lg group-hover:text-primary-400 transition-all text-start font-semibold mb-3 md:mb-5">
            {post.title}
          </h3>

          <p className="text-sm text-gray-400 group-hover: transition-all !leading-5 mb-3 flex-grow">
            {post.description.length > 62
              ? `${post.description.slice(0, 62)}...`
              : post.description}
          </p>
        </div>
      </article>
    </Link>
  );
}
