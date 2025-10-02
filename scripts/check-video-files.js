const fs = require("fs");
const path = require("path");

/**
 * 指定されたディレクトリ内の動画ファイルを検索する関数
 * @param {string} worksDir - worksディレクトリのパス
 * @param {number} workId - 作品ID
 * @returns {Array} 見つかった動画ファイルの配列
 */
function findVideoFiles(worksDir, workId) {
  const workDir = path.join(worksDir, workId.toString());
  const videos = [];

  if (!fs.existsSync(workDir)) {
    return videos;
  }

  const files = fs.readdirSync(workDir);

  // video.mp4ファイルを検索
  const videoFile = files.find((file) => file === "video.mp4");
  if (videoFile) {
    videos.push({
      type: "video",
      src: `/images/works/${workId}/video.mp4`,
      alt: `作品${workId}の動画`,
    });
  }

  // video01.mp4, video02.mp4などの番号付き動画ファイルを検索
  const numberedVideos = files
    .filter((file) => /^video\d+\.mp4$/.test(file))
    .sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)[0]);
      const numB = parseInt(b.match(/\d+/)[0]);
      return numA - numB;
    })
    .map((file) => ({
      type: "video",
      src: `/images/works/${workId}/${file}`,
      alt: `作品${workId}の動画${file.match(/\d+/)[0]}`,
    }));

  videos.push(...numberedVideos);

  return videos;
}

/**
 * works-dynamic.jsonの動画データを更新する関数
 * @param {string} worksDataPath - works-dynamic.jsonのパス
 * @param {string} worksDir - worksディレクトリのパス
 */
function updateVideoData(worksDataPath, worksDir) {
  try {
    // works-dynamic.jsonを読み込み
    const worksData = JSON.parse(fs.readFileSync(worksDataPath, "utf8"));

    // 各作品の動画データを更新
    worksData.forEach((work) => {
      const videoFiles = findVideoFiles(worksDir, work.id);

      // 動画ファイルが見つかった場合のみ更新
      if (videoFiles.length > 0) {
        work.mediaData.videos = videoFiles;
        console.log(
          `作品${work.id}: ${videoFiles.length}個の動画ファイルを検出しました`
        );
      } else {
        // 動画ファイルがない場合はvideosプロパティを削除
        delete work.mediaData.videos;
        console.log(`作品${work.id}: 動画ファイルが見つかりませんでした`);
      }
    });

    // 更新されたデータを保存
    fs.writeFileSync(worksDataPath, JSON.stringify(worksData, null, 2));
    console.log("works-dynamic.jsonの動画データを更新しました");
  } catch (error) {
    console.error("エラーが発生しました:", error);
  }
}

// スクリプトが直接実行された場合
if (require.main === module) {
  const worksDataPath = path.join(
    __dirname,
    "..",
    "src",
    "data",
    "works-dynamic.json"
  );
  const worksDir = path.join(__dirname, "..", "public", "images", "works");

  updateVideoData(worksDataPath, worksDir);
}

module.exports = { findVideoFiles, updateVideoData };
