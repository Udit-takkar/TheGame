import { CONFIG } from 'config';
import React, { useEffect, useState } from 'react';

export const Calendar: React.FC = () => {
  const [isComponentMounted, setIsComponentMounted] = useState(false);

  useEffect(() => setIsComponentMounted(true), []);

  if (!isComponentMounted) {
    return null;
  }

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return (
    <iframe
      title="calendar"
      src={`https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=${timezone}&showPrint=0&mode=AGENDA&showTitle=0&showNav=1&showTabs=0&showPrint=0&showCalendars=0&src=${CONFIG.calendarId}&color=%23F09300`}
      style={{
        // border: 'solid 1px #777',
        marginTop: 20,
      }}
      width="100%"
      height="100%"
      scrolling="no"
    />
  );
};
