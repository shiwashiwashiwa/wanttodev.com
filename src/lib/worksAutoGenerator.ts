import { Works, WorkCategory, Technology, MediaItem } from "../data/works";

/**
 * 画像の存在を確認する関数
 */
const checkImageExists = (src: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
};

/**
 * 動画ファイルの存在を確認する関数
 */
const checkVideoExists = (src: string): Promise<boolean> => {
  return fetch(src, { method: "HEAD" })
    .then((response) => {
      // 200-299のステータスコードは成功
      return response.ok;
    })
    .catch(() => {
      // エラーが発生した場合は存在しないとみなす
      return false;
    });
};

/**
 * 指定された作品IDの動画ファイルを検出する関数
 * video01.mp4, video02.mp4, video03.mp4などの番号付き動画ファイルを検出
 * 最適化: 連続する失敗が一定数続いたら検索を停止
 */
export async function detectVideoFiles(workId: number): Promise<MediaItem[]> {
  const videos: MediaItem[] = [];
  const maxVideoNumber = 20; // 最大20個まで検索（100から削減）
  const maxConsecutiveFailures = 3; // 連続失敗の上限

  // video01.mp4, video02.mp4などの番号付き動画ファイルを検索
  // バッチ処理で並列数を制限（一度に5個ずつ）
  const batchSize = 5;
  let consecutiveFailures = 0;

  for (let batchStart = 1; batchStart <= maxVideoNumber; batchStart += batchSize) {
    const batchEnd = Math.min(batchStart + batchSize - 1, maxVideoNumber);
    const checkPromises: Promise<{ number: number; exists: boolean }>[] = [];

    for (let i = batchStart; i <= batchEnd; i++) {
      const videoNumber = i.toString().padStart(2, "0");
      const videoPath = `/images/works/${workId}/video${videoNumber}.mp4`;
      
      checkPromises.push(
        checkVideoExists(videoPath).then((exists) => ({
          number: i,
          exists,
        }))
      );
    }

    const results = await Promise.all(checkPromises);
    
    // バッチ内で存在する動画ファイルを処理
    const existingVideos = results
      .filter((result) => result.exists)
      .sort((a, b) => a.number - b.number);
    
    const batchHasVideo = existingVideos.length > 0;
    
    // 動画が見つかった場合は追加
    for (const result of existingVideos) {
      const videoNumber = result.number.toString().padStart(2, "0");
      videos.push({
        type: "video",
        src: `/images/works/${workId}/video${videoNumber}.mp4`,
        alt: `作品${workId}の動画${videoNumber}`,
      });
    }

    // バッチ内に動画がなかった場合
    if (!batchHasVideo) {
      consecutiveFailures += batchSize;
      // 連続失敗が上限に達したら検索を停止
      if (consecutiveFailures >= maxConsecutiveFailures * batchSize) {
        break;
      }
    } else {
      // 成功したらリセット
      consecutiveFailures = 0;
    }
  }

  return videos;
}

/**
 * public/images/works内の連番フォルダを検出する関数
 * サムネイル画像の存在を確認して、有効なフォルダを判定
 * 最適化: バッチ処理で並列数を制限
 */
export async function detectWorksFolders(
  maxId: number = 20
): Promise<number[]> {
  const detectedFolders: number[] = [];
  const batchSize = 5; // 一度に5個ずつチェック

  // バッチ処理で並列数を制限
  for (let batchStart = 1; batchStart <= maxId; batchStart += batchSize) {
    const batchEnd = Math.min(batchStart + batchSize - 1, maxId);
    const checkPromises: Promise<boolean>[] = [];

    // バッチ内のIDをチェック
    for (let id = batchStart; id <= batchEnd; id++) {
      // thumbnail.webpとthumbnail.pngの両方をチェック
      const thumbnailWebpPath = `/images/works/${id}/thumbnail.webp`;
      const thumbnailPngPath = `/images/works/${id}/thumbnail.png`;
      
      checkPromises.push(
        Promise.all([
          checkImageExists(thumbnailWebpPath),
          checkImageExists(thumbnailPngPath)
        ]).then(([existsWebp, existsPng]) => {
          if (existsWebp || existsPng) {
            detectedFolders.push(id);
          }
          return existsWebp || existsPng;
        })
      );
    }

    // バッチごとに並列で画像の存在を確認
    await Promise.all(checkPromises);
  }

  // 数値順にソート
  return detectedFolders.sort((a, b) => a - b);
}

