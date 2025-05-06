import MaxWidthContainer from "@/components/base/MaxWidthContainer";
import { m } from "./motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

export const MMaxWidthContainer = m.create(MaxWidthContainer, {
  forwardMotionProps: true,
});

export const MScrollArea = m.create(ScrollArea);

export const MImage = m.create(Image);
