import { useState, useEffect, useCallback } from "react";

interface ParallaxValues {
  x: number;
  y: number;
}

export function useMouseParallax(intensity: number = 20): ParallaxValues {
  const [parallax, setParallax] = useState<ParallaxValues>({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const x = ((clientX - centerX) / centerX) * intensity;
      const y = ((clientY - centerY) / centerY) * intensity;

      setParallax({ x, y });
    },
    [intensity]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return parallax;
}
