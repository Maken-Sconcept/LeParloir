import type { Messages } from "@/lib/messages";
import type { SectionLink } from "@/components/section-links";

type FooterSectionProps = {
  content: Messages["footer"];
  sectionLinks: readonly SectionLink[];
};

export default function FooterSection({
  content,
  sectionLinks,
}: FooterSectionProps) {
  return (
    <footer className="border-t border-border/20 bg-obsidian px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <h3 className="gold-gradient-text mb-4 font-serif text-2xl">
              M Parloir
            </h3>
            <p className="text-sm leading-relaxed font-light text-foreground/30">
              {content.description[0]}
              <br />
              {content.description[1]}
            </p>
          </div>

          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-gold/40">
              {content.navigationTitle}
            </p>
            <ul className="space-y-3">
              {sectionLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm font-light text-foreground/40 transition-colors duration-500 hover:text-gold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-gold/40">
              {content.contactTitle}
            </p>
            <ul className="space-y-3 text-sm font-light text-foreground/40">
              <li>conciergerie@leparloir.club</li>
              <li>+1 (514) 000-0000</li>
              <li className="pt-2">
                <span className="text-xs uppercase tracking-[0.2em] text-foreground/20">
                  {content.memberAddress}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="luxury-divider mb-8" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs tracking-wider text-foreground/20">
            &copy; {new Date().getFullYear()} M Parloir. {content.rights}
          </p>
          <p className="text-xs tracking-wider text-foreground/20">
            {content.access}
          </p>
        </div>
      </div>
    </footer>
  );
}
