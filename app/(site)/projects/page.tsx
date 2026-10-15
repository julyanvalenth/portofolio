import type { Metadata } from "next";
import { Projects } from "@/views/Projects";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return <Projects />;
}
