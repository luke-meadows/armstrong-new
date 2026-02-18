import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LogosStrip from '@/components/LogosStrip';
import FeaturedProjects from '@/components/FeaturedProjects';
import SplitServices from '@/components/SplitServices';
import Gallery from '@/components/Gallery';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import Journal from '@/components/Journal';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-white text-black">
      <Header />
      <Hero />
      <LogosStrip />
      <FeaturedProjects />
      <SplitServices />
      <Gallery />
      <Process />
      <Testimonials />
      <Journal />
      <Footer />
    </main>
  );
}
