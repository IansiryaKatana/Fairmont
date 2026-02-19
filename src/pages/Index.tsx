import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { FeaturedProjectSection } from "@/components/home/FeaturedProjectSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout showFooter={false}>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <FeaturedProjectSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
