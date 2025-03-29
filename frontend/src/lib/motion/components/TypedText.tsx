import { m, useAnimate, useInView } from "@/lib/motion/motion";
import { mergeRefs } from "@/utils/merge-refs";
import { useEffect, useRef, useState } from "react";

export default function TypedText({
  text,
  className,
  onAnimationComplete,
}: {
  text: string;
  className?: string;
  onAnimationComplete?: () => void; // Callback for when animation completes
}) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const [scope, animate] = useAnimate();
  const isInView = useInView(ref, { amount: "all", once: true });
  const [isAnimated, setIsAnimated] = useState(false); // Controls whether the text should animate, in order for me to be able to animate the the text one after the other (InfoSection)

  useEffect(() => {
    if (isInView && !isAnimated) {
      animate(
        "span",
        { opacity: [0, 1] },
        { duration: 0.05, delay: (i) => i * 0.05 }
      ).then(() => {
        setIsAnimated(true); // Mark as animated
        onAnimationComplete?.();
      });
    } 
  }, [isInView, animate, onAnimationComplete, isAnimated]);

  return (
    <m.p ref={mergeRefs(ref, scope)} className={className}>
      {text.split("").map((char, i) => (
        <m.span key={i} initial={{ opacity: 0 }} className="inline-block ">
          {char}
        </m.span>
      ))}
    </m.p>
  );
}
