import {
  AISection,
  HeroSection,
  RequestSection,
} from "@/components/collection-page/sections";
import React from "react";

export default function page({ params }: { params: { id: string } }) {
  return (
    <>
      <HeroSection />
      <AISection />
      <RequestSection />
    </>
  );
}
