import CellarsSection from "@/components/CellarsSection";
import ConceptSection from "@/components/ConceptSection";
import EventsSection from "@/components/EventsSection";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import LoungeSection from "@/components/LoungeSection";
import MembershipSection from "@/components/MembershipSection";
import { getSectionLinks } from "@/components/section-links";
import type { Locale, Messages } from "@/lib/messages";

type HomePageProps = {
  locale: Locale;
  messages: Messages;
};

export default function HomePage({ locale, messages }: HomePageProps) {
  const sectionLinks = getSectionLinks(messages);

  return (
    <main className="min-h-screen bg-background">
      <HeroSection
        currentLocale={locale}
        hero={messages.hero}
        navigation={messages.navigation}
        sectionLinks={sectionLinks}
      />
      <ConceptSection content={messages.concept} />
      <CellarsSection content={messages.cellars} />
      <LoungeSection content={messages.lounge} />
      <EventsSection content={messages.events} />
      <MembershipSection content={messages.membership} />
      <FooterSection content={messages.footer} sectionLinks={sectionLinks} />
    </main>
  );
}
