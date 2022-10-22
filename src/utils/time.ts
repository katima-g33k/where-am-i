import { TimeZone } from "../types";

export function convertTimeZone(date: Date, timeZone: TimeZone): Date {
  return new Date((date).toLocaleString("en", { timeZone }));
}

export function getTimeString(date: Date, locale: string): string {
  return date.toLocaleTimeString(locale, { hour: 'numeric', minute: '2-digit' });
}
