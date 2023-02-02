export function getPercentage(total: number, positive: number) {
  const percentage = (positive / total) * 100;

  const formater = `${String(percentage.toFixed(2)).replace(".", ",")}`;

  return formater;
}