/**
 * デフォルトのworksデータを生成する関数
 */
export function generateDefaultWorkData(id: number): Works {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const dateString = `${year}.${month}`;

  return {
    id,
    title: `作品 ${id}`,
    date: dateString,
    role: "開発・デザイン",
    client: "クライアント名",
    industry: "その他",
    technologies: ["HTML", "CSS", "JavaScript"] as Technology[],
    category: ["サービスサイト"] as WorkCategory[],
    details: {
      overview: ["作品の概要をここに記入してください。"],
      challenge: ["課題をここに記入してください。"],
      solution: ["解決策をここに記入してください。"],
      result: ["成果をここに記入してください。"],
      features: ["主な機能をここに記入してください。"],
      link: "",
    },
    mediaData: {
      images: [],
      videos: [],
    },
    isVisible: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

/**
 * 既存のworksデータと自動生成データをマージする関数
 * 既存データを優先し、存在しないIDのみ自動生成データを追加
 */
export function mergeWorksData(
  existingWorks: Works[],
  autoGeneratedWorks: Works[]
): Works[] {
  const existingIds = new Set(existingWorks.map((work) => work.id));
  const newWorks = autoGeneratedWorks.filter(
    (work) => !existingIds.has(work.id)
  );

  // 既存データと新規データをマージ（既存データを優先）
  return [...existingWorks, ...newWorks].sort((a, b) => a.id - b.id);
}

/**
 * 既存のworksデータの動画ファイルを自動検出・更新する関数
 * 最適化: 既に動画データがある場合はスキップ
 */
export async function updateVideoFilesInWorks(
  works: Works[]
): Promise<Works[]> {
  console.log("🎬 動画ファイルを自動検出中...");

  const updatedWorks = await Promise.all(
    works.map(async (work) => {
      // 既に動画データが存在し、かつ空でない場合はスキップ（パフォーマンス向上）
      if (work.mediaData.videos && work.mediaData.videos.length > 0) {
        console.log(`⏭️ 作品${work.id}: 既存の動画データがあるためスキップ`);
        return work;
      }

      const detectedVideos = await detectVideoFiles(work.id);
      
      if (detectedVideos.length > 0) {
        console.log(
          `✅ 作品${work.id}: ${detectedVideos.length}個の動画ファイルを検出しました`
        );
      } else {
        console.log(`ℹ️ 作品${work.id}: 動画ファイルが見つかりませんでした`);
      }
      
      // 動画が検出されなかった場合も空の配列を設定して、既存の動画データをクリア
      return {
        ...work,
        mediaData: {
          ...work.mediaData,
          videos: detectedVideos,
        },
      };
    })
  );

  return updatedWorks;
}

/**
 * フォルダから自動的にworksデータを生成する関数
 */
export async function autoGenerateWorksData(
  existingWorks: Works[]
): Promise<Works[]> {
  console.log("🔍 worksフォルダを自動検出中...");

  // フォルダを検出
  const detectedFolders = await detectWorksFolders(20);
  console.log(
    `✅ ${detectedFolders.length}個のworksフォルダを検出しました:`,
    detectedFolders
  );

  if (detectedFolders.length === 0) {
    console.log("⚠️ worksフォルダが見つかりませんでした");
    // フォルダが見つからなくても、既存データの動画ファイルを更新
    return await updateVideoFilesInWorks(existingWorks);
  }

  // 既存のIDを取得
  const existingIds = new Set(existingWorks.map((work) => work.id));

  // 検出されたフォルダから、既存データにないIDのworksデータを生成
  const newWorks: Works[] = [];
  for (const id of detectedFolders) {
    if (!existingIds.has(id)) {
      const defaultWork = generateDefaultWorkData(id);
      newWorks.push(defaultWork);
      console.log(`📝 新規worksデータを生成しました: ID ${id}`);
    }
  }

  // 既存データとマージ
  let mergedWorks = mergeWorksData(existingWorks, newWorks);

  // すべてのworksデータの動画ファイルを自動検出・更新
  mergedWorks = await updateVideoFilesInWorks(mergedWorks);

  console.log(
    `✅ worksデータをマージしました: 合計 ${mergedWorks.length}件`
  );

  return mergedWorks;
}

