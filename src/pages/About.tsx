import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Navbar } from "@/components/layout/Navbar";
import { CTASection } from "@/components/shared/CTASection";
import { Users, Target, Globe, Award, Check, X } from "lucide-react";
import { useMouseParallax } from "@/hooks/use-mouse-parallax";

const timeline = [
  { year: "2016", title: "Company Founded", description: "Fairmont PM established in Blackburn, UK, focusing on residential and commercial project management." },
  { year: "2019", title: "Company Incorporation", description: "Fairmont PM Ltd incorporated and expanded services to industrial and logistics sectors." },
  { year: "2021", title: "Hollins Park Project", description: "Initiated management of the prestigious Hollins Park residential and industrial development." },
  { year: "2023", title: "Continued Growth", description: "Expanded our team and portfolio, delivering excellence across multiple sectors." },
];

const values = [
  {
    icon: Target,
    title: "Proactive Problem-Solving",
    description: "We don't wait for issues to escalate. Our proactive approach means we anticipate challenges and address them early, ensuring smooth project delivery.",
  },
  {
    icon: Award,
    title: "High Standards",
    description: "We adhere to local and international building standards and regulations, while also upholding our clients' own quality requirements.",
  },
  {
    icon: Users,
    title: "Client Trust & Satisfaction",
    description: "We build close relationships with clients. By consistently meeting and exceeding expectations, we earn long-term trust.",
  },
  {
    icon: Globe,
    title: "Multilingual Team",
    description: "Our multicultural team speaks over 10 languages, enabling us to work effectively with diverse clients and partners worldwide.",
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

const About = () => {
  const parallax = useMouseParallax(15);

  return (
    <Layout showFooter={false}>
      {/* Hero Section - Contained with rounded corners */}
      <section className="h-screen p-3">
        <div className="relative h-full w-full rounded-3xl overflow-hidden flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920')",
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
                About Us
              </motion.span>
              <motion.h1
                custom={1}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
              >
                Building Trust Through Excellence
              </motion.h1>
              <motion.p
                custom={2}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl"
              >
                Since 2016, Fairmont PM has been delivering exceptional construction consulting 
                services across the UK, helping clients optimize their real estate investments.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">
                Our Mission
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Helping Clients Optimize Their Real Estate Investments
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Our mission is to deliver comprehensive construction consulting services that 
                exceed expectations. We aim to help clients optimize their real estate investments 
                through proactive and expert project management.
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                Our vision is to continue our steady growth by building even stronger, more 
                specialized teams and consolidating our position as a project management leader 
                in the UK construction industry.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12"
            >
              <h3 className="font-display text-2xl font-bold mb-8">
                Who We Are
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Founded in 2016, Fairmont PM has grown into a multidisciplinary firm with 
                expertise spanning residential, commercial, industrial, and logistics projects.
              </p>
              <p className="text-white/70 leading-relaxed mb-6">
                Our professional team brings engineering know-how and construction experience 
                to every project. We provide tailor-made solutions at each stage of development.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
                <div>
                  <p className="font-display text-3xl font-bold text-accent">10+</p>
                  <p className="text-white/50 text-sm">Languages Spoken</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold text-accent">4</p>
                  <p className="text-white/50 text-sm">Industry Sectors</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values - Comparison Section */}
      <section className="py-24 p-3">
        {/* Framed Container */}
        <div className="relative w-full rounded-3xl overflow-hidden bg-white">
          <div className="container mx-auto px-4 py-16 md:py-24">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
            >
              <motion.span
                custom={0}
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block flex items-center justify-center gap-2"
              >
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Why choose us
              </motion.span>
              <motion.h2
                custom={1}
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground"
              >
                Expert consulting tailored to your business success
              </motion.h2>
            </motion.div>

            {/* Comparison Container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white border border-primary/20 rounded-3xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-primary/10">
                {/* Left Column - Other Firms */}
                <div className="p-8 md:p-12">
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-8 text-foreground">
                    Other Firms
                  </h3>
                  <div className="space-y-6">
                    {[
                      {
                        title: "Generic Strategies",
                        description: "One-size-fits-all solutions that lack personalized insights and flexibility.",
                      },
                      {
                        title: "Limited Guidance",
                        description: "Clients are left to navigate complex challenges with minimal expert support.",
                      },
                      {
                        title: "Hidden Fees",
                        description: "Unexpected costs and additional charges that inflate your total investment.",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex gap-4"
                      >
                        <div className="shrink-0 mt-1">
                          <X className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">
                            {item.title}
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right Column - With Fairmont PM */}
                <div className="p-8 md:p-12 bg-primary/5">
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-8 text-foreground">
                    With Fairmont PM
                  </h3>
                  <div className="space-y-6">
                    {[
                      {
                        title: "Tailored Consulting",
                        description: "Custom strategies designed to fit your unique business needs and goals.",
                      },
                      {
                        title: "Dedicated Support",
                        description: "Expert guidance and hands-on assistance at every stage of your journey.",
                      },
                      {
                        title: "Transparent Pricing",
                        description: "No surprises—clear pricing structure so you pay only for what you need.",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex gap-4"
                      >
                        <div className="shrink-0 mt-1">
                          <Check className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">
                            {item.title}
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-accent font-semibold text-sm tracking-wider uppercase mb-4 block">
              Our Journey
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Company History
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shrink-0">
                    <span className="font-display font-bold text-primary-darker">{item.year}</span>
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-white/20 mt-4" />
                  )}
                </div>
                <div className="pt-4">
                  <h3 className="font-display text-xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/70">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        heading="Ready to Work Together?"
        description="Discover how our expertise can benefit your next construction project."
        backgroundImage="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
      />
    </Layout>
  );
};

export default About;
