import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import fairmontLogoWhite from "@/assets/fairmont-logo-white.png";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Projects" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "Project Management",
  "Project Monitoring",
  "Technical Due Diligence",
  "Quantity Surveying",
  "Feasibility Studies",
];

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

interface CTASectionProps {
  heading?: string;
  description?: string;
  backgroundImage?: string;
}

export function CTASection({ 
  heading = "Let's Work Together.",
  description = "Ready to bring your construction vision to life? Our expert team is here to guide you through every step of your project, from initial concept to final completion.",
  backgroundImage = "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop"
}: CTASectionProps) {
  return (
    <section className="pt-12 md:pt-16 pb-4 p-3">
      {/* Main Container - Primary Color with Padding (Acts as Frame) */}
      <div className="relative w-full rounded-3xl bg-primary p-3">
        {/* CTA Section - Gradient Background with Image */}
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background Image with Gradient Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          />
          {/* Gradient from white (left) to transparent (right) */}
          <div className="absolute inset-0 bg-gradient-to-r from-white from-0% via-white/80 via-50% to-transparent to-100%" />
          
          <div className="container mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 pb-8 md:pb-12 relative z-10">
            {/* Single Column Content */}
            <div className="max-w-2xl">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-10"
              >
                <motion.p 
                  custom={1}
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-black/70 text-lg md:text-xl leading-relaxed max-w-lg"
                >
                  {description}
                </motion.p>

                {/* CTA Button */}
                <motion.div 
                  custom={2}
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="w-[80%] lg:w-[70%]"
                >
                  <Link 
                    to="/contact"
                    className="group inline-flex items-center justify-between w-full bg-black text-white px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-medium hover:bg-black/90 transition-colors text-base lg:text-lg"
                  >
                    <span>Get in touch</span>
                    <motion.div
                      whileHover={{ x: 4, y: -4 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <ArrowUpRight className="w-5 h-5 lg:w-6 lg:h-6" />
                    </motion.div>
                  </Link>
                </motion.div>

                {/* Contact Information */}
                <motion.div 
                  custom={3}
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-4 pt-6 border-t border-black/10"
                >
                  <a 
                    href="mailto:info@fairmontpm.co.uk"
                    className="block text-black hover:text-black/70 transition-colors text-2xl font-bold"
                  >
                    info@fairmontpm.co.uk
                  </a>
                  <a 
                    href="tel:+441254460360"
                    className="block text-black/70 hover:text-black transition-colors text-lg"
                  >
                    +44 1254 460 360
                  </a>
                </motion.div>

                {/* Social Media Links */}
                <motion.div 
                  custom={4}
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="pt-6 border-t border-black/10"
                >
                  <div className="flex items-center gap-4 text-black/70 text-base">
                    <a 
                      href="https://twitter.com/fairmontpm" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-black transition-colors"
                    >
                      Twitter/X
                    </a>
                    <span>/</span>
                    <a 
                      href="https://instagram.com/fairmontpm" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-black transition-colors"
                    >
                      Instagram
                    </a>
                    <span>/</span>
                    <a 
                      href="https://youtube.com/@fairmontpm" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-black transition-colors"
                    >
                      Youtube
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Footer Section - Primary Color Background with Rounded Bottom */}
        <div className="bg-primary text-primary-foreground rounded-b-3xl mt-3">
          <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Brand Column */}
              <div className="space-y-6">
                <Link to="/">
                  <img
                    src={fairmontLogoWhite}
                    alt="Fairmont PM"
                    className="h-10 w-auto"
                  />
                </Link>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  Providing end-to-end construction consulting services from concept to completion. 
                  Building excellence across the UK since 2016.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm uppercase tracking-wider"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-semibold text-lg mb-6">Our Services</h4>
                <ul className="space-y-3">
                  {services.map((service) => (
                    <li key={service}>
                      <span className="text-primary-foreground/70 text-sm">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary-foreground/60 mt-0.5 shrink-0" />
                    <span className="text-primary-foreground/70 text-sm">
                      Business First Center<br />
                      Davyfield Road, Blackburn<br />
                      BB1 2QY, United Kingdom
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary-foreground/60 shrink-0" />
                    <a
                      href="tel:+441254460360"
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                    >
                      +44 1254 460 360
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary-foreground/60 shrink-0" />
                    <a
                      href="mailto:info@fairmontpm.co.uk"
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                    >
                      info@fairmontpm.co.uk
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-16 pt-8 border-t border-primary-foreground/10">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-primary-foreground/50 text-sm">
                  © {new Date().getFullYear()} Fairmont PM Ltd. All rights reserved.
                </p>
                <div className="flex items-center gap-6 text-sm">
                  <Link to="/privacy" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                    Privacy Policy
                  </Link>
                  <Link to="/terms" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

