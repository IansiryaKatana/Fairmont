import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
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

export function Footer() {
  return (
    <footer className="p-3">
      {/* Framed Container with Rounded Corners */}
      <div className="relative w-full rounded-3xl overflow-hidden bg-primary text-primary-foreground">
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
    </footer>
  );
}