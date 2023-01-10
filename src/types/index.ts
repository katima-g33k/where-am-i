import { TimeZone } from "./timezones";

export type Locale = "en" | "fr";
export type { TimeZone } from "./timezones";
export type TimeOfDay = "morning" | "daytime" | "evening" | "night";
export interface Data {
  from: string;
  to?: string;
  timeZone: TimeZone;
  city: {
    en: string;
    fr: string;
  };
  country: {
    en: string;
    fr: string;
  };
}
