'use client';

import { formatTime } from '@/utils/clock';
import { useState, useEffect } from 'react';

export default function TimeItem() {
  const [now, setNow] = useState<Date>(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  });

  const checkTime = () => {
    const hour = now.getHours();

    if (hour >= 6 && hour < 9) {
      return (
        <img
          src="/icons/sun-horizon.svg"
          alt="Sun Horizon Icon"
          className="w-6 h-6"
        />
      );
    }

    if (hour >= 9 && hour < 17) {
      return <img src="/icons/sun.svg" alt="Sun Icon" className="w-6 h-6" />;
    }

    if (hour >= 17 && hour < 20) {
      return (
        <img src="/icons/sun-dim.svg" alt="Sun Dim Icon" className="w-6 h-6" />
      );
    }

    return <img src="/icons/moon.svg" alt="Moon Icon" className="w-6 h-6" />;
  };

  return (
    <div className="flex items-center gap-2">
      {checkTime()}

      <p className="text-xl !font-mono">{formatTime(now)}</p>
    </div>
  );
}
