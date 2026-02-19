import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Navbar } from "@/components/layout/Navbar";
import { CTASection } from "@/components/shared/CTASection";
import { 
  ClipboardCheck, 
  LineChart, 
  Search, 
  Calculator, 
  FileSearch, 
  Settings,
  Wrench,
  ArrowUpRight,
  Star,
} from "lucide-react";
import { useMouseParallax } from "@/hooks/use-mouse-parallax";

const services = [
  {
    icon: ClipboardCheck,
    title: "Construction & Project Management",
    heading: "Seamless project delivery.",
    description: "We manage project scope, schedule, and budget on behalf of our clients, coordinating all stakeholders (architects, contractors, engineers) to ensure a seamless process from inception to completion.",
    timeline: "2-4 weeks",
    image: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: LineChart,
    title: "Project Monitoring",
    heading: "Independent oversight.",
    description: "We act as independent project monitors, providing clients with regular progress reports, risk assessments, and quality audits. Our monitoring service gives peace of mind that projects are on track.",
    timeline: "Ongoing",
    image: "https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: Search,
    title: "Technical Due Diligence",
    heading: "Thorough assessment.",
    description: "Before you invest in or initiate a project, we conduct thorough due diligence – assessing technical feasibility, identifying potential pitfalls, and analyzing regulatory compliance.",
    timeline: "3-6 weeks",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: Calculator,
    title: "Quantity Surveying & Cost Management",
    heading: "Financial control.",
    description: "Our cost management experts and quantity surveyors ensure your project is financially controlled. We prepare budgets, manage tenders, and track costs to prevent overruns.",
    timeline: "2-5 weeks",
    image: "https://images.pexels.com/photos/590570/pexels-photo-590570.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: FileSearch,
    title: "Feasibility Studies",
    heading: "Clear roadmap.",
    description: "Not sure if a project is viable? We perform feasibility studies covering design options, planning constraints, and financial projections, so you have a clear roadmap from the start.",
    timeline: "4-8 weeks",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: Settings,
    title: "Value Engineering",
    heading: "Enhanced efficiency.",
    description: "We analyze designs and specifications to recommend alternatives that reduce costs or improve function. Our value engineering maintains project objectives while enhancing efficiency.",
    timeline: "2-4 weeks",
    image: "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: Wrench,
    title: "Testing & Commissioning",
    heading: "Standards compliance.",
    description: "We oversee the final testing and commissioning of facilities to make sure every system and component performs to standards before project handover.",
    timeline: "1-3 weeks",
    image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  }),
};

