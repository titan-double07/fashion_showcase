import * as m from "motion/react-m";
import {
  Transition,
  useScroll,
  Variant,
  Variants,
    useAnimate,
  useInView
} from "motion/react";

export { m, useScroll,useAnimate,useInView };

// VARIANTS
// slide in
export const slideIn = ({
  direction,
  distance = 50,
  transition = { duration: 0.8, delay: 0, ease: "easeInOut" },
}: {
  direction: "left" | "right" | "top" | "bottom";
  distance?: number;
  transition?: Transition;
}): Variants => {
  const axis = direction === "left" || direction === "right" ? "x" : "y";
  const moveDistance =
    direction === "left" || direction === "top" ? -distance : distance;

  return {
    hidden: {
      opacity: 0,
      [axis]: moveDistance,
    } as Variant,
    visible: {
      opacity: 1,
      [axis]: 0,
      transition,
    } as Variant,
  };
};

// stagger container for parent divss
export const staggerContainer = ({
  staggerChildren,
  staggerDirection = 1,
  delayChildren = 0,
}: {
  staggerChildren: number;
  staggerDirection?: 1 | -1;
  delayChildren?: number;
}): Variants => ({
  visible: {
    transition: {
      when: "beforeChildren",
      staggerChildren,
      staggerDirection,
      delayChildren,
    },
  },
  hidden: {},
});
