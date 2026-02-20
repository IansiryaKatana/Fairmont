import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import fairmontLogoWhite from "@/assets/fairmont-logo-white.png";
import fairmontLogoColored from "@/assets/fairmont-logo-colored.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Projects" },
  { href: "/blog", label: "Insights" },
];

interface NavbarProps {
  variant?: "transparent" | "solid";
  insideHero?: boolean;
}

export function Navbar({ variant = "transparent", insideHero = false }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (insideHero) {
      setIsScrolled(false);
      return;
    }
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [insideHero]);

  const isTransparent = variant === "transparent" && !isScrolled;

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "z-50 transition-all duration-300",
        insideHero 
          ? "relative w-full" 
          : "fixed top-0 left-0 right-0",
        !insideHero && isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border/50 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className={cn("w-full px-6 md:px-12 lg:px-16", insideHero ? "pt-8 pb-4" : "py-4")}>
        <div className="flex items-center justify-between">
          {/* Logo - Far Left */}
          <Link to="/" className="flex items-center">
            <img
              src={isTransparent ? fairmontLogoWhite : fairmontLogoColored}
              alt="Fairmont PM"
              className="h-8 md:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation - Far Right */}
          <div className="hidden lg:flex items-center">
            {/* Bubble container for nav items and button */}
            <div className={cn(
              "flex items-center gap-1.5 px-3 py-2 rounded-xl",
              "bg-white/10 backdrop-blur-md",
              "shadow-[0_2px_8px_rgba(0,0,0,0.08)]",
              isTransparent ? "bg-white/10" : "bg-white/20"
            )}>
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href || 
                  (link.href === "/" && location.pathname === "/");
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={cn(
                      "text-sm font-medium tracking-wider transition-all relative py-2 px-3",
                      "font-sans",
                      isActive
                        ? "bg-[hsl(var(--nav-active))] text-[hsl(var(--nav-active-foreground))] font-semibold rounded-xl"
                        : "rounded-lg",
                      !isActive && isTransparent
                        ? "text-white/80 hover:text-white hover:bg-white/10"
                        : !isActive && "text-foreground/70 hover:text-foreground hover:bg-white/40"
                    )}
                    style={{ fontFamily: "'Inter Tight', system-ui, sans-serif" }}
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* CTA Button */}
              <Link
                to="/contact"
                className={cn(
                  "rounded-xl py-2 px-3 font-medium tracking-wider text-sm ml-1",
                  "bg-white text-primary hover:bg-[hsl(var(--nav-active))] hover:text-white",
                  "transition-all duration-200 font-sans h-auto inline-flex items-center justify-center",
                  "text-sm font-medium"
                )}
                style={{ fontFamily: "'Inter Tight', system-ui, sans-serif" }}
              >
                Talk To Us
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "lg:hidden p-2 transition-colors",
              isTransparent ? "text-white" : "text-foreground"
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-b border-border"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href || 
                  (link.href === "/" && location.pathname === "/");
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-base font-medium py-2.5 px-4 transition-all tracking-wider font-sans",
                      isActive
                        ? "bg-[hsl(var(--nav-active))] text-[hsl(var(--nav-active-foreground))] font-semibold rounded-xl"
                        : "text-foreground/70 hover:text-foreground rounded-lg"
                    )}
                    style={{ fontFamily: "'Inter Tight', system-ui, sans-serif" }}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Button
                asChild
                size="lg"
                className={cn(
                  "mt-4 rounded-full font-bold font-sans",
                  "bg-white text-primary hover:bg-[hsl(var(--nav-active))] hover:text-white",
                  "transition-all duration-200"
                )}
                style={{ fontFamily: "'Inter Tight', system-ui, sans-serif" }}
              >
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Talk To Us
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}