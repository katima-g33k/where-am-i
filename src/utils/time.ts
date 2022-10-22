import { TimeOfDay, TimeZone } from "../types";

export function convertTimeZone(date: Date, timeZone: TimeZone): Date {
  return new Date((date).toLocaleString("en", { timeZone }));
}

export function getTimeOfDay(date: Date): TimeOfDay {
  const hour = date.getHours();

  if (hour >= 7 && hour < 12) {
    return "morning";
  }

  if (hour < 17) {
    return "daytime";
  }

  if (hour < 21) {
    return "evening";
  }

  return "night";
}

export function getTimeString(date: Date, locale: string): string {
  return date.toLocaleTimeString(locale, { hour: 'numeric', minute: '2-digit' });
}
