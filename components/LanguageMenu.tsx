import Link from "next/link";
import type { Locale, Messages } from "@/lib/messages";

type LanguageMenuProps = {
  currentLocale: Locale;
  navigation: Messages["navigation"];
};

const localeOrder: Locale[] = ["fr", "en"];

function getLocalePath(locale: Locale): string {
  return locale === "fr" ? "/" : `/${locale}`;
}

export default function LanguageMenu({
  currentLocale,
  navigation,
}: LanguageMenuProps) {
  return (
    <div
      aria-label={navigation.languageLabel}
      className="flex items-center rounded-full border border-gold/20 bg-obsidian/35 p-1 backdrop-blur-sm"
    >
      {localeOrder.map((locale) => {
        const isActive = locale === currentLocale;

        return (
          <Link
            key={locale}
            href={getLocalePath(locale)}
            className={`rounded-full px-3 py-2 text-[0.65rem] font-medium tracking-[0.28em] transition-colors duration-500 ${
              isActive
                ? "bg-gold/15 text-gold-light"
                : "text-foreground/45 hover:text-gold"
            }`}
          >
            {navigation.languageOptions[locale]}
          </Link>
        );
      })}
    </div>
  );
}
