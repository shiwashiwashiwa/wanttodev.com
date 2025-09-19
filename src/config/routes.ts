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
    title: "ホーム",
    description: "WantToDev - 開発者向けプラットフォーム",
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
    path: "/blog",
    title: "ブログ",
    description: "WantToDevの技術ブログ",
  },
  {
    path: "/privacy-policy",
    title: "プライバシーポリシー",
    description: "WantToDevのプライバシーポリシー",
  },
];

/**
 * パスからルート設定を取得するヘルパー関数
 */
export const getRouteConfig = (pathname: string): RouteConfig | undefined => {
  return routeConfigs.find((config) => config.path === pathname);
};
