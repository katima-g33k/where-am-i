import React, { useState } from 'react';
import { convertTimeZone, getTimeString } from "./utils/time";
import { getQueryParam } from "./utils/queryParams";

import data from "./data";
import i18n from "./locale";
import { DEFAULT_LOCALE } from "./constants";
import type { Locale } from "./types";

function App() {
  const [homeTime, setHomeTime] = useState(new Date());
  const locale = (getQueryParam("locale") || DEFAULT_LOCALE) as Locale;

  setInterval(() => {
    const currentTime = new Date();

    if (homeTime.getMinutes() !== currentTime.getMinutes()) {
      setHomeTime(currentTime);
    }
  }, 1000);

  return (
    <div className="App">
      <p>{`${i18n[locale].location} ${data.city[locale]} (${data.country[locale]})`}</p>
      <p>{`${i18n[locale].time} ${getTimeString(convertTimeZone(homeTime, data.timeZone), locale)}`}</p>
    </div>
  );
}

export default App;
