import React, { useState } from 'react';
import { convertTimeZone, getTimeOfDay, getTimeString } from "./utils/time";
import { getQueryParam } from "./utils/queryParams";

import data from "./data";
import i18n from "./locale";
import { useData } from "./hooks/useData";
import { DEFAULT_LOCALE } from "./constants";
import type { Locale } from "./types";


function App() {
  const currentData = useData(data);
  const [homeTime, setHomeTime] = useState(new Date());
  const [localTime, setLocalTime] = useState(convertTimeZone(homeTime, currentData.timeZone));
  const locale = (getQueryParam("locale") || DEFAULT_LOCALE) as Locale;

  setInterval(() => {
    const currentTime = new Date();

    if (homeTime.getMinutes() !== currentTime.getMinutes()) {
      setHomeTime(currentTime);
      setLocalTime(convertTimeZone(currentTime, currentData.timeZone));
    }
  }, 1000);


  return (
    <div id="app" className={getTimeOfDay(localTime)}>
      <header>
        <a href={`?locale=${i18n[locale].changeLocale}`}>{i18n[locale].changeLocale.toUpperCase()}</a>
      </header>
      <main>
        <p>{`${i18n[locale].location} ${currentData.city[locale]} (${currentData.country[locale]})`}</p>
        <p>{`${i18n[locale].time} ${getTimeString(localTime, locale)}`}</p>
      </main>
    </div>
  );
}

export default App;
