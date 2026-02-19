import { motion } from "framer-motion";
import { Lightbulb, Shield, Users, Clock } from "lucide-react";

const differentiators = [
  {
    icon: Lightbulb,
    title: "Proactive Approach",
    description: "We don't wait for problems to arise. We analyze situations, anticipate risks, and find solutions before issues escalate.",
  },
  {
    icon: Shield,
    title: "Quality & Compliance",
    description: "Rigorous standards maintained throughout, complying with all local and international regulations without sacrificing your quality controls.",
  },
  {
    icon: Users,
    title: "Client Trust",
    description: "Our clients return because we deliver on promises – on time and on budget – building long-term partnerships based on results.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Meticulous planning and experienced execution ensure your project milestones are met consistently throughout the development lifecycle.",
  },
];

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

export function WhyChooseUsSection() {
  return (
    <section className="py-4 md:py-24 p-3">
      {/* Framed Container with Rounded Corners */}
      <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary-darker">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              custom={0}
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-white/60 font-medium text-sm tracking-widest uppercase mb-4 block"
            >
              Why Choose Us
            </motion.span>
            <motion.h2 
              custom={1}
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              What Makes{" "}
              <span className="text-white/80">Fairmont PM</span> Different
            </motion.h2>
            <motion.p 
              custom={2}
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-white/70 text-lg leading-relaxed mb-8"
            >
              Since 2016, we've built our reputation on delivering exceptional results 
              for clients across residential, commercial, industrial, and logistics sectors. 
              Our multicultural, multidisciplinary team brings unmatched expertise to every project.
            </motion.p>
            
            {/* Stats */}
            <div className="flex items-start gap-6 md:gap-8">
              {[
                { value: "2016", label: "Established" },
                { value: "10+", label: "Languages" },
                { value: "4", label: "Sectors" },
              ].map((stat, i) => (
                <motion.div 
                  key={stat.label} 
                  className="text-left"
                  custom={3 + i}
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <p className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </p>
                  <p className="text-white/60 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/15 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}