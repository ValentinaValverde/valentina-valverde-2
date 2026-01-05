import Header from '@/components/Header';
import FeaturedWork from '@/components/FeaturedWork';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="space-y-24">
      <Header />
      <FeaturedWork />
      <About />
      <Contact />
    </div>
  );
}
