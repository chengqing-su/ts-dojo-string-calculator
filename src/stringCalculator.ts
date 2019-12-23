export const add = (numbers: string): string => {
  if (numbers.length === 0) return "0";
  return numbers
    .split(",")
    .reduce((sum: number, value: string) => (sum += Number(value)), 0)
    .toString();
};
