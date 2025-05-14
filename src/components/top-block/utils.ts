export const calculateTimeLeft = (weddingDate: Date) => {
  const now = new Date();
  const difference = weddingDate.getTime() - now.getTime();

  if (difference <= 0) {
    return { weeks: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    weeks: Math.floor(difference / (1000 * 60 * 60 * 24 * 7)),
    days: Math.floor((difference / (1000 * 60 * 60 * 24)) % 7),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};