/**
 * ルート設定とタイトル情報を管理する設定ファイル
 */
export interface RouteConfig {
  path: string;
  title: string;
  description?: string;
}

export const routeConfigs: RouteConfig[] = [
  {
    path: "/",
    title: "My Portfolio",
    description: "WantToDev - My Portfolio",
  },
  {
    path: "/about",
    title: "私について",
    description: "開発者・デザイナーのプロフィール",
  },
  {
    path: "/works",
    title: "制作実績",
    description: "Webアプリケーション、モバイルアプリ、デザインの制作実績",
  },
  {
    path: "/works/:id",
    title: "制作実績詳細",
    description: "制作実績の詳細情報",
  },
  {
    path: "/privacy-policy",
    title: "プライバシーポリシー",
    description: "プライバシーポリシー",
  },
  {
    path: "/admin",
    title: "管理画面",
    description: "作品データの管理",
  },
  {
    path: "/lab",
    title: "ラボ",
    description: "実験的なコンテンツやデモ",
  },
  {
    path: "/blog",
    title: "技術ブログ",
    description: "技術記事や学習内容のアウトプット",
  },
  {
    path: "/blog/:slug",
    title: "ブログ記事",
    description: "技術ブログの記事詳細",
  },
];

/**
 * パスからルート設定を取得するヘルパー関数
 */
export const getRouteConfig = (pathname: string): RouteConfig | undefined => {
  return routeConfigs.find((config) => config.path === pathname);
};
