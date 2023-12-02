import { twcn } from "@/helpers/utils";
import { Barlow_Condensed, Plus_Jakarta_Sans } from "next/font/google";

const FontSans = Plus_Jakarta_Sans({
  weight: "variable",
  display: "swap",
  variable: "--font-sans",
  subsets: ["latin"],
});

const FontAccent = Barlow_Condensed({
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-accent",
  subsets: ["latin"],
});

export const fontVars = twcn(FontSans.variable, FontAccent.variable);
