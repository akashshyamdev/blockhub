import { format } from "date-fns";

export type DateFormat = Date | number;

export function formatPostDate(date: DateFormat) {
  return format(new Date(date), "MMM d");
}
