import { twcn } from "@/helpers";
import { Plus_Jakarta_Sans, Barlow_Condensed } from "next/font/google";

const Font_Sans = Plus_Jakarta_Sans({
  weight: "variable",
  display: "swap",
  variable: "--font-sans",
  subsets: ["latin"],
});

const Font_Accent = Barlow_Condensed({
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-accent",
  subsets: ["latin"],
});

export const fontVars = twcn(Font_Sans.variable, Font_Accent.variable);
