import Hero from '@/components/home/Hero';
import MarqueeStrip from '@/components/home/MarqueeStrip';
import FeaturedCheeses from '@/components/home/FeaturedCheeses';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import CheeseBenefits from '@/components/home/CheeseBenefits';
import Testimonial from '@/components/home/Testimonial';
import CTABanner from '@/components/home/CTABanner';
import InstagramTeaser from '@/components/home/InstagramTeaser';

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <FeaturedCheeses />
      <WhyChooseUs />
      <CheeseBenefits />
      <Testimonial />
      <CTABanner />
      <InstagramTeaser />
    </>
  );
}
