import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
} ;
export default React.forwardRef<HTMLDivElement, Props>(
  function MaxWidthContainer({ children, className }, ref) {
    return (
      <div
        ref={ref}
        className={cn("max-w-screen-2xl mx-auto w-full", className)}>
        {children}
      </div>
    );
  }
);
