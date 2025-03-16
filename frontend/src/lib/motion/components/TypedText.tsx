import { m, useAnimate, useInView } from "@/lib/motion/motion";
import { mergeRefs } from "@/utils/merge-refs";
import { useEffect, useRef } from "react";

export default function TypedText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const [scope, animate] = useAnimate();
  const isInView = useInView(ref, { amount: "all" });

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        { opacity: [0, 1] },
        { duration: 0.05, delay: (i) => i * 0.05 }
      );
    }
  }, [isInView, animate]);

  return (
    <m.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: "all" }}
      ref={mergeRefs(ref, scope)}
      className={className}>
      {text.split("").map((char, i) => (
        <m.span key={i} initial={{ opacity: 0 }} className="inline-block">
          {char}
        </m.span>
      ))}
    </m.p>
  );
}
