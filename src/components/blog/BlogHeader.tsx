import { Link } from "react-router-dom";
import { Blog } from "../../data/blog";

export function BlogHeader({ post }: { post: Blog }) {
  return (
    <>
      <Link to={`/blog/${post.slug}`} className="group">
        <article className="bg-white/10 group-hover:bg-black/5 transition-all shadow-lg group-hover:shadow-[0_0_5px_rgba(255,255,255,0.6)] p-3">
          <div className="flex items-center">
            <div
              className={`w-40 h-full relative aspect-square group-hover:after:absolute group-hover:after:inset-0 group-hover:after:bg-black/30 group-hover:after:transition-all`}
            >
              <img
                src={post.image}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <div className="w-11/12 p-3 flex flex-col flex-grow">
              <div className="text-gray-300 group-hover:/80 transition-all text-xs mb-[1px]">
                <time dateTime={post.date}>{post.date}</time>
              </div>

              <p className="mb-2">
                <span className="bg-yellow-400/80 text-black font-medium !text-[10px] px-1.5 pb-0.5 pt-1 rounded">
                  {post.category}
                </span>
              </p>

              <h3 className="text-base group-hover:text-yellow-400 transition-all text-start font-semibold">
                {post.title}
              </h3>
            </div>
          </div>
        </article>
      </Link>

      <div className="h-px w-full bg-white/30 my-4 md:my-6" />
    </>
  );
}
