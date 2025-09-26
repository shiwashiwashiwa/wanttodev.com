export type Works = {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  date: string;
  technologies: string[];
  category: string[];
  details: {
    overview: string;
    challenge: string;
    solution: string;
    result: string;
    features: string[];
    link: string;
  };
  mediaData: {
    image: string[];
    video: string[];
  };
  isVisible: boolean;
};

export const worksData: Works[] = [
  {
    id: 1,
    title: "ECサイト構築プロジェクト",
    thumbnail: "/images/works/ec-site.jpg",
    description:
      "React + TypeScript + Node.js を使用したフルスタックECサイトの開発",
    date: "2025-04-10",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    category: [
      // "ECサイト",
      "Webアプリケーション",
    ],
    details: {
      overview:
        "大手ECサイトのリニューアルプロジェクトにて、フロントエンドからバックエンドまで一貫して開発を担当。パフォーマンスの向上とユーザビリティの改善を実現しました。",
      challenge:
        "既存システムからの移行において、データの整合性を保ちながら段階的なリリースを実現する必要がありました。",
      solution:
        "マイクロサービスアーキテクチャを採用し、段階的な移行戦略を実施。また、A/Bテストを活用してユーザー体験を最適化しました。",
      result:
        "ページ読み込み速度を40%向上させ、コンバージョン率を15%改善。ユーザー満足度も大幅に向上しました。",
      features: [
        "レスポンシブデザイン対応",
        "決済システム統合（Stripe）",
        "在庫管理システム",
        "ユーザー認証・認可",
        "管理画面の構築",
        "SEO最適化",
      ],
      link: "#",
    },
    mediaData: {
      image: [
        "/images/works/1/01.webp",
        "/images/works/1/02.webp",
        "/images/works/1/03.webp",
        "/images/works/1/04.webp",
      ],
      video: ["/images/works/1/video01.mp4", "/images/works/1/video02.mp4"],
    },
    isVisible: true,
  },
  {
    id: 2,
    title: "モバイルアプリ開発",
    thumbnail: "/images/works/ec-site.jpg",
    description:
      "React Native を使用したクロスプラットフォームモバイルアプリの開発",

    date: "2024.08.09",
    technologies: ["React Native", "TypeScript", "Firebase", "Redux"],
    category: [
      // "モバイルアプリ",
      "Webアプリケーション",
    ],
    details: {
      overview:
        "スタートアップ企業のメインアプリケーションとして、iOS・Android両対応のモバイルアプリを開発。",
      challenge:
        "限られたリソースで高品質なアプリを短期間でリリースする必要がありました。",
      solution:
        "React Nativeを採用し、コードの再利用性を最大化。また、Firebaseを活用してバックエンド機能を効率的に実装しました。",
      result:
        "開発期間を50%短縮し、App Store・Google Play両方で4.5以上の評価を獲得。",
      features: [
        "プッシュ通知機能",
        "オフライン対応",
        "リアルタイム同期",
        "ソーシャルログイン",
        "位置情報機能",
        "カメラ・ギャラリー連携",
      ],
      link: "#",
    },
    mediaData: {
      image: [
        "/images/works/1/01.webp",
        "/images/works/1/02.webp",
        "/images/works/1/03.webp",
        "/images/works/1/04.webp",
      ],
      video: ["/images/works/1/video01.mp4", "/images/works/1/video02.mp4"],
    },
    isVisible: true,
  },
  {
    id: 3,
    title: "企業向けダッシュボード",
    thumbnail: "/images/works/ec-site.jpg",
    description: "データ可視化とレポート機能を備えた管理画面の開発",
    date: "2023.12.15",
    technologies: ["Vue.js", "D3.js", "Python", "FastAPI", "MongoDB"],
    category: [
      // "ダッシュボード",
      "Webアプリケーション",
    ],
    details: {
      overview:
        "企業のKPI管理とデータ分析を効率化するためのダッシュボードシステムを構築。",
      challenge:
        "大量のデータをリアルタイムで可視化し、直感的な操作を提供する必要がありました。",
      solution:
        "D3.jsを活用したカスタムチャートと、Vue.jsのリアクティブなUIで解決。",
      result:
        "データ分析時間を70%短縮し、意思決定のスピードを大幅に向上させました。",
      features: [
        "リアルタイムデータ表示",
        "カスタムダッシュボード作成",
        "データエクスポート機能",
        "アラート・通知システム",
        "ユーザー権限管理",
        "API連携機能",
      ],
      link: "#",
    },
    mediaData: {
      image: [
        "/images/works/1/01.webp",
        "/images/works/1/02.webp",
        "/images/works/1/03.webp",
        "/images/works/1/04.webp",
      ],
      video: ["/images/works/1/video01.mp4", "/images/works/1/video02.mp4"],
    },
    isVisible: true,
  },
  {
    id: 4,
    title: "ポートフォリオサイト",
    thumbnail: "/images/works/ec-site.jpg",
    description: "Next.js を使用した静的サイト生成によるポートフォリオサイト",
    date: "2023.10.20",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    category: [
      // "ポートフォリオサイト",
      "Webサイト",
    ],
    details: {
      overview:
        "個人のポートフォリオサイトとして、SEO最適化とパフォーマンスを重視した静的サイトを構築。",
      challenge:
        "検索エンジンでの上位表示と、高速なページ読み込みを両立させる必要がありました。",
      solution:
        "Next.jsの静的サイト生成機能を活用し、Tailwind CSSでモダンなデザインを実現。",
      result: "Lighthouseスコアで100点を達成し、検索順位も大幅に向上しました。",
      features: [
        "レスポンシブデザイン",
        "ダークモード対応",
        "ブログ機能",
        "コンタクトフォーム",
        "アニメーション効果",
        "SEO最適化",
      ],
      link: "#",
    },
    mediaData: {
      image: [
        "/images/works/1/01.webp",
        "/images/works/1/02.webp",
        "/images/works/1/03.webp",
        "/images/works/1/04.webp",
      ],
      video: ["/images/works/1/video01.mp4", "/images/works/1/video02.mp4"],
    },
    isVisible: true,
  },
  {
    id: 5,
    title: "API開発プロジェクト",
    thumbnail: "/images/works/ec-site.jpg",
    description:
      "RESTful API と GraphQL を組み合わせたバックエンドシステムの構築",
    date: "2023.09.30",
    technologies: ["Node.js", "GraphQL", "PostgreSQL", "Docker", "AWS"],
    category: [
      // "バックエンド",
      "Webアプリケーション",
    ],
    details: {
      overview:
        "複数のフロントエンドアプリケーションから利用される共通APIシステムの構築。",
      challenge:
        "異なるクライアントの要件に対応しつつ、スケーラブルなAPIを設計する必要がありました。",
      solution:
        "RESTful APIとGraphQLを組み合わせ、クライアントのニーズに応じて最適なインターフェースを提供。",
      result: "API応答時間を60%短縮し、開発効率も大幅に向上させました。",
      features: [
        "RESTful API",
        "GraphQLエンドポイント",
        "認証・認可システム",
        "レート制限機能",
        "APIドキュメント自動生成",
        "モニタリング・ログ機能",
      ],
      link: "#",
    },
    mediaData: {
      image: [
        "/images/works/1/01.webp",
        "/images/works/1/02.webp",
        "/images/works/1/03.webp",
        "/images/works/1/04.webp",
      ],
      video: ["/images/works/1/video01.mp4", "/images/works/1/video02.mp4"],
    },
    isVisible: true,
  },
  {
    id: 6,
    title: "UI/UXデザイン",
    thumbnail: "/images/works/ec-site.jpg",
    description: "Figma を使用したモダンなUI/UXデザインの制作",
    date: "2023.08.15",
    technologies: ["Figma", "Adobe XD", "Photoshop", "Illustrator"],
    category: [
      // "デザイン",
      "Webアプリケーション",
    ],
    details: {
      overview:
        "複数のクライアント向けに、ユーザー中心設計に基づいたUI/UXデザインを提供。",
      challenge:
        "ブランドの個性を活かしつつ、使いやすさを重視したデザインを実現する必要がありました。",
      solution:
        "ユーザーリサーチとプロトタイピングを重ね、データに基づいたデザイン決定を実施。",
      result:
        "ユーザビリティテストで高評価を獲得し、クライアントの満足度も向上しました。",
      features: [
        "ワイヤーフレーム設計",
        "プロトタイプ作成",
        "デザインシステム構築",
        "ユーザビリティテスト",
        "ブランドガイドライン策定",
        "開発者向け仕様書作成",
      ],
      link: "#",
    },
    mediaData: {
      image: [
        "/images/works/1/01.webp",
        "/images/works/1/02.webp",
        "/images/works/1/03.webp",
        "/images/works/1/04.webp",
      ],
      video: ["/images/works/1/video01.mp4", "/images/works/1/video02.mp4"],
    },
    isVisible: true,
  },
];
