import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Fairmont PM managed our development project excellently despite significant challenges. Their proactive approach and attention to detail made all the difference.",
    author: "James Harrison",
    role: "Property Developer",
    company: "Harrison Developments",
    rating: 5.0,
    avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    quote: "The team's technical expertise and commitment to quality standards exceeded our expectations. They delivered on time and within budget.",
    author: "Sarah Mitchell",
    role: "Investment Director",
    company: "Northgate Capital",
    rating: 5.0,
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    quote: "Working with Fairmont PM was seamless. Their project monitoring services gave us complete visibility and confidence throughout the construction phase.",
    author: "Michael Chen",
    role: "Operations Manager",
    company: "Logistics UK Ltd",
    rating: 5.0,
    avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    quote: "Outstanding project management from start to finish. Fairmont PM's attention to detail and proactive communication kept our project on track and within budget.",
    author: "Emma Thompson",
    role: "Development Manager",
    company: "Thompson Properties",
    rating: 5.0,
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    quote: "Fairmont PM's expertise in construction consulting helped us navigate complex regulatory requirements. Their strategic guidance was invaluable.",
    author: "David Williams",
    role: "CEO",
    company: "Williams Construction Group",
    rating: 5.0,
    avatar: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    quote: "Professional, reliable, and results-driven. Fairmont PM transformed our construction project with their exceptional project management skills.",
    author: "Lisa Anderson",
    role: "Project Owner",
    company: "Anderson Developments",
    rating: 5.0,
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
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

export function TestimonialsSection() {
  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];
  const [isPaused, setIsPaused] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Update current index for dots
  React.useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Update every 4 seconds (40s / 10 testimonials = ~4s per testimonial)

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-24 p-3">
      {/* Framed Container with Rounded Corners */}
      <div className="relative w-full rounded-3xl overflow-hidden bg-black">
        <div className="container mx-auto px-4 py-24">
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
            className="text-primary-light font-semibold text-sm tracking-wider uppercase mb-4 block"
          >
            Client Testimonials
          </motion.span>
          <motion.h2 
            custom={1}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Trusted by Industry Leaders
          </motion.h2>
          <motion.p 
            custom={2}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-white/60 text-lg leading-relaxed"
          >
            Our commitment to excellence has earned us the trust of clients across 
            the construction and development industry.
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative overflow-hidden">
          {/* Left Gradient Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-black via-black/90 to-transparent" />
          
          {/* Right Gradient Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-black via-black/90 to-transparent" />
          
          {/* Infinite Scroll Container */}
          <div 
            className="overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div 
              className="flex gap-4 animate-scroll" 
              style={{ 
                width: 'fit-content',
                animationPlayState: isPaused ? 'paused' : 'running',
              }}
            >
              {/* First Set */}
              {duplicatedTestimonials.map((testimonial, index) => (
                <div key={`first-${index}`} className="flex-shrink-0 w-[300px] md:w-[400px] lg:w-[350px]">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full flex flex-col">
                    {/* Profile Picture */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="relative shrink-0">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          className="w-16 h-16 rounded-full object-cover grayscale"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-white text-lg mb-1">
                          {testimonial.author}
                        </h3>
                        <p className="text-white/60 text-sm">
                          {testimonial.role}
                        </p>
                        <p className="text-primary-light text-sm font-medium mt-1">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    {/* Star Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-white font-semibold text-sm">
                        {testimonial.rating}
                      </span>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Quote */}
                    <p className="text-white/90 leading-relaxed flex-1 italic">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Second Set for Seamless Loop */}
              {duplicatedTestimonials.map((testimonial, index) => (
                <div key={`second-${index}`} className="flex-shrink-0 w-[300px] md:w-[400px] lg:w-[350px]">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full flex flex-col">
                    {/* Profile Picture */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="relative shrink-0">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          className="w-16 h-16 rounded-full object-cover grayscale"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-white text-lg mb-1">
                          {testimonial.author}
                        </h3>
                        <p className="text-white/60 text-sm">
                          {testimonial.role}
                        </p>
                        <p className="text-primary-light text-sm font-medium mt-1">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    {/* Star Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-white font-semibold text-sm">
                        {testimonial.rating}
                      </span>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Quote */}
                    <p className="text-white/90 leading-relaxed flex-1 italic">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Dots - Flattened like Hero Section */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 100);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-white w-8"
                    : "bg-white/40 hover:bg-white/60 w-2"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}