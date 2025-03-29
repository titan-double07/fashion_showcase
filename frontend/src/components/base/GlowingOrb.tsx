import { m } from "@/lib/motion/motion";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function GlowingOrb({
  size = 200,
  className,
}: {
  size?: number;
  className?: string;
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Function to generate random positions
  const randomPosition = () => ({
    x: Math.random() * (window.innerWidth - size),
    y: Math.random() * (window.innerHeight - size),
  });

  useEffect(() => {
    // Move to a new position every 4-6 seconds
    const interval = setInterval(() => {
      setPosition(randomPosition());
    },  4000); // 4 seconds interval

    return () => clearInterval(interval);
  }, []);

  return (
    <m.div
      animate={{ x: position.x, y: position.y }}
      transition={{ duration: 4, ease: "easeInOut" }}
      className={cn(
        `absolute rounded-full blur-50 blur-3xl opacity-40 bg-pink-500`,
        className
      )}
      style={{ width: size, height: size }}
    />
  );
}
