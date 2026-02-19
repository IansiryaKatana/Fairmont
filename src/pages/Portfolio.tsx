import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Navbar } from "@/components/layout/Navbar";
import { CTASection } from "@/components/shared/CTASection";
import { MapPin, Calendar } from "lucide-react";
import { useMouseParallax } from "@/hooks/use-mouse-parallax";

const projects = [
  {
    id: "hollins-park",
    title: "Hollins Park Development",
    location: "Darwen, UK",
    year: "2021",
    category: "Residential & Industrial",
    description: "A prestigious development comprising 37 architecturally distinctive three- and four-bedroom homes set in a thoughtfully planned estate, plus industrial units.",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
    stats: [
      { label: "Homes", value: "37" },
      { label: "Industrial Units", value: "12" },
      { label: "Project Value", value: "£4.1M" },
    ],
    services: ["Project Management", "Technical Due Diligence", "Cost Management"],
    featured: true,
  },
  {
    id: "blackburn-commercial",
    title: "Blackburn Commercial Park",
    location: "Blackburn, UK",
    year: "2022",
    category: "Commercial",
    description: "A modern commercial development featuring office spaces and retail units, designed to meet the growing demand for business facilities in the region.",
    image: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=800",
    stats: [
      { label: "Office Units", value: "8" },
      { label: "Sq Ft", value: "45,000" },
      { label: "Project Value", value: "£6.2M" },
    ],
    services: ["Project Management", "Quantity Surveying", "Value Engineering"],
    featured: false,
  },
  {
    id: "logistics-hub",
    title: "North West Logistics Hub",
    location: "Lancashire, UK",
    year: "2023",
    category: "Logistics",
    description: "A state-of-the-art logistics facility designed to support regional distribution needs, featuring modern warehousing and efficient loading systems.",
    image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800",
    stats: [
      { label: "Warehouses", value: "3" },
      { label: "Sq Ft", value: "120,000" },
      { label: "Project Value", value: "£8.5M" },
    ],
    services: ["Project Monitoring", "Technical Due Diligence", "Testing & Commissioning"],
    featured: false,
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

const Portfolio = () => {
  const parallax = useMouseParallax(15);

  return (
    <Layout showFooter={false}>
      {/* Hero Section - Contained with rounded corners */}
      <section className="h-screen p-3">
        <div className="relative h-full w-full rounded-3xl overflow-hidden flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920')",
              transform: `translate(${parallax.x}px, ${parallax.y}px) scale(1.1)`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          
          {/* Navbar inside hero */}
          <div className="absolute top-0 left-0 right-0 z-50">
            <Navbar variant="transparent" insideHero={true} />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 pt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <motion.span
                custom={0}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block"
              >
                Our Portfolio
              </motion.span>
              <motion.h1
                custom={1}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
              >
                Projects That Showcase Excellence
              </motion.h1>
              <motion.p
                custom={2}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl"
              >
                Explore our portfolio of successful construction projects across residential, 
                commercial, industrial, and logistics sectors.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300"
              >
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Image */}
                  <div className="lg:col-span-2 relative h-64 lg:h-auto overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-6 left-6">
                      <span className="bg-accent text-primary-darker px-4 py-2 rounded-full text-sm font-semibold">
                        {project.category}
                      </span>
                    </div>
                    {project.featured && (
                      <div className="absolute top-6 right-6">
                        <span className="bg-white text-primary-darker px-4 py-2 rounded-full text-sm font-semibold">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-3 p-8 lg:p-10 text-white">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <div className="flex items-center gap-2 text-white/60">
                        <MapPin className="w-4 h-4 text-accent" />
                        <span className="text-sm">{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/60">
                        <Calendar className="w-4 h-4 text-accent" />
                        <span className="text-sm">{project.year}</span>
                      </div>
                    </div>

                    <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4">
                      {project.title}
                    </h3>

                    <p className="text-white/70 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-white/5 rounded-xl">
                      {project.stats.map((stat, idx) => (
                        <div key={stat.label} className={`text-center ${idx > 0 ? 'border-l border-white/10' : ''}`}>
                          <p className="font-display text-xl lg:text-2xl font-bold text-accent">
                            {stat.value}
                          </p>
                          <p className="text-xs text-white/50">{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Services */}
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service) => (
                        <span
                          key={service}
                          className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-sm"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        heading="Have a Project in Mind?"
        description="Let's discuss how we can bring your vision to life with our expertise and proven track record."
        backgroundImage="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
      />
    </Layout>
  );
};

export default Portfolio;