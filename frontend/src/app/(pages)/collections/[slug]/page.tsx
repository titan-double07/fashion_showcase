import {
  AISection,
  HeroSection,
  RequestSection,
} from "@/components/collection-page/sections";
import React from "react";

export default function page({ params }: { params: { slug: string } }) {
  return (
    <>
      {params.slug}
      <HeroSection />
      <AISection />
      <RequestSection />
    </>
  );
}
