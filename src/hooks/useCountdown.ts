import { useState, useEffect } from 'react';

const STORAGE_KEY = 'robotica_offer_timer_end';

function getTargetTime(): number {
  try {
    const saved = typeof window !== 'undefined' ? sessionStorage.getItem(STORAGE_KEY) : null;
    if (saved) {
      const parsed = parseInt(saved, 10);
      if (!isNaN(parsed) && parsed > Date.now()) {
        return parsed;
      }
    }
  } catch {
    // Ignore storage access errors
  }
  // Default: 14 minutes and 59 seconds
  const newTarget = Date.now() + (14 * 60 + 59) * 1000;
  try {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(STORAGE_KEY, String(newTarget));
    }
  } catch {
    // Ignore storage access errors
  }
  return newTarget;
}

let cachedTarget: number | null = null;

export function useCountdown() {
  if (!cachedTarget) {
    cachedTarget = getTargetTime();
  }

  const calculateTimeLeft = () => {
    const difference = (cachedTarget || Date.now()) - Date.now();
    if (difference <= 0) {
      return { minutes: 0, seconds: 0 };
    }
    const totalSeconds = Math.floor(difference / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return { minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (val: number) => String(val).padStart(2, '0');

  return {
    minutes: timeLeft.minutes,
    seconds: timeLeft.seconds,
    formattedMinutes: formatTime(timeLeft.minutes),
    formattedSeconds: formatTime(timeLeft.seconds),
    formattedTime: `${formatTime(timeLeft.minutes)}:${formatTime(timeLeft.seconds)}`,
  };
}
