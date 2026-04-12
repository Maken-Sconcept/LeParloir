import "server-only";

import enMessages from "@/messages/en.json";
import frMessages from "@/messages/fr.json";

export const locales = ["fr", "en"] as const;

export type Locale = (typeof locales)[number];
export type Messages = typeof frMessages;

const messagesByLocale = {
  en: enMessages,
  fr: frMessages,
} satisfies Record<Locale, Messages>;

export function isLocale(value: string): value is Locale {
  return value in messagesByLocale;
}

export function getMessages(locale: Locale): Messages {
  return messagesByLocale[locale];
}

export function getLocalePath(locale: Locale): string {
  return locale === "fr" ? "/" : `/${locale}`;
}
