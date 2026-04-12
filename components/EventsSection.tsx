"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import tastingEvent from "@/assets/tasting-event.jpg";
import type { Messages } from "@/lib/messages";

type EventsSectionProps = {
  content: Messages["events"];
};

export default function EventsSection({ content }: EventsSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="evenements"
      ref={ref}
      className="section-charcoal px-6 py-32 md:py-44"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="mb-20 text-center"
        >
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-gold/60">
            {content.eyebrow}
          </p>
          <div className="luxury-divider mb-10" />
          <h2 className="font-serif text-3xl leading-tight font-normal md:text-5xl">
            {content.title} <span className="italic text-gold">{content.accent}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="image-overlay relative aspect-[3/4] rounded-sm"
          >
            <Image
              src={tastingEvent}
              alt={content.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="rounded-sm object-cover"
            />
          </motion.div>

          <div className="space-y-0">
            {content.items.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                className="group cursor-default border-b border-border/20 py-10 first:pt-0 last:border-b-0"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="mb-3 font-serif text-xl transition-colors duration-500 group-hover:text-gold md:text-2xl">
                      {event.title}
                    </h3>
                    <p className="max-w-md text-sm leading-relaxed font-light text-foreground/40">
                      {event.description}
                    </p>
                  </div>
                  <span className="mt-1 font-serif text-2xl text-gold/30 transition-colors duration-500 group-hover:text-gold/70">
                    &rarr;
                  </span>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.2 }}
              className="pt-10"
            >
              <a href="#membership" className="btn-luxury">
                {content.cta}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
