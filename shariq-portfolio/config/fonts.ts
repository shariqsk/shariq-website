import { Source_Code_Pro as FontMono, Inter as FontSans, Pixelify_Sans as FontPixel } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const fontPixel = FontPixel({
  subsets: ["latin"],
  variable: "--font-pixel",
  weight: ["400", "500", "600", "700"],
});
