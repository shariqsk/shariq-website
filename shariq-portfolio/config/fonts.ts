import { Source_Code_Pro as FontMono, Inter as FontSans, Pixelify_Sans as FontPixel, Geist as FontUi } from "next/font/google";

/* Used by the landing page only. */
export const fontUi = FontUi({
  subsets: ["latin"],
  variable: "--font-ui",
});

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
