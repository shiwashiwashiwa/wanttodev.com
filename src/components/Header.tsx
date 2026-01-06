import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`${
        isScrolled ? "bg-gray-900/70" : "bg-gray-900/50"
      } sticky top-0 z-50 transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-0 py-3 md:py-4">
        <div className="flex justify-end items-center">
          {/* ハンバーガーボタン（スマホのみ表示） */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-white hover:bg-white/20 transition-colors rounded"
            aria-label="メニューを開く"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* デスクトップメニュー */}
          <div className="hidden md:flex gap-5">
            <Link
              to="/"
              className="no-underline px-4 py-2 hover:bg-white/20 transition-colors"
            >
              Top
            </Link>
            <Link
              to="/works"
              className="no-underline px-4 py-2 hover:bg-white/20 transition-colors"
            >
              Works
            </Link>
            <Link
              to="/about"
              className="no-underline px-4 py-2 hover:bg-white/20 transition-colors"
            >
              About
            </Link>
            <Link
              to="/blog"
              className="no-underline px-4 py-2 hover:bg-white/20 transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/admin"
              className="no-underline px-4 py-2 hover:bg-white/20 transition-colors"
            >
              Admin
            </Link>
          </div>
        </div>

        {/* スマホメニュー（ドロップダウン） */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2 pt-4">
            <Link
              to="/"
              onClick={closeMenu}
              className="no-underline px-3 py-2 hover:bg-white/20 transition-colors text-white"
            >
              Top
            </Link>
            <Link
              to="/works"
              onClick={closeMenu}
              className="no-underline px-3 py-2 hover:bg-white/20 transition-colors text-white"
            >
              Works
            </Link>
            <Link
              to="/about"
              onClick={closeMenu}
              className="no-underline px-3 py-2 hover:bg-white/20 transition-colors text-white"
            >
              About
            </Link>
            <Link
              to="/blog"
              onClick={closeMenu}
              className="no-underline px-3 py-2 hover:bg-white/20 transition-colors text-white"
            >
              Blog
            </Link>
            <Link
              to="/admin"
              onClick={closeMenu}
              className="no-underline px-3 py-2 hover:bg-white/20 transition-colors text-white"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
