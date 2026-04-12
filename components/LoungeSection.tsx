"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import loungeImage from "@/assets/lounge.jpg";
import type { Messages } from "@/lib/messages";

type LoungeSectionProps = {
  content: Messages["lounge"];
};

export default function LoungeSection({ content }: LoungeSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="salons-prives"
      ref={ref}
      className="section-dark px-6 py-32 md:py-44"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2 }}
            className="order-2 lg:order-1"
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

            <div className="mb-10 grid grid-cols-2 gap-6">
              {content.stats.map((item) => (
                <div key={item.label} className="border-l border-gold/20 pl-4">
                  <p className="mb-1 text-xs uppercase tracking-[0.2em] text-foreground/30">
                    {item.label}
                  </p>
                  <p className="font-serif text-lg text-foreground/80">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <a href="#membership" className="btn-luxury">
              {content.cta}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="relative order-1 lg:order-2"
          >
            <div className="image-overlay relative aspect-[4/5] rounded-sm">
              <Image
                src={loungeImage}
                alt={content.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="rounded-sm object-cover"
              />
            </div>
            <div className="absolute -top-4 -left-4 h-24 w-24 border border-gold/20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
