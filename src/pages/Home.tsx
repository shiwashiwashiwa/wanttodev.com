import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { HeroSection } from "../components/HeroSection";
import Cta from "../components/Cta";
import { ContactForm } from "../components/ContactForm";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const Home: React.FC = () => {
  useDocumentTitle("ホーム");

  return (
    <div className="text-center bg-gray-900 min-h-screen">
      <HeroSection />
      <h1 className="text-4xl font-bold mb-8 text-white">
        Welcome to WantToDev
      </h1>
      <p className="text-lg mb-12 text-gray-300">
        あなたの開発スキルを向上させるためのプラットフォームです
      </p>

      {/* Works & Blog セクション */}
      <section className="container max-w-4xl mx-auto px-4 mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Works セクション */}
          <div className="bg-gray-800/80 border border-gray-700 rounded-lg p-8 hover:bg-gray-800/90 transition-colors duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Works</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                これまでに制作したプロジェクトや作品を紹介しています。技術的な詳細や開発過程も詳しく解説しています。
              </p>
              <Link to="/works">
                <Button className="w-full md:w-auto">作品一覧を見る</Button>
              </Link>
            </div>
          </div>

          {/* Blog セクション */}
          <div className="bg-gray-800/80 border border-gray-700 rounded-lg p-8 hover:bg-gray-800/90 transition-colors duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Blog</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                技術記事や開発のコツ、最新のトレンドについて詳しく解説しています。初心者から上級者まで役立つ情報を発信しています。
              </p>
              <Link to="/blog">
                <Button className="w-full md:w-auto">ブログを読む</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Link to="/privacy-policy">
        <Button>プライバシーポリシーを確認</Button>
      </Link>

      <Cta />
      <ContactForm />
    </div>
  );
};

export default Home;
