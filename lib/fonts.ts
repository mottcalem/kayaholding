import { Plus_Jakarta_Sans } from "next/font/google";

/** Variable font — avoids Turbopack multi-weight import-map errors. */
export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin-ext"],
  display: "swap",
  variable: "--font-sans",
});
