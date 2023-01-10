import dayjs from "dayjs";
import { Data } from "../types";

export function useData(data: Data[]) {
  return data.find(({ from, to }) => (dayjs().isSame(from, "day") || dayjs().isAfter(from)) && (!to || dayjs().isBefore(to))) || data[0];
}
