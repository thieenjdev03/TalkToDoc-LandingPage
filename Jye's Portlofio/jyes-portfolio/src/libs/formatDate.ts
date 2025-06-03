// src/libs/formatDate.ts
export const formatDate = (date: Date, locale = 'en-US'): string => {
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
