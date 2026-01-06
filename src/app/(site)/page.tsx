import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextCommerce | E-commerce Webiste",
  description: "",
  // other metadata
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
