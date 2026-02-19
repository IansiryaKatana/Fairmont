import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ClipboardCheck, LineChart, Search, Calculator, FileSearch, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: ClipboardCheck,
    title: "Project Management",
    description: "Overseeing projects from inception to completion, coordinating all stakeholders for seamless delivery.",
  },
  {
    icon: LineChart,
    title: "Project Monitoring",
    description: "Independent progress reports, risk assessments, and quality audits to keep your project on track.",
  },
  {
    icon: Search,
    title: "Technical Due Diligence",
    description: "Thorough assessment of technical feasibility, potential pitfalls, and regulatory compliance.",
  },
  {
    icon: Calculator,
    title: "Quantity Surveying",
    description: "Budget preparation, tender management, and cost tracking to prevent overruns.",
  },
  {
    icon: FileSearch,
    title: "Feasibility Studies",
    description: "Comprehensive analysis of design options, planning constraints, and financial projections.",
  },
  {
    icon: Settings,
    title: "Value Engineering",
    description: "Design and specification analysis to reduce costs while maintaining project objectives.",
  },
];

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export function ServicesSection() {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 md:mb-16"
        >
          <motion.span 
            custom={0}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block"
          >
            What We Do
          </motion.span>
          <motion.h2 
            custom={1}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Comprehensive Construction{" "}
            <span className="text-primary">Consulting Services</span>
          </motion.h2>
          <motion.p 
            custom={2}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            Tailored solutions for every stage of your development project, 
            ensuring efficiency, quality, and optimal value.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group rounded-2xl p-8 transition-all duration-300 ${
                index === 0
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/50 border border-border hover:bg-primary hover:border-primary"
              }`}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${
                index === 0
                  ? "bg-white/20"
                  : "bg-primary group-hover:bg-white"
              }`}>
                <service.icon className={`w-7 h-7 transition-colors ${
                  index === 0
                    ? "text-white"
                    : "text-white group-hover:text-primary"
                }`} />
              </div>
              <h3 className={`text-xl font-semibold mb-3 transition-colors ${
                index === 0
                  ? "text-white"
                  : "text-foreground group-hover:text-white"
              }`}>
                {service.title}
              </h3>
              <p className={`leading-relaxed transition-colors ${
                index === 0
                  ? "text-white/80"
                  : "text-muted-foreground group-hover:text-white/80"
              }`}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8 md:mt-12"
        >
          <Button asChild size="lg" className="rounded-full">
            <Link to="/services">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}