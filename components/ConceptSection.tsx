"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Messages } from "@/lib/messages";

type ConceptSectionProps = {
  content: Messages["concept"];
};

export default function ConceptSection({ content }: ConceptSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="le-club" ref={ref} className="section-dark px-6 py-32 md:py-44">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-gold/60">
            {content.eyebrow}
          </p>
          <div className="luxury-divider mb-12" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-10 font-serif text-3xl leading-tight font-normal md:text-5xl lg:text-6xl"
        >
          {content.title} <span className="italic text-gold">{content.accent}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="mx-auto max-w-2xl text-base leading-relaxed font-light text-foreground/50 md:text-lg"
        >
          {content.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {content.features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
              className="border border-border/30 p-8 transition-colors duration-700 hover:border-gold/30"
            >
              <span className="font-serif text-lg text-gold">&mdash;</span>
              <h3 className="mt-4 mb-3 font-serif text-lg text-foreground/90">
                {item.title}
              </h3>
              <p className="text-sm font-light text-foreground/40">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
