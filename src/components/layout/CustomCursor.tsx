import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 400, damping: 35 });
  const springY = useSpring(cursorY, { stiffness: 400, damping: 35 });

  useEffect(() => {
    const isFinePointer = window.matchMedia?.("(pointer: fine)").matches;
    if (!isFinePointer) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, [role='button'], input, textarea"));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden md:block rounded-full border border-primary/60 mix-blend-difference"
      style={{
        x: springX,
        y: springY,
        width: hovering ? 48 : 32,
        height: hovering ? 48 : 32,
        marginLeft: hovering ? -8 : 0,
        marginTop: hovering ? -8 : 0,
        backgroundColor: hovering ? "rgba(6,182,212,0.25)" : "transparent",
      }}
      transition={{ width: { duration: 0.2 }, height: { duration: 0.2 } }}
      aria-hidden="true"
    />
  );
}
