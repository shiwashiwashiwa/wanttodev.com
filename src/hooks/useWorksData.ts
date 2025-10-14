import { useState, useEffect } from "react";
import { Works, validateWorksData, worksData } from "../data/works";
import { worksDynamicData } from "../data/works-dynamic";
import { readFromLocalStorage, saveToLocalStorage } from "../lib/fileUtils";

const STORAGE_KEY = "works-data-backup"; // バックアップ用に変更

export function useWorksData() {
  const [works, setWorks] = useState<Works[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // データを読み込み
  useEffect(() => {
    const loadData = async () => {
      try {
        console.log("🔄 データ読み込み開始...");

        // まずローカルストレージをチェック
        const backupData = readFromLocalStorage(STORAGE_KEY);
        console.log("バックアップデータ:", backupData.length, "件");

        if (backupData.length > 0) {
          console.log(
            "💾 ローカルストレージから復元します:",
            backupData.length,
            "件"
          );
          const validData = backupData.filter(validateWorksData);
          console.log("バリデーション後のデータ件数:", validData.length, "件");
          setWorks(validData);
        } else {
          console.log("📋 ローカルストレージにデータがありません");
          console.log("TypeScriptファイルから読み込みます...");

          // TypeScriptファイルから直接読み込み
          const validData = worksDynamicData.filter(validateWorksData);
          console.log(
            "✅ TypeScriptファイルからデータを読み込みました:",
            validData.length,
            "件"
          );
          setWorks(validData);
          // ローカルストレージにバックアップ
          saveToLocalStorage(STORAGE_KEY, validData);
        }
      } catch (error) {
        console.error("❌ データの読み込みに失敗しました:", error);
        console.log("初期データを使用します");
        // エラーの場合は初期データを使用
        setWorks(worksData);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  // データを保存
  const saveWorks = async (newWorks: Works[]) => {
    try {
      console.log("💾 データを保存中...", newWorks.length, "件");

      // ローカルストレージに即座に保存（UI更新）
      const success = saveToLocalStorage(STORAGE_KEY, newWorks);
      if (success) {
        console.log("✅ ローカルストレージに保存完了");
        setWorks(newWorks);
      } else {
        console.error("❌ ローカルストレージへの保存に失敗しました");
      }
    } catch (error) {
      console.error("❌ データの保存に失敗しました:", error);
    }
  };

  // データを追加
  const addWork = async (newWork: Works) => {
    const updatedWorks = [...works, newWork];
    await saveWorks(updatedWorks);
  };

  // データを更新
  const updateWork = async (id: number, updatedWork: Works) => {
    const updatedWorks = works.map((work) =>
      work.id === id ? updatedWork : work
    );
    await saveWorks(updatedWorks);
  };

  // データを削除
  const deleteWork = async (id: number) => {
    const updatedWorks = works.filter((work) => work.id !== id);
    await saveWorks(updatedWorks);
  };

  // データをリセット（初期データに戻す）
  const resetWorks = async () => {
    await saveWorks(worksData);
  };

  // 特定の作品を取得
  const getWork = (id: number): Works | undefined => {
    return works.find((work) => work.id === id);
  };

  return {
    works,
    isLoading,
    saveWorks,
    addWork,
    updateWork,
    deleteWork,
    resetWorks,
    getWork,
  };
}
