import type { Metadata } from "next";
import { LoadingView } from "../src/views/LoadingView";

export const metadata: Metadata = {
  title: "Welcome",
};

export default function LoadingPage() {
  return <LoadingView />;
}
