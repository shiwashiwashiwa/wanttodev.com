import { useEffect } from "react";

/**
 * ページタイトルを動的に変更するカスタムフック
 * @param title 設定したいタイトル
 * @param suffix タイトルの後に追加する文字列（デフォルト: " | WantToDev"）
 */
export const useDocumentTitle = (
  title: string,
  suffix: string = " | WantToDev"
) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${title}${suffix}`;

    // クリーンアップ関数：コンポーネントがアンマウントされた時に元のタイトルに戻す
    return () => {
      document.title = previousTitle;
    };
  }, [title, suffix]);
};