const Services = () => {
  const parallax = useMouseParallax(15);
  const [selectedService, setSelectedService] = useState(0);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  // Use hovered service if available, otherwise use selected service
  // This prevents flickering by maintaining state consistency
  const activeService = hoveredService !== null ? hoveredService : selectedService;

  return (
    <Layout showFooter={false}>
      {/* Hero Section - Split Layout */}
      <section className="h-screen p-3">
        <div className="relative h-full w-full rounded-3xl overflow-hidden flex">
          {/* Navbar inside hero */}
          <div className="absolute top-0 left-0 right-0 z-50">
            <Navbar variant="transparent" insideHero={true} />
          </div>

          {/* Left Panel - Dark Background with Content */}
          <div className="w-full lg:w-1/2 bg-black relative z-10 flex items-center">
            <div className="w-full px-6 md:px-12 lg:px-16 py-20 pt-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-lg"
              >
                {/* Brand Name */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mb-8"
                >
                  <h2 className="text-white text-2xl font-bold mb-4">Fairmont PM</h2>
                  <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    <span className="text-white text-sm">Available for work</span>
                  </div>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                  custom={1}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight"
                >
                  Your trusted partner for quality construction consulting
                </motion.h1>

                {/* Body Text */}
                <motion.p
                  custom={2}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-white/70 text-lg leading-relaxed mb-8"
                >
                  Fairmont PM delivers expert construction consulting, creating successful projects with quality craftsmanship and professional expertise.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Work with us
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Right Panel - Image with Testimonial Overlay */}
          <div className="hidden lg:block w-1/2 relative">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1920')",
                transform: `translate(${parallax.x * 0.5}px, ${parallax.y * 0.5}px) scale(1.05)`,
              }}
            />
            
            {/* Testimonial Box - Bottom Right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-8 right-8 bg-black/80 backdrop-blur-sm rounded-lg p-6 max-w-sm z-20"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-white text-sm leading-relaxed italic">
                "Fairmont PM has been a game-changer for our projects. Their ability to blend functionality with expert project management is unparalleled."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Interactive Section */}
      <section className="py-12 md:py-24 bg-white min-h-screen relative z-0">
        <div className="container mx-auto px-4 relative z-10">
          {/* Header Section with Three Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-1.5 mb-8 lg:mb-12">
            {/* Column 1 - Services Title */}
            <div className="lg:col-span-1">
              <h2 className="text-foreground font-semibold text-sm tracking-wider uppercase flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Services
              </h2>
            </div>

            {/* Column 2 - Service Heading */}
            <div className="lg:col-span-1">
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                What we offer.
              </h2>
            </div>

            {/* Column 3 - Lorem Ipsum */}
            <div className="lg:col-span-1">
              <p className="text-muted-foreground text-sm leading-relaxed" style={{ fontSize: '14px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
              </p>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-1.5 items-start">
            {/* Left Section - Services List */}
            <div className="lg:col-span-1 order-1 h-[250px] sm:h-[300px] md:h-[400px] lg:h-[600px] flex flex-col gap-2 md:gap-3 relative z-10 mb-4 lg:mb-0">
              {services.map((service, index) => {
                const isActive = activeService === index;
                const isHovered = hoveredService === index;
                return (
                  <motion.button
                    key={index}
                    onClick={() => {
                      setSelectedService(index);
                      setHoveredService(null);
                    }}
                    onMouseEnter={() => {
                      if (index !== selectedService) {
                        setHoveredService(index);
                      }
                    }}
                    onMouseLeave={() => {
                      if (index !== selectedService) {
                        setHoveredService(null);
                      }
                    }}
                    className={`w-full text-left px-4 py-4 rounded-lg transition-all duration-200 ease-in-out flex items-center flex-1 relative z-10 cursor-pointer ${
                      isActive
                        ? "bg-gray-400 text-white"
                        : index % 2 === 0 ? "bg-gray-100 hover:bg-gray-200" : "bg-gray-50 hover:bg-gray-100"
                    }`}
                    whileHover={!isActive ? { scale: 1.01 } : {}}
                    whileTap={{ scale: 0.99 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  >
                    <span className={`text-sm font-medium transition-colors ${
                      isActive ? "text-white font-semibold" : "text-foreground"
                    }`}>
                      {service.title}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Middle Section - Service Description Card */}
            <div className="lg:col-span-1 relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[600px] order-2 lg:order-2 z-10 mb-4 lg:mb-0">
              <div className="h-full bg-gray-100 rounded-2xl p-4 md:p-6 relative z-10 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    className="h-full flex flex-col justify-between"
                  >
                    <div className="flex-1 overflow-y-auto">
                      <p className="text-foreground/80 text-base md:text-lg leading-relaxed">
                        {services[activeService].description}
                      </p>
                    </div>
                    <div className="mt-4 pt-4 md:pt-6 border-t border-gray-300 shrink-0">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                        <span className="text-muted-foreground text-sm">Timeline</span>
                        <span className="text-foreground font-medium">{services[activeService].timeline}</span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right Section - Service Image */}
            <div className="lg:col-span-1 order-3 relative z-10">
              <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[600px] rounded-2xl overflow-hidden bg-gray-200">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService}
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <img
                      src={services[activeService].image}
                      alt={services[activeService].title}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        heading="Need a Custom Solution?"
        description="Contact us to discuss how we can tailor our services to meet your specific project requirements."
        backgroundImage="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800"
      />
    </Layout>
  );
};

export default Services;