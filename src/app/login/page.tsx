import type { Metadata } from "next";
import LoginClient from "./login-client";

export const metadata: Metadata = {
  title: "Teacher Login | Speak Fluidly",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return <LoginClient />;
}
