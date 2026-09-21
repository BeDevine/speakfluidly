import type { Metadata } from "next";
import ContactClient from "./contact-client";

export const metadata: Metadata = {
  title: "Book Your Free Intro Call | Speak Fluidly",
  description: "Get in touch to book a free 20-minute intro call and start speaking with confidence.",
  openGraph: {
    title: "Book Your Free Intro Call | Speak Fluidly",
    description: "Get in touch to book a free 20-minute intro call.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
