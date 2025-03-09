"use client";

import { LazyMotion,domMax  } from "motion/react";
export default function LazyMotionProvider({ children }: { children: React.ReactNode }) {
  return <LazyMotion features={domMax}>{children}</LazyMotion>;
}
