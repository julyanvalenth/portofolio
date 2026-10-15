import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../src/styles/global.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.julyan.dev"),
  title: {
    default: "Julyan Valenth | Portfolio",
    template: "%s | Julyan Valenth",
  },
  description:
    "Julyan Valenth, a Software Engineering student in Jakarta who builds apps with Flutter and Node.js.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
