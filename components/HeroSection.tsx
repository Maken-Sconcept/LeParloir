"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import heroCellar from "@/assets/hero-cellar.jpg";
import LanguageMenu from "@/components/LanguageMenu";
import type { SectionLink } from "@/components/section-links";
import type { Locale, Messages } from "@/lib/messages";

type HeroSectionProps = {
  currentLocale: Locale;
  hero: Messages["hero"];
  navigation: Messages["navigation"];
  sectionLinks: readonly SectionLink[];
};

export default function HeroSection({
  currentLocale,
  hero,
  navigation,
  sectionLinks,
}: HeroSectionProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={heroCellar}
          alt={hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-obsidian/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-transparent to-obsidian" />
      </div>

      <nav className="relative z-10 flex items-center justify-between px-8 py-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="font-serif text-xl uppercase tracking-[0.3em] text-gold-light">
            {navigation.brand}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex items-center gap-4 md:gap-10"
        >
          <div className="hidden items-center gap-10 md:flex">
            {sectionLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-sans uppercase tracking-[0.2em] text-foreground/60 transition-colors duration-500 hover:text-gold"
              >
                {item.label}
              </a>
            ))}
          </div>
          <LanguageMenu
            currentLocale={currentLocale}
            navigation={navigation}
          />
        </motion.div>
      </nav>

      <div className="relative z-10 flex h-[calc(100vh-120px)] flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="mb-8"
        >
          <div className="luxury-divider mb-8" />
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-gold/80">
            {hero.eyebrow}
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="max-w-4xl font-serif text-5xl leading-tight font-normal tracking-wide md:text-7xl lg:text-8xl"
        >
          <span className="gold-gradient-text">{hero.title}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-6 max-w-lg text-sm leading-relaxed font-light tracking-wide text-foreground/50 md:text-base"
        >
          {hero.description[0]}
          <br />
          {hero.description[1]}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="mt-12"
        >
          <a href="#membership" className="btn-luxury">
            {hero.cta}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="absolute bottom-12"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-12 w-px bg-gradient-to-b from-gold/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
