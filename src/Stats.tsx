import React from "react";
import dayjs from "dayjs";

import i18n from "./locale";
import { END_DATE, START_DATE } from "./constants";

import type { Locale } from "./types";

interface StatsProps {
  locale: Locale;
}

export default function Stats({ locale }: StatsProps) {
  const totalDuration = dayjs(END_DATE).diff(START_DATE, "day");
  const timeElapsed = dayjs(new Date()).diff(START_DATE, "day");
  const ratio = Math.round(timeElapsed / totalDuration * 100);
  const daysLeft = totalDuration - timeElapsed;

  return (
    <div id="stats">
      <h1>{i18n[locale].stats.title}</h1>
      <p>{`${i18n[locale].stats.elapsed} ${timeElapsed} (${ratio}%)`}</p>
      <p>{`${i18n[locale].stats.remaining} ${daysLeft}`}</p>
      <p>{`${i18n[locale].stats.total} ${totalDuration}`}</p>
    </div>
  );
}
