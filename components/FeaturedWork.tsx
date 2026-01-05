import { featuredWorkData } from '@/lib/constants';
import Card from '@/components/Card';

export default function FeaturedWork() {
  return (
    <div>
      <p className="opacity-50 text-center mb-6">Recent Work</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredWorkData.map((data, index) => (
          <div key={index}>
            <Card
              title={data.title}
              subtitle={data.subtitle}
              link={data.link}
              imageUrl={data.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
