import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useMouseParallax } from "@/hooks/use-mouse-parallax";

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

const Contact = () => {
  const { toast } = useToast();
  const parallax = useMouseParallax(15);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiry: "general",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      inquiry: "general",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout>
      {/* Hero Section - Contained with rounded corners */}
      <section className="h-screen p-3">
        <div className="relative h-full w-full rounded-3xl overflow-hidden flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920')",
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
                Contact Us
              </motion.span>
              <motion.h1
                custom={1}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
              >
                Let's Build Something Great Together
              </motion.h1>
              <motion.p
                custom={2}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl"
              >
                Ready to discuss your project? Get in touch with our team and discover 
                how we can help bring your construction vision to life.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-4 p-3">
        {/* Framed Container with Rounded Corners */}
        <div className="relative w-full rounded-3xl overflow-hidden bg-black text-white">
          <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-2xl font-bold mb-6">
                  Contact Information
                </h2>
                <p className="text-white/70 leading-relaxed">
                  Reach out to us directly or fill out the form. We're here to help 
                  with any questions about our services.
                </p>
              </motion.div>

              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: "Office Address",
                    content: (
                      <p className="text-white/60 text-sm">
                        Business First Center<br />
                        Davyfield Road, Blackburn<br />
                        BB1 2QY, United Kingdom
                      </p>
                    ),
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    content: (
                      <a
                        href="tel:+441254460360"
                        className="text-white/60 text-sm hover:text-accent transition-colors"
                      >
                        +44 1254 460 360
                      </a>
                    ),
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    content: (
                      <a
                        href="mailto:info@fairmontpm.co.uk"
                        className="text-white/60 text-sm hover:text-accent transition-colors"
                      >
                        info@fairmontpm.co.uk
                      </a>
                    ),
                  },
                  {
                    icon: Clock,
                    title: "Office Hours",
                    content: (
                      <p className="text-white/60 text-sm">
                        Monday - Friday: 9:00 AM - 5:30 PM<br />
                        Saturday - Sunday: Closed
                      </p>
                    ),
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="flex items-start gap-4 cursor-default"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center shrink-0 transition-colors hover:bg-accent/30"
                    >
                      <item.icon className="w-6 h-6 text-accent" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      {item.content}
                    </div>
                  </motion.div>
                ))}
              </div>

            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.01 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { id: "name", label: "Full Name *", placeholder: "John Smith", type: "text", required: true },
                      { id: "email", label: "Email Address *", placeholder: "john@company.com", type: "email", required: true },
                    ].map((field, index) => (
                      <motion.div
                        key={field.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <label htmlFor={field.id} className="block text-sm font-medium mb-2">
                          {field.label}
                        </label>
                        <motion.input
                          type={field.type}
                          id={field.id}
                          name={field.id}
                          value={formData[field.id as keyof typeof formData] as string}
                          onChange={handleChange}
                          required={field.required}
                          whileFocus={{ scale: 1.02, borderColor: "hsl(var(--accent))" }}
                          className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                          placeholder={field.placeholder}
                        />
                      </motion.div>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { id: "phone", label: "Phone Number", placeholder: "+44 1234 567890", type: "tel", required: false },
                      { id: "company", label: "Company Name", placeholder: "Your Company Ltd", type: "text", required: false },
                    ].map((field, index) => (
                      <motion.div
                        key={field.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
                      >
                        <label htmlFor={field.id} className="block text-sm font-medium mb-2">
                          {field.label}
                        </label>
                        <motion.input
                          type={field.type}
                          id={field.id}
                          name={field.id}
                          value={formData[field.id as keyof typeof formData] as string}
                          onChange={handleChange}
                          whileFocus={{ scale: 1.02, borderColor: "hsl(var(--accent))" }}
                          className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                          placeholder={field.placeholder}
                        />
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <label htmlFor="inquiry" className="block text-sm font-medium mb-2">
                      Type of Inquiry
                    </label>
                    <motion.select
                      id="inquiry"
                      name="inquiry"
                      value={formData.inquiry}
                      onChange={handleChange}
                      whileFocus={{ scale: 1.02, borderColor: "hsl(var(--accent))" }}
                      className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    >
                      <option value="general" className="bg-black">General Inquiry</option>
                      <option value="quote" className="bg-black">Request a Quote</option>
                      <option value="project" className="bg-black">Project Discussion</option>
                      <option value="partnership" className="bg-black">Partnership Opportunity</option>
                      <option value="other" className="bg-black">Other</option>
                    </motion.select>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message *
                    </label>
                    <motion.textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      whileFocus={{ scale: 1.01, borderColor: "hsl(var(--accent))" }}
                      className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent resize-none transition-all"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button type="submit" variant="hero" size="xl" className="w-full md:w-auto">
                        <Send className="w-5 h-5" />
                        Send Message
                      </Button>
                    </motion.div>
                  </motion.div>
                </form>
              </motion.div>
            </motion.div>
          </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;