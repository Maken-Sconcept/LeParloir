import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { getMessages } from "@/lib/messages";

const messages = getMessages("en");

export const metadata: Metadata = {
  title: messages.meta.title,
  description: messages.meta.description,
};

export default function EnglishHome() {
  return <HomePage locale="en" messages={messages} />;
}
