import { getHours } from "date-fns";

export const isDayTime = (date: Date) => {
  const currnetHours = getHours(date);
  if (currnetHours >= 5 && currnetHours < 18) {
    return true;
  }
  return false;
};

export const getGreeting = (date: Date): string => {
  const currentHours = getHours(date);
  if (currentHours >= 5 && currentHours < 12) {
    return "Good morning";
  } else if (currentHours >= 12 && currentHours < 18) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
};
