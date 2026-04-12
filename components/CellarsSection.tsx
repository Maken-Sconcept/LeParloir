"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import cellarBottles from "@/assets/cellar-bottles.jpg";
import type { Messages } from "@/lib/messages";

type CellarsSectionProps = {
  content: Messages["cellars"];
};

export default function CellarsSection({ content }: CellarsSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="les-celliers"
      ref={ref}
      className="section-charcoal px-6 py-32 md:py-44"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <div className="image-overlay relative aspect-[4/5] rounded-sm">
              <Image
                src={cellarBottles}
                alt={content.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="rounded-sm object-cover"
              />
            </div>
            <div className="absolute -right-4 -bottom-4 h-24 w-24 border border-gold/20" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-gold/60">
              {content.eyebrow}
            </p>
            <div className="luxury-divider mb-10 !mx-0" />

            <h2 className="mb-8 font-serif text-3xl leading-tight font-normal md:text-4xl lg:text-5xl">
              {content.title} <span className="italic text-gold">{content.accent}</span>
            </h2>

            <p className="mb-8 text-base leading-relaxed font-light text-foreground/50">
              {content.description}
            </p>

            <ul className="mb-10 space-y-4">
              {content.features.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm font-light text-foreground/40"
                >
                  <span className="h-px w-5 bg-gold/40" />
                  {item}
                </li>
              ))}
            </ul>

            <a href="#membership" className="btn-luxury">
              {content.cta}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
