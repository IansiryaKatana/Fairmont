import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Navbar } from "@/components/layout/Navbar";
import { CTASection } from "@/components/shared/CTASection";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Clock } from "lucide-react";

const blogPosts = [
  {
    id: "planning-permission-blackburn",
    title: "Planning Permission Granted for Blackburn Health Centre",
    excerpt: "Fairmont PM is proud to announce our involvement in the new Blackburn health centre development, marking another milestone in our commitment to community infrastructure.",
    date: "November 2024",
    readTime: "4 min read",
    category: "Company News",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
  },
  {
    id: "proactive-project-management",
    title: "How Proactive Project Management Reduces Construction Delays",
    excerpt: "Discover the key strategies our team employs to anticipate challenges and keep projects on schedule. Learn from real-world examples of successful risk mitigation.",
    date: "October 2024",
    readTime: "6 min read",
    category: "Insights",
    image: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false,
  },
  {
    id: "hollins-business-park-update",
    title: "Hollins Business Park Phase 2 Breaks Ground",
    excerpt: "The second phase of the Hollins Business Park development is now underway, bringing new industrial facilities to support the growing logistics sector in the region.",
    date: "September 2024",
    readTime: "3 min read",
    category: "Project Updates",
    image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false,
  },
  {
    id: "sustainable-construction-practices",
    title: "Sustainable Construction: Our Commitment to the Environment",
    excerpt: "At Fairmont PM, we believe in building for the future. Explore our approach to sustainable construction and how we're reducing environmental impact across all projects.",
    date: "August 2024",
    readTime: "5 min read",
    category: "Sustainability",
    image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false,
  },
  {
    id: "cost-management-strategies",
    title: "Effective Cost Management Strategies for Construction Projects",
    excerpt: "Budget overruns are a common challenge in construction. Learn how our quantity surveying and cost management services help clients maintain financial control.",
    date: "July 2024",
    readTime: "7 min read",
    category: "Insights",
    image: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=800",
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

const Blog = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <Layout showFooter={false}>
      {/* Hero Section - Primary Color Background with Centered Title */}
      <section className="relative p-3">
        <div className="relative w-full h-[65vh] rounded-3xl bg-primary flex items-center">
          {/* Navbar inside hero */}
          <div className="absolute top-0 left-0 right-0 z-50">
            <Navbar variant="transparent" insideHero={true} />
          </div>
          
          {/* Centered Title Content */}
          <div className="container mx-auto px-4 relative z-10 pt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.span
                custom={0}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="inline-block bg-white/10 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6"
              >
                Blog
              </motion.span>
              <motion.h1
                custom={1}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-primary-foreground"
              >
                Expert construction insights.
              </motion.h1>
              <motion.p
                custom={2}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-16 md:mb-24"
              >
                Discover actionable tips and strategies to help your projects succeed.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Post - Overlaid Section */}
      {featuredPost && (
        <section className="relative -mt-32 md:-mt-40 z-20 px-3">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-accent text-primary-darker px-4 py-2 rounded-full text-sm font-semibold">
                      Must Read
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="bg-primary/10 text-foreground px-3 py-1 rounded-full text-sm">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <h2 className="font-display text-2xl lg:text-3xl font-bold mb-4 text-foreground">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <Link
                    to={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 md:pt-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">
                      {post.category}
                    </span>
                    <span className="text-muted-foreground text-xs">{post.date}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-primary text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      Read <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        heading="Stay Updated with Our Latest Insights"
        description="Subscribe to receive the latest news, project updates, and industry insights from our team of construction experts."
        backgroundImage="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
      />
    </Layout>
  );
};

export default Blog;