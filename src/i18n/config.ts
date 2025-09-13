// src/i18n/config.ts

export type Locale = (typeof locales)[number];

export const locales = ['en', 'ru'] as const;
export const defaultLocale: Locale = 'en';