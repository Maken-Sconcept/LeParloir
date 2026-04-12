"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Messages } from "@/lib/messages";

type MembershipSectionProps = {
  content: Messages["membership"];
};

export default function MembershipSection({
  content,
}: MembershipSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="membership"
      ref={ref}
      className="relative overflow-hidden px-6 py-32 md:py-44"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-deep via-obsidian to-obsidian" />
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 50% 0%, hsl(38 45% 60% / 0.08) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
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
          className="mb-8 font-serif text-3xl leading-tight font-normal md:text-5xl lg:text-6xl"
        >
          {content.title} <span className="italic text-gold">{content.accent}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="mx-auto mb-12 max-w-xl text-base leading-relaxed font-light text-foreground/50 md:text-lg"
        >
          {content.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-12 border border-gold/20 p-10 md:p-14"
        >
          <p className="mb-6 font-serif text-xl italic text-foreground/80 md:text-2xl">
            &quot;{content.quote}&quot;
          </p>
          <span className="text-xs uppercase tracking-[0.3em] text-gold/40">
            &mdash; {content.quoteAttribution}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <a
            href={`mailto:conciergerie@leparloir.club?subject=${encodeURIComponent(content.emailSubject)}`}
            className="btn-luxury"
          >
            {content.cta}
          </a>
          <p className="mt-6 text-xs tracking-wider text-foreground/30">
            {content.responseTime}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
