import Header from '@/components/Header';
import FeaturedWork from '@/components/FeaturedWork';
import About from '@/components/About';

export default function Home() {
  return (
    <div className="space-y-24">
      <Header />
      <FeaturedWork />
      <About />
    </div>
  );
}
