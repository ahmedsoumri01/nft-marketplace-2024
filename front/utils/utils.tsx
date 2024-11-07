//form date from "2021-09-01T00:00:00.000Z" to  Sep 30, 2022

export const fromISODate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}