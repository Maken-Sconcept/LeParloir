import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { getMessages } from "@/lib/messages";

const messages = getMessages("fr");

export const metadata: Metadata = {
  title: messages.meta.title,
  description: messages.meta.description,
};

export default function Home() {
  return <HomePage locale="fr" messages={messages} />;
}
