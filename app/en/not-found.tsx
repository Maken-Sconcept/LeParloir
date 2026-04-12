import Link from "next/link";
import { getMessages } from "@/lib/messages";

const messages = getMessages("en");

export default function EnglishNotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted px-6">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">{messages.notFound.title}</h1>
        <p className="mb-4 text-xl text-muted-foreground">
          {messages.notFound.description}
        </p>
        <Link href="/en" className="text-primary underline hover:text-primary/90">
          {messages.notFound.cta}
        </Link>
      </div>
    </main>
  );
}
