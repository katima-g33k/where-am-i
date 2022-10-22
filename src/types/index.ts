import { TimeZone } from "./timezones";

export type Locale = "en" | "fr";
export type { TimeZone } from "./timezones";
export interface Data {
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
