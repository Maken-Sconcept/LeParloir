import type { Messages } from "@/lib/messages";

export type SectionLink = Messages["navigation"]["sections"][number];

export function getSectionLinks(messages: Messages): readonly SectionLink[] {
  return messages.navigation.sections;
}
