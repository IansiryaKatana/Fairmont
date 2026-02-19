import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Calendar } from "lucide-react";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

export function FeaturedProjectSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span 
            custom={0}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block"
          >
            Featured Project
          </motion.span>
          <motion.h2 
            custom={1}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Our Work in Action
          </motion.h2>
          <motion.p 
            custom={2}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            Discover how we transform visions into reality through meticulous planning 
            and expert execution.
          </motion.p>
        </motion.div>

        {/* Featured Project Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white border border-border rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
        >
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <div className="relative h-64 lg:h-auto min-h-[300px]">
              <img 
                src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop" 
                alt="Hollins Park residential development project" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Badge */}
              <div className="absolute top-6 left-6">
                <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Residential Development
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center text-foreground">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Hollins Park Development
              </h3>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm">Darwen, UK</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-sm">2021</span>
                </div>
              </div>

              <p className="text-foreground/70 leading-relaxed mb-6">
                Fairmont PM served as the project manager for Hollins Park, a prestigious 
                development in the historic cotton town of Darwen. The project comprises 
                37 architecturally distinctive three- and four-bedroom homes set in a 
                thoughtfully planned estate, plus industrial units.
              </p>

              {/* Project Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-secondary rounded-xl">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">37</p>
                  <p className="text-xs text-muted-foreground">Homes</p>
                </div>
                <div className="text-center border-x border-border">
                  <p className="text-2xl font-bold text-primary">12</p>
                  <p className="text-xs text-muted-foreground">Industrial Units</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">£4.1M</p>
                  <p className="text-xs text-muted-foreground">Project Value</p>
                </div>
              </div>

              <Button asChild variant="default" size="lg" className="self-start rounded-full">
                <Link to="/portfolio">
                  View Full Portfolio
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}