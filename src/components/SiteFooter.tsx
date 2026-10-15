"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./Footer";

type FooterRight = { type: "text"; label: string } | { type: "link"; label: string; to: string };

const footerByPath: Record<string, FooterRight> = {
  "/home": { type: "text", label: "Portfolio — Jakarta, ID" },
  "/projects": { type: "link", label: "Next: Education →", to: "/education" },
  "/education": { type: "link", label: "Next: Certificates →", to: "/certificates" },
  "/certificates": { type: "link", label: "Get in touch →", to: "/home#contact" },
};

export function SiteFooter() {
  const pathname = usePathname();
  return <Footer right={footerByPath[pathname] ?? footerByPath["/home"]} />;
}
