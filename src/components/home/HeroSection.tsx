import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useMouseParallax } from "@/hooks/use-mouse-parallax";
import { Navbar } from "@/components/layout/Navbar";

const heroImages = [
  "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop",
  "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop",
  "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop",
  "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop",
];

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 + i * 0.04,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const title = "Fairmont PM";
  const parallax = useMouseParallax(15);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen p-3">
      {/* Premium Container with Border Radius */}
      <div className="relative w-full h-[calc(100vh-24px)] rounded-2xl overflow-hidden">
        {/* Background Image Carousel with Parallax */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
            style={{
              transform: `translate(${parallax.x}px, ${parallax.y}px) scale(1.05)`,
            }}
          >
            <img
              src={heroImages[currentImageIndex]}
              alt="Construction project"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-darker/60 via-primary-dark/50 to-primary-darker/80" />

        {/* Geometric Shape - Brand Element with Parallax */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="absolute top-1/4 right-[10%] w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] hidden md:block"
          style={{
            transform: `translate(${parallax.x * 0.5}px, ${parallax.y * 0.5}px)`,
          }}
        >
          <div className="w-full h-full rounded-full bg-primary/30 blur-3xl" />
        </motion.div>

        {/* Navbar inside hero */}
        <div className="absolute top-0 left-0 right-0 z-50">
          <Navbar variant="transparent" insideHero={true} />
        </div>

        {/* Content - Full Width */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-6 md:px-12 lg:px-16 relative z-10 pb-20 md:pb-32">
            <div className="flex flex-col lg:flex-row justify-between items-end gap-8">
              {/* Right Content - Above title on mobile, right side on desktop */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="flex flex-col text-left lg:items-end lg:text-right text-white max-w-sm order-1 lg:order-2 mb-8 lg:mb-0"
              >
                <p className="font-serif text-sm text-white/60 mb-3 italic">
                  Since 2016 · Blackburn, UK
                </p>
                <p className="text-sm md:text-base text-white/80 leading-relaxed">
                  From feasibility to handover, we help you optimise every real estate investment.
                </p>
              </motion.div>

              {/* Left Content - Title Only */}
              <div className="text-white order-2 lg:order-1">
                <motion.h1 className="text-[12vw] md:text-[9.6vw] lg:text-[8vw] xl:text-[7.2vw] font-bold leading-[0.95] tracking-tight whitespace-nowrap">
                  {title.split("").map((char, i) => (
                    <motion.span
                      key={i}
                      custom={i}
                      variants={letterVariants}
                      initial="hidden"
                      animate="visible"
                      className="inline-block"
                      style={{ display: char === " " ? "inline" : "inline-block" }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.h1>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>

        {/* Image Indicators */}
        <div className="absolute bottom-8 right-8 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-white w-8"
                  : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
