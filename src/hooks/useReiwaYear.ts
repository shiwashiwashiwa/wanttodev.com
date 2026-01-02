/**
 * 令和年を計算するカスタムフック
 * 令和年 = 西暦年 - 2018
 */
export function useReiwaYear(): number {
  const currentYear = new Date().getFullYear();
  return currentYear - 2018;
}

